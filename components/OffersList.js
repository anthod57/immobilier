import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container,  Wrapper } from '../styles/StyledOffersList'
import { Offer } from './Offer'

export const OffersList = (props) => {

    useEffect(() => {

    }, [])



    return (
        <Container>
            <Wrapper>
                {props.offers.map((item, index) => {
                    return (
                        <Offer key={index} data={item}></Offer>
                    )
                })}
            </Wrapper>
        </Container>
    )
}
