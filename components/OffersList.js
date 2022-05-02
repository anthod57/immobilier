import React from 'react'
import { Container,  Wrapper } from '../styles/StyledOffersList'
import { Offer } from './Offer'

export const OffersList = (props) => {
    return (
        <Container>
            <Wrapper>
                {props.offers.length > 0 ? props.offers.map((item, index) => {
                    return (
                        <Offer key={index} data={item}></Offer>
                    )
                }) :
                <h2>{"Aucune offre n'a été trouvée"}</h2>
                }
            </Wrapper>
        </Container>
    )
}
