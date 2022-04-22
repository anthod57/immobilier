import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, SearchPanel, Wrapper } from '../styles/StyledHero'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { app, db } from '../firebase/config'
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import AsyncSelect from 'react-select/async';



export const Hero = (props) => {

    const [offerType, setOfferType] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [cities, setCities] = useState(null);
    const [location, setLocation] = useState(null);
    const [maxBudget, setMaxBudget] = useState(0);
    const [minSurface, setMinSurface] = useState(0);


    const locationSelectRef = React.createRef();
    const router = useRouter();

    const search = () => {
        const url = `/search?offerType=${offerType}&propertyType=${propertyType}&location=${location}&maxBudget=${maxBudget}&minSurface=${minSurface}`;
        router.push(url);
    }

    const getCities = async () => {
        const input = locationSelectRef.current.inputRef.value;

        if (input.length > 0) {
            const q = query(collection(db, "cities"), where("name", ">", input.toUpperCase()), limit(8));
            const data = [];
            console.log(q);
            getDocs(q).then((e) => {
                e.docs.map((doc) => {
                    data.push({ value: doc.data().name.toLowerCase().replace(" ", "-"), label: doc.data().name });
                });

                setCities(data);
            }).catch((error) => {
                console.log(error);
            });

            return data;
        } 

        return [];
    }


    return (
        <Container bg={props.bg}>
            <Wrapper>
                <h1>IMMOBILIER vous accompagne dans tous vos projets</h1>
                <SearchPanel>
                    <div className="row">
                        <label htmlFor="offer-type">Type d'offre:</label>
                        <Select id="offer-type" className="react-select" classNamePrefix="react-select" placeholder="Type d'offre" onChange={(e) => setOfferType(e.value)}
                            options={[
                                {
                                    value: 'buy',
                                    label: 'Achat'
                                },
                                {
                                    value: 'rent',
                                    label: 'Location'
                                },
                            ]} />
                    </div>

                    <div className="row">
                        <label htmlFor="property-type">Type de bien:</label>
                        <Select id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Type de bien" onChange={(e) => setPropertyType(e.value)}
                            options={[
                                {
                                    value: 'appartment',
                                    label: 'Appartement'
                                },
                                {
                                    value: 'house',
                                    label: 'Maison'
                                },
                            ]} />
                    </div>

                    <div className="row">
                        <label htmlFor="location">Localisation:</label>
                        <AsyncSelect ref={locationSelectRef} onChange={(e) => setLocation(e.value)} id="location" className="react-select" classNamePrefix="react-select" placeholder="Localisation" loadOptions={async () => await getCities()} />
                    </div>

                    <div className="row">
                        <label htmlFor="max-budget">Budget max (€):</label>
                        <input id="max-budget" onChange={(e) => setMaxBudget(+e.target.value)} className="input-text" type="tel" min="1" step="1" />
                    </div>

                    <div className="row">
                        <label htmlFor="min-surface">Surface min (m²):</label>
                        <input id="min-surface" onChange={(e) => setMinSurface(+e.target.value)} className="input-text" type="tel" min="1" step="1" />
                    </div>

                    <div className="row">
                        <br />
                        <button onClick={() => search()}><FontAwesomeIcon icon={solid('search')} />Rechercher</button>
                    </div>
                </SearchPanel>
            </Wrapper>
        </Container>
    )
}
