import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from '../styles/StyledSearchBar2'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { db } from '../firebase/config'
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { PROPERTY_TYPE, OFFER_TYPE } from '../data/select';
import { clearProps, getProps, setProps } from '../redux/features/searchSlice';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'

export const SearchBar2 = () => {
    const searchProps = useSelector(getProps);
    const dispatch = useDispatch();
    const router = useRouter();

    const [cities, setCities] = useState([]);
    const [offerType, setOfferType] = useState(0);
    const [propertyType, setPropertyType] = useState(null);
    const [location, setLocation] = useState(null);

    const locationSelectRef = React.createRef();

    const search = () => {
        const url = `/search?offerType=${offerType == 0 ? "buy" : "rent"}&propertyType=${propertyType == 0 ? "appartment" : "house"}&location=${location}`;
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

    // Manually set states based on redux because defaultValue prop doesn't call onChange event
    useEffect(() => {
        setOfferType(searchProps.props.offerType > -1 ? searchProps.props.offerType : 0);
        setPropertyType(searchProps.props.propertyType);
        setLocation(searchProps.props.location ? searchProps.props.location.value : null);
    }, [searchProps])

    return (
        <Container>
            <Wrapper>
                <div className="header">
                    <button className={offerType === 0 ? "active" : ""} onClick={(e) => dispatch(setProps({offerType: 0}))}>Acheter</button>
                    <button className={offerType === 1 ? "active" : ""} onClick={(e) => dispatch(setProps({offerType: 1}))}>Louer</button>
                </div>
                <div className="search-container">
                    <div className="selects">
                        <AsyncSelect defaultValue={searchProps.props.location || null} onChange={(e) => dispatch(setProps({ location: e }))} ref={locationSelectRef} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Emplacement..." loadOptions={async () => await getCities()} />
                        <Select defaultValue={PROPERTY_TYPE[searchProps.props.propertyType]} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Type de bien" options={PROPERTY_TYPE} onChange={(e) => dispatch(setProps({ propertyType: PROPERTY_TYPE.findIndex(x => x.value == e.value) }))} />
                    </div>
                    <button onClick={() => search()}><FontAwesomeIcon icon={solid('search')} />Rechercher</button>
                </div>
            </Wrapper>
        </Container>
    )
}
