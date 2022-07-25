import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from '../styles/StyledAdvancedSearchBar'
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
import qs from 'qs'
import axios from 'axios'
import { HOST } from '../data/config';

export const AdvancedSearchBar = (props) => {

    const searchProps = useSelector(getProps);
    const dispatch = useDispatch();

    const locationSelectRef = React.createRef();
    const router = useRouter();

    const [cities, setCities] = useState([]);
    const [offerType, setOfferType] = useState(0);
    const [propertyType, setPropertyType] = useState(null);
    const [location, setLocation] = useState(null);
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(0);
    const [minSurface, setMinSurface] = useState(0);
    const [maxSurface, setMaxSurface] = useState(0);
    const [refreshOffers, setRefreshOffers] = useState(true);
    const [currentOffers, setCurrentOffers] = useState([]);

    // Request data from API if user changed any prop among: offer type, property type or city. If not, just filter offers from previous gathered offers to avoid useless requests.
    const fetchData = async () => {
        if (refreshOffers) {
            const { offerType, propertyType, location } = searchProps.props;

            if (!location) {
                return;
            }

            const res = await axios.request({
                method: "GET",
                url: `${HOST}/api/offers`,
                params: {
                    getBy: "offerType",
                    value: offerType === 0 ? "buy" : "rent",
                    filters: [
                        {
                            filterBy: "city",
                            value: location.value
                        },
                        {
                            filterBy: "propertyType",
                            value: propertyType === 0 ? "appartment" : "house"
                        }
                    ]
                },
                paramsSerializer: params => { return qs.stringify(params) }
            }).then((response) => {
                props.setOffers(filterData(response.data));
                setCurrentOffers(response.data);
                setRefreshOffers(false);
            }).catch((error) => console.log(error));
        } else {
            props.setOffers(filterData(currentOffers));
        }
    }

    // Filters offers by budget and surface (min and max).
    const filterData = (data) => {
        const filters = [];
        let filteredData = data;

        searchProps.props.minBudget > 0 ? filters.push({ filterBy: "minBudget", value: searchProps.props.minBudget }) : null;
        searchProps.props.maxBudget > 0 ? filters.push({ filterBy: "maxBudget", value: searchProps.props.maxBudget }) : null;
        searchProps.props.minSurface > 0 ? filters.push({ filterBy: "minSurface", value: searchProps.props.minSurface }) : null;
        searchProps.props.maxSurface > 0 ? filters.push({ filterBy: "maxSurface", value: searchProps.props.maxSurface }) : null;

        filters.map((filter) => {
            switch (filter.filterBy) {
                case "minBudget":
                    filteredData = filteredData.filter(x => x.price >= filter.value);
                    break;

                case "maxBudget":
                    filteredData = filteredData.filter(x => x.price <= filter.value);
                    break;

                case "minSurface":
                    filteredData = filteredData.filter(x => x.surface >= filter.value);
                    break;

                case "maxSurface":
                    filteredData = filteredData.filter(x => x.surface <= filter.value);
                    break;
            }
        })
        return filteredData;
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
        setOfferType(searchProps.props.offerType > -1 ? searchProps.props.offerType : null);
        setPropertyType(searchProps.props.propertyType > -1 ? searchProps.props.propertyType : null);
        setLocation(searchProps.props.location ? searchProps.props.location.value : null);
        setMinBudget(searchProps.props.minBudget > -1 ? searchProps.props.minBudget : 0);
        setMaxBudget(searchProps.props.maxBudget > -1 ? searchProps.props.maxBudget : 0);
        setMinSurface(searchProps.props.minSurface > -1 ? searchProps.props.minSurface : 0);
        setMaxSurface(searchProps.props.maxSurface > -1 ? searchProps.props.maxSurface : 0);
    }, [searchProps])

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Container>
            <Wrapper>
                <div className="header">
                    <button className={offerType === 0 ? "active" : ""} onClick={(e) => { dispatch(setProps({ offerType: 0 })); setRefreshOffers(true); }}>Acheter</button>
                    <button className={offerType === 1 ? "active" : ""} onClick={(e) => { dispatch(setProps({ offerType: 1 })); setRefreshOffers(true); }}>Louer</button>
                </div>
                <div className="search-container">
                    <div className="selects">
                        <AsyncSelect defaultValue={searchProps.props.location || null} onChange={(e) => { dispatch(setProps({ location: e })); setRefreshOffers(true); }} ref={locationSelectRef} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Emplacement..." loadOptions={async () => await getCities()} />
                        <Select defaultValue={PROPERTY_TYPE[searchProps.props.propertyType]} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} id="property-type" className="react-select" classNamePrefix="react-select" placeholder="Type de bien" options={PROPERTY_TYPE} onChange={(e) => { dispatch(setProps({ propertyType: PROPERTY_TYPE.findIndex(x => x.value == e.value) })); setRefreshOffers(true); }} />
                        <div className="row">
                            <span className="price"><input onChange={(e) => dispatch(setProps({ minBudget: +e.target.value }))} defaultValue={searchProps.props.minBudget > 0 ? searchProps.props.minBudget : null} id="min-budget" className="input-text" type="number" min="0" step="100" placeholder={"Budget min."} /></span>
                            <span className="price"><input onChange={(e) => dispatch(setProps({ maxBudget: +e.target.value }))} defaultValue={searchProps.props.maxBudget > 0 ? searchProps.props.maxBudget : null} id="max-budget" className="input-text" type="number" min="0" step="100" placeholder={"Budget max."} /></span>
                        </div>
                        <div className="row">
                            <span className="surface"><input alt={"test"} onChange={(e) => dispatch(setProps({ minSurface: +e.target.value }))} defaultValue={searchProps.props.minSurface > 0 ? searchProps.props.minSurface : null} id="min-surface" className="input-text" type="number" min="0" step="1" placeholder={"Surface min."} /></span>
                            <span className="surface"><input onChange={(e) => dispatch(setProps({ maxSurface: +e.target.value }))} defaultValue={searchProps.props.maxSurface > 0 ? searchProps.props.maxSurface : null} id="max-surface" className="input-text" type="number" min="0" step="1" placeholder={"Surface max."} /></span>
                        </div>
                    </div>
                    <button onClick={() => fetchData()}><FontAwesomeIcon icon={solid('search')} />Rechercher</button>
                </div>
            </Wrapper>
        </Container>
    )
}
