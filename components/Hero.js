import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '../styles/StyledHero'
import { SearchBar2 } from './SearchBar2'

export const Hero = () => {
    return (
        <Container>
            <div className="hero-background">
                <Image quality={90} layout="fill" objectFit='cover' src={"/images/hero2.jpg"} loading="lazy" />
            </div>

            <Wrapper>
                <h1>Title</h1>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                <SearchBar2></SearchBar2>
            </Wrapper>
        </Container>
    )
}
