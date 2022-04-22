import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Wrapper, MobileMenuButton, MobileMenu } from '../styles/StyledNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { LoginPanel } from './LoginPanel'

export const Navbar = (props) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrollOffset(window.pageYOffset);
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <Container scrollOffset={scrollOffset} show={showMobileMenu}>
            <Wrapper>
                <div className="logo">
                    <Image quality={100} layout='fill' objectFit='contain' src={"/images/logo.png"} loading="lazy" />
                </div>
                <div className="menu">
                    <ul>
                        {props.menu.map((item, index) => {
                            if(item.text === "Connexion"){
                                return (<a onClick={() => {setShowLoginForm(true)}} key={`navItem-${index}`} className={props.active == index ? "active" : ""}><li>{item.text}</li></a>)
                            }

                            return (<Link key={`navItem-${index}`} href={item.link}><a className={props.active == index ? "active" : ""}><li>{item.text}</li></a></Link>)
                        })}
                    </ul>
                </div>
                <MobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FontAwesomeIcon icon={solid('bars')} />
                </MobileMenuButton>
                <MobileMenu show={showMobileMenu}>
                    <ul>
                        {props.menu.map((item, index) => {
                            return (<Link key={`navItem-${index}`} href={item.link}><a className={props.active == index ? "active" : ""}><li>{item.text}</li></a></Link>)
                        })}
                    </ul>
                </MobileMenu>
            </Wrapper>
            {showLoginForm && (<LoginPanel setShow={setShowLoginForm}></LoginPanel>)}
        </Container>
    )
}
