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
            <div className="header">
                <SearchBar></SearchBar>
            </div>
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
