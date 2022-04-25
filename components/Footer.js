import React from 'react'
import Link from 'next/link'
import { Container, Wrapper } from '../styles/StyledFooter'

export const Footer = (props) => {
    return (
        <Container>
            <Wrapper>
                <ul>
                    {props.menu ? props.menu.map((item, index) => {
                        if(item.side !== "bottom") return;

                        return(
                            <Link key={index} href={item.link}><a><li>{item.text}</li></a></Link>
                        )
                    }) : ""}
                </ul>
                <span>© Copyright 2022 - Crée par <a href="https://anthonydragun.fr/">AD</a></span>
            </Wrapper>
        </Container>
    )
}
