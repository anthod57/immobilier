import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, Wrapper, AnnounceContainer } from '../styles/StyledAnnounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Announce = (props) => {

    const [image, setImage] = useState(0);

    useEffect(() => {

    }, [image])

    const changeImage = (direction) => {
        let currentIndex = image;

        if (direction == 1) {
            if (currentIndex + 1 >= props.data.images.length) {
                setImage(0);
            } else {
                setImage(currentIndex + 1);
            }
        } else {
            if (currentIndex - 1 < 0) {
                setImage(props.data.images.length - 1);
            } else {
                setImage(currentIndex - 1);
            }
        }
    }

    return (
        <Container>
            <Wrapper>
                <AnnounceContainer>
                    <div className="image-container">
                        {props.data.images?.map((item, index) => {
                            return (
                                <Image key={index} style={image == index ? { opacity: 1 } : { opacity: 0 }} quality={80} layout='fill' objectFit='cover' src={props.data.images[index]} loading={index == 0 ? "eager" : "lazy"} priority={index == 0 ? true : false} />
                            )
                        })}

                        <div className="controls">
                            <FontAwesomeIcon onClick={() => changeImage(-1)} icon={solid('chevron-left')} />
                            <FontAwesomeIcon onClick={() => changeImage(1)} icon={solid('chevron-right')} />
                        </div>
                    </div>
                    <div className="informations">
                        <h2>{props.data.title}</h2>
                        <div className="row">
                            <span>{props.data.price}€</span>
                            <span>{props.data.surface} m²</span>
                        </div>
                        <div className="row">
                            <span><FontAwesomeIcon icon={solid('bed')} />{props.data.bedrooms}</span>
                        </div>
                        <div className="row">
                            <span><FontAwesomeIcon icon={solid('bath')} />{props.data.bathrooms}</span>
                        </div>
                        <p className="description">{props.data.description}</p>
                    </div>
                </AnnounceContainer>
            </Wrapper>
        </Container>
    )
}
