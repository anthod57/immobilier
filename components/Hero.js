import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '../styles/StyledHero'
import { SearchBar } from './SearchBar'
import { AdvancedSearchBar } from './AdvancedSearchBar'

export const Hero = (props) => {
    return (
        <Container height={props.height}>
            <div className="hero-background">
                <Image quality={90} layout="fill" objectFit='cover' src={props.background} priority />
            </div>

            <Wrapper height={props.height}>
                {props.title && (<h1>{props.title}</h1>)}
                {props.subtitle && (<h2>{props.subtitle}</h2>)}
                {props.searchBar === "advanced" ? (<AdvancedSearchBar setOffers={props.setOffers}></AdvancedSearchBar>) : props.searchBar === "basic" ? <SearchBar></SearchBar> : null}
            </Wrapper>
        </Container>
    )
}
