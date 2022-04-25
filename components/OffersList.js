import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container,  Wrapper } from '../styles/StyledOffersList'
import { Offer } from './Offer'
import { SearchBar } from './SearchBar'

export const OffersList = (props) => {

    useEffect(() => {

    }, [])



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
