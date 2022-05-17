import React, { useState, useEffect } from 'react'
import { Container, Wrapper, Form } from '../styles/StyledNewAdForm'
import Image from 'next/image'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import { db, storage } from '../firebase/config'
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { PROPERTY_TYPE, OFFER_TYPE } from '../data/select';
import Validator from "fastest-validator";
import { POST_SCHEMA } from "../data/schemas";
import axios from 'axios'
import { getUser } from "../redux/features/userSlice";
import { HOST } from '../data/config'
import { useSelector } from "react-redux";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/router'

export const NewAdForm = (props) => {

    const [offerData, setOfferData] = useState({});
    const [images, setImages] = useState([]);
    let postID;
    const [error, setError] = useState(null);

    const v = new Validator();
    const user = useSelector(getUser);
    const router = useRouter();

    const [cities, setCities] = useState([]);
    const locationSelectRef = React.createRef();

    const postAd = () => {
        if (v.validate(offerData, POST_SCHEMA) !== true) {
            setError("Veuillez remplir tous les champs.");
        } else {
            axios.request({
                method: "POST",
                url: `${HOST}/api/offers`,
                data: offerData
            }).then(async (response) => { // Upload images and add them to the offer once we have the offer ID
                let urls = [];
                let updatedOffer = offerData;
                postID = response.data.id;
                
                if (images.length > 0) {

                    for (let i = 0; i < images.length; i++) {
                        const imageRef = ref(storage, `uploads/offers/${postID}/${images[i].name}`);
                        await uploadBytes(imageRef, images[i]).then(async (uploadedImage) => {
                            await getDownloadURL(uploadedImage.ref).then((downloadUrl) => urls.push(downloadUrl));
                        })
                    }

                    updatedOffer.images = urls;

                    axios.request({
                        method: "PUT",
                        url: `${HOST}/api/offers`,
                        data: {
                            id: postID,
                            offer: updatedOffer
                        }
                    }).catch((error) => setError(error.code));
                }
            }).catch((error) => setError(error.code)).then(() => {
                router.push(`/annonces/${offerData.offerType == "buy" ? "achat" : "locations"}/${postID}`)
            });
        }
    }

    const updateAd = () => {
        if (v.validate(offerData, POST_SCHEMA) !== true) {
            setError("Veuillez remplir tous les champs.");
        } else {
            axios.request({
                method: "PUT",
                url: `${HOST}/api/offers`,
                data: {
                    id: offerData.id,
                    offer: {...offerData, id: undefined}
                }
            }).then(async (response) => { // Upload images and add them to the offer once we have the offer ID
                let urls = [];
                let updatedOffer = offerData;
                postID = response.data.id;

                if (images.length > 0) {

                    for (let i = 0; i < images.length; i++) {
                        const imageRef = ref(storage, `uploads/offers/${postID}/${images[i].name}`);
                        await uploadBytes(imageRef, images[i]).then(async (uploadedImage) => {
                            await getDownloadURL(uploadedImage.ref).then((downloadUrl) => urls.push(downloadUrl));
                        })
                    }

                    updatedOffer.images = urls;
                    axios.request({
                        method: "PUT",
                        url: `${HOST}/api/offers`,
                        data: {
                            id: postID,
                            offer: updatedOffer
                        }
                    }).catch((error) => setError(error.code))
                }
            }).catch((error) => setError(error.code)).then(() => {
                router.push(`/annonces/${offerData.offerType == "buy" ? "achat" : "locations"}/${offerData.id}`)
            });
        }
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
        if(props.data){
            setOfferData(props.data);
        }else{
            setOfferData({postedBy: user.user.uid}); 
        }
    }, [])

    return (
        <Container>
            <div className="background">
                <Image quality={90} layout="fill" objectFit='cover' src={props.background} priority />
            </div>

            <Wrapper>
                <Form>
                    <Select defaultValue={props.data ? OFFER_TYPE[OFFER_TYPE.findIndex(x => x.value === props.data.offerType)] : ""} onChange={(e) => setOfferData({ ...offerData, offerType: OFFER_TYPE.findIndex(x => x.value == e.value) === 0 ? "buy" : "rent" })} options={OFFER_TYPE} id="offer-type" className="react-select" classNamePrefix="react-select" placeholder={"Type d'offre"} />
                    <Select defaultValue={props.data ? PROPERTY_TYPE[PROPERTY_TYPE.findIndex(x => x.value === props.data.propertyType)] : ""} onChange={(e) => setOfferData({ ...offerData, propertyType: PROPERTY_TYPE.findIndex(x => x.value == e.value) === 0 ? "appartment" : "house" })} options={PROPERTY_TYPE} id="property-type" className="react-select" classNamePrefix="react-select" placeholder={"Type de bien"} />
                    <input defaultValue={props.data ? props.data.title : ""} onChange={(e) => setOfferData({ ...offerData, title: e.target.value })} id="ad-title" type="text" className="input-text" placeholder={"Titre de l'annonce"} />
                    <textarea defaultValue={props.data ? props.data.description : ""} onChange={(e) => setOfferData({ ...offerData, description: e.target.value })} rows="10" id="ad-description" type="text" className="input-text" placeholder={"Description"} />
                    <input defaultValue={props.data ? props.data.address : ""} onChange={(e) => setOfferData({ ...offerData, address: e.target.value })} id="ad-address" type="text" className="input-text" placeholder={"Adresse"} />
                    <AsyncSelect defaultValue={props.data ? {value: props.data.city, label: props.data.city.toUpperCase().replace("-", " ")} : ""} onChange={(e) => setOfferData({ ...offerData, city: e.value })} ref={locationSelectRef} id="ad-city" className="react-select" classNamePrefix="react-select" placeholder={"Ville"} loadOptions={async () => await getCities()} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                    <div className="row">
                        <span className="price"><input defaultValue={props.data ? props.data.price : ""} onChange={(e) => setOfferData({ ...offerData, price: +e.target.value })} min="0" step="100" id="ad-price" type="number" className="input-text" placeholder={"Prix"} /></span>
                        <span className="surface"><input defaultValue={props.data ? props.data.surface : ""} onChange={(e) => setOfferData({ ...offerData, surface: +e.target.value })} min="0" step="1" id="ad-surface" type="number" className="input-text" placeholder={"Surface"} /></span>
                    </div>
                    <div className="row">
                        <span><input defaultValue={props.data ? props.data.land_surface : ""} onChange={(e) => setOfferData({ ...offerData, land_surface: +e.target.value })} min="0" step="100" id="ad-land-surface" type="number" className="input-text" placeholder={"Taille du terrain"} /></span>
                        <span><input defaultValue={props.data ? props.data.rooms : ""} onChange={(e) => setOfferData({ ...offerData, rooms: +e.target.value })} min="0" step="100" id="ad-rooms" type="number" className="input-text" placeholder={"Pièces"} /></span>
                    </div>
                    <div className="row">
                        <span><input defaultValue={props.data ? props.data.bedrooms : ""} onChange={(e) => setOfferData({ ...offerData, bedrooms: +e.target.value })} min="0" step="1" id="ad-bedrooms" type="number" className="input-text" placeholder={"Chambres"} /></span>
                        <span><input defaultValue={props.data ? props.data.bathrooms : ""} onChange={(e) => setOfferData({ ...offerData, bathrooms: +e.target.value })} min="0" step="1" id="ad-bathrooms" type="number" className="input-text" placeholder={"Salles de bains"} /></span>
                    </div>
                    <input onChange={(e) => setImages(e.target.files)} type="file" className="input-text" multiple />
                    <button onClick={() => props.data ? updateAd() : postAd()}>Confirmer</button>
                    {error && (<span style={{ color: "red" }}>{error}</span>)}
                </Form>
            </Wrapper>
        </Container>
    )
}
