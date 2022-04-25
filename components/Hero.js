import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '../styles/StyledHero'
import { SearchBar } from './SearchBar'
import { AdvancedSearchBar } from './AdvancedSearchBar'

export const Hero = (props) => {
    return (
        <Container>
            <div className="hero-background">
                <Image quality={90} layout="fill" objectFit='cover' src={props.background} priority />
            </div>

            <Wrapper>
                {props.title && (<h1>{props.title}</h1>)}
                {props.subtitle && (<h2>{props.subtitle}</h2>)}
                {props.searchBar === "advanced" ? (<AdvancedSearchBar setOffers={props.setOffers}></AdvancedSearchBar>) : <SearchBar></SearchBar>}
            </Wrapper>
        </Container>
    )
}
