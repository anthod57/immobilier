import React, { useEffect, useState } from 'react'
import { Container, SearchPanel, Wrapper } from '../styles/StyledHero'
import { SearchBar } from './SearchBar'



export const Hero = (props) => {
    return (
        <Container bg={props.bg}>
            <Wrapper>
                <h1>IMMOBILIER vous accompagne dans tous vos projets</h1>
                <SearchBar></SearchBar>
                <b style={{color: "red"}}>{"Exemples d'offres -> Type d'offre: Achat | Type de bien: Appartement | Localisation: Paris 06"}</b>
            </Wrapper>
        </Container>
    )
}
