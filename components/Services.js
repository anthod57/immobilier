import React, { useEffect } from 'react'
import Image from 'next/image'
import { Container, Wrapper, Service } from '../styles/StyledServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export const Services = (props) => {
    return (
        <Container>
            <hr />
            <h2>Nos services</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <Wrapper>
                {props.services ? props.services.map((item, index) => {
                    return (
                        <Service key={index}>
                            {item.icon}
                            <h4>{item.title}</h4>
                            <p className="description">{item.description}</p>
                        </Service>
                    )
                }) : ""}
            </Wrapper>
        </Container>
    )
}
