import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container } from '../styles/StyledOffer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Offer = (props) => {

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function formatPropertyType(type) {
        return type == "appartment" ? "Appartement" : "Maison"
    }

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
            if (currentIndex - 1 <= 0) {
                setImage(props.data.images.length - 1);
            } else {
                setImage(currentIndex - 1);
            }
        }
    }

    return (
        <Container>
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
            <div className="content">
                <div className="row">
                    <span>{formatPropertyType(props.data.propertyType)}</span>
                    <b className="price">{formatPrice(props.data.price)}€</b>
                </div>
                
                <h2>{props.data.title}</h2>

                <div className="row">
                    <span className="city">{props.data.city.toUpperCase()}</span>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="left">
                        <b><FontAwesomeIcon icon={solid('ruler-combined')} />{props.data.surface} m²</b>
                    </div>

                    <div className="right">
                        <b><FontAwesomeIcon icon={solid('bed')} />{props.data.bedrooms}</b>
                        <b><FontAwesomeIcon icon={solid('bath')} />{props.data.bathrooms}</b>
                    </div>
                </div>

                {/* <button>{"Plus d'informations"}</button> */}
            </div>
        </Container>
    )
}
