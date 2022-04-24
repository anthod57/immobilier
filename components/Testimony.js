import React, { useState } from 'react'
import { Container, Wrapper, TestimonyItem } from '../styles/StyledTestimony'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Testimony = (props) => {

    const [current, setCurrent] = useState(0);

    const changeTestimony = (direction) => {
        let currentIndex = current;

        if (direction == 1) {
            if (currentIndex + 1 >= props.testimonies.length) {
                setCurrent(0);
            } else {
                setCurrent(currentIndex + 1);
            }
        } else {
            if (currentIndex - 1 < 0) {
                setCurrent(props.testimonies.length - 1);
            } else {
                setCurrent(currentIndex - 1);
            }
        }
    }

    return (
        <Container>
            <div className="testimony-background">
                <Image quality={90} layout="fill" objectFit='cover' src={"/images/testimony.jpg"} loading="lazy" />
            </div>
            <Wrapper>
                <h2>Témoignages</h2>

                <div className="controls">
                    <FontAwesomeIcon onClick={() => changeTestimony(-1)} icon={solid('chevron-left')} />
                    <FontAwesomeIcon onClick={() => changeTestimony(1)} icon={solid('chevron-right')} />
                </div>

                {props.testimonies ? props.testimonies.map((item, index) => {
                    return (
                        <TestimonyItem key={index} style={current == index ? { opacity: "1" } : { opacity: "0" }}>
                            <p>{item.text}</p>
                            <span>{item.name}</span>
                        </TestimonyItem>
                    )
                }) : ""}
            </Wrapper>
        </Container>
    )
}
