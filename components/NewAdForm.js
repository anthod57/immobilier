import React from 'react'
import { Container, Wrapper, Form } from '../styles/StyledNewAdForm'
import Image from 'next/image'
import Select from 'react-select'

export const NewAdForm = (props) => {
    return (
        <Container>
            <div className="background">
                <Image quality={90} layout="fill" objectFit='cover' src={props.background} priority />
            </div>

            <Wrapper>
                <Form>
                    <Select id="offer-type" className="react-select" classNamePrefix="react-select" placeholder={"Type d'offre"} />
                    <Select id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Type de bien" />
                    <input id="ad-title" type="text" className="input-text" placeholder={"Titre de l'annonce"} />
                    <textarea  rows="10" id="ad-description" type="text" className="input-text" placeholder={"Description"} />
                    <input id="ad-address" type="text" className="input-text" placeholder={"Adresse"} />
                    <Select id="ad-city" className="react-select" classNamePrefix="react-select" placeholder={"Ville"} />
                    <div className="row">
                        <span className="price"><input min="0" step="100" id="ad-price" type="number" className="input-text" placeholder={"Prix"} /></span>
                        <span className="surface"><input min="0" step="1" id="ad-surface" type="number" className="input-text" placeholder={"Surface"} /></span>
                    </div>
                    <div className="row">
                        <span><input min="0" step="100" id="ad-price" type="number" className="input-text" placeholder={"Taille du terrain"} /></span>
                        <span><input min="0" step="100" id="ad-rooms" type="number" className="input-text" placeholder={"Pièces"} /></span>
                    </div>
                    <div className="row">
                        <span><input min="0" step="1" id="ad-bedrooms" type="number" className="input-text" placeholder={"Chambres"} /></span>
                        <span><input min="0" step="1" id="ad-bathrooms" type="number" className="input-text" placeholder={"Salles de bains"} /></span>
                    </div>
                    <input type="file" className="input-text" multiple />
                    <button>Confirmer</button>
                </Form>
            </Wrapper>
        </Container>
    )
}
