import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Wrapper, MobileMenuButton, MobileMenu } from '../styles/StyledNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { LoginPanel } from './LoginPanel'
import { getUser } from "../redux/features/userSlice";
import { useSelector } from "react-redux";
import useAuth from '../firebase/auth'

export const Navbar = (props) => {

    const user = useSelector(getUser);
    const { signOutUser } = useAuth();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(-1);
    const [scrollOffset, setScrollOffset] = useState(0);

    // Set navbar background color to white when page is scrolled
    useEffect(() => {
        const onScroll = () => {
            setScrollOffset(window.pageYOffset);
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const menuFilter = (filter) => props.menu.map((item, index) => {
        if (filter && item.side !== filter.side || item.side == "bottom") return;
        if (!item.showIfLogged && user.user) return; // If user is logged in and link should not be showed in this case
        if (item.hideIfNotLogged && !user.user) return; // If user is not logged in and link requires it 

        if (item.link === "login") {
            return (<a onClick={() => { setShowLoginForm(1) }} key={`navItem-${index}`} className={props.active == index ? "active" : ""}><li>{item.text}</li></a>)
        }

        if (item.link === "signout") {
            return (<a onClick={async () => await signOutUser()} key={`navItem-${index}`} className={props.active == index ? "active" : ""}><li>{item.text}</li></a>)
        }

        if (item.link == "register") {
            return (<a onClick={() => { setShowLoginForm(0) }} key={`navItem-${index}`} className={props.active == index ? "active" : ""}><li>{item.text}</li></a>)
        }

        return (<Link key={`navItem-${index}`} href={item.link}><a className={props.active == item.id ? "active" : ""}><li>{item.text}</li></a></Link>)
    })

    return (
        <Container scrollOffset={scrollOffset} show={showMobileMenu} forceWhite={props.forceWhite}>
            <Wrapper>
                <div className="logo">
                    <Link href="/"><a><h2>Logo</h2></a></Link>
                </div>
                <div className="menu">
                    <div className="left">
                        <ul>
                            {menuFilter({ side: "left" })}
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            {menuFilter({ side: "right" })}
                        </ul>
                    </div>
                </div>
                <MobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FontAwesomeIcon icon={solid('bars')} />
                </MobileMenuButton>
                <MobileMenu show={showMobileMenu}>
                    <ul>
                        {menuFilter()}
                    </ul>
                </MobileMenu>
            </Wrapper>
            {showLoginForm > -1 && (<LoginPanel setShow={setShowLoginForm} show={showLoginForm}></LoginPanel>)}
        </Container>
    )
}
