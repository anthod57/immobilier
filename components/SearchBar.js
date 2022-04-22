import React, { useState, useEffect } from 'react'
import { Container } from '../styles/StyledSearchBar'
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { db } from '../firebase/config'
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { useRouter } from 'next/router'
import { clearProps, getProps, setProps } from '../redux/features/searchSlice';
import { useSelector, useDispatch } from "react-redux";
import { PROPERTY_TYPE, OFFER_TYPE } from '../data/select';

export const SearchBar = (props) => {
    const searchProps = useSelector(getProps);
    const dispatch = useDispatch();

    const locationSelectRef = React.createRef();
    const router = useRouter();

    const [cities, setCities] = useState([]);
    const [offerType, setOfferType] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [location, setLocation] = useState(null);
    const [maxBudget, setMaxBudget] = useState(0);
    const [minSurface, setMinSurface] = useState(0);

    const search = () => {
        const url = `/search?offerType=${offerType}&propertyType=${propertyType}&location=${location}&maxBudget=${maxBudget}&minSurface=${minSurface}`;
        router.push(url);
    }

    const getCities = async () => {
        const input = locationSelectRef.current.inputRef.value;

        if (input.length > 0) {
            const q = query(collection(db, "cities"), where("name", ">", input.toUpperCase()), limit(8));
            const data = [];
            
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

    useEffect(() => {
        setOfferType(searchProps.props.offerType ? OFFER_TYPE[searchProps.props.offerType].value : null);
        setPropertyType(searchProps.props.propertyType ? PROPERTY_TYPE[searchProps.props.propertyType].value : null);
        setLocation(searchProps.props.location ? searchProps.props.location.value : null);
        setMaxBudget(searchProps.props.maxBudget ? searchProps.props.maxBudget : 0);
        setMinSurface(searchProps.props.minSurface ? searchProps.props.minSurface : 0);
        
    }, [searchProps])

    return (
        <Container>
            <div className="row">
                <label htmlFor="offer-type">{"Type d'offre:"}</label>
                <Select defaultValue={OFFER_TYPE[searchProps.props.offerType]} id="offer-type" className="react-select" classNamePrefix="react-select" placeholder="Type d'offre" onChange={(e) => dispatch(setProps({offerType: OFFER_TYPE.findIndex(x => x.value == e.value)}))}
                    options={OFFER_TYPE} />
            </div>

            <div className="row">
                <label htmlFor="property-type">Type de bien:</label>
                <Select defaultValue={PROPERTY_TYPE[searchProps.props.propertyType]} id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Type de bien" onChange={(e) => dispatch(setProps({propertyType: PROPERTY_TYPE.findIndex(x => x.value == e.value)}))}
                    options={PROPERTY_TYPE} />
            </div>

            <div className="row">
                <label htmlFor="location">Localisation:</label>
                <AsyncSelect ref={locationSelectRef} defaultValue={searchProps.props.location || null} onChange={(e) => dispatch(setProps({location: e}))} id="location" className="react-select" classNamePrefix="react-select" placeholder="Localisation" loadOptions={async () => await getCities()} />
            </div>

            <div className="row">
                <label htmlFor="max-budget">Budget max (€):</label>
                <input id="max-budget" defaultValue={searchProps.props.maxBudget || 0} onChange={(e) => dispatch(setProps({maxBudget: +e.target.value}))} className="input-text" type="tel" min="1" step="1" />
            </div>

            <div className="row">
                <label htmlFor="min-surface">Surface min (m²):</label>
                <input id="min-surface" defaultValue={searchProps.props.minSurface || 0} onChange={(e) => dispatch(setProps({minSurface: +e.target.value}))} className="input-text" type="tel" min="1" step="1" />
            </div>

            <div className="row">
                <br />
                <button onClick={() => search()}><FontAwesomeIcon icon={solid('search')} />Rechercher</button>
            </div>
        </Container>
    )
}
