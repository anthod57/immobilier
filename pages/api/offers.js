import { app, db } from "../../firebase/config";
import { doc, orderBy, deleteDoc, collection, getDoc, addDoc, query, where, getDocs, setDoc, limit, Timestamp } from "firebase/firestore";
import Validator from "fastest-validator";
import qs from 'qs'
import { POST_SCHEMA, GET_SCHEMA, PUT_SCHEMA, DELETE_SCHEMA } from "../../data/schemas";

const v = new Validator();

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            if (req.body.importFromSeloger) { // Import an offer directly from a Seloger ad, using NEXT_DATA json data on the ad page
                return new Promise((resolve, object) => {
                    const offer = {
                        title: req.body.props.pageProps.title,
                        offerType: req.body.props.pageProps.params.transactionType == "achat" ? "buy" : "rent",
                        propertyType: req.body.props.pageProps.params.propertyType == "maison" ? "house" : "appartment",
                        description: req.body.props.pageProps.listingData.listing.listingDetail.descriptive,
                        price: req.body.props.pageProps.listingData.listing.listingDetail.listingPrice.price,
                        city: req.body.props.pageProps.params.city,
                        address: "",
                        rooms: req.body.props.pageProps.listingData.listing.listingDetail.roomCount,
                        bedrooms: req.body.props.pageProps.listingData.listing.listingDetail.bedroomCount,
                        bathrooms: 1, //NEED TO CHANGE THIS MANUALLY
                        surface: req.body.props.pageProps.listingData.listing.listingDetail.surface,
                        land_surface: 500, //NEED TO CHANGE THIS MANUALLY
                    }

                    let images = []

                    req.body.props.pageProps.listingData.listing.listingDetail.media.photos.map((photo) => {
                        images.push(photo.defaultUrl);
                    })

                    offer.images = images;

                    if (v.validate(offer, POST_SCHEMA) !== true) {
                        return res.status(500).send("Invalid request");
                    } else {
                        addDoc(collection(db, "offers"), offer).then((doc) => {
                            res.status(200).json({ id: doc.id });
                            resolve();
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json(error);
                            resolve();
                        })
                    }
                })
            } else {
                if (v.validate(req.body, POST_SCHEMA) !== true) {
                    console.log(v.validate(req.body, POST_SCHEMA))
                    return res.status(500).send("Invalid request");
                } else {
                    return new Promise((resolve, object) => {
                        addDoc(collection(db, "offers"), req.body).then((doc) => {
                            res.status(200).json({ id: doc.id });
                            resolve();
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json(error);
                            resolve();
                        })
                    })
                }
            }
        }

        case 'GET': {
            const body = qs.parse(req.query);
            
            if (v.validate(body, GET_SCHEMA) !== true) {
                return res.status(500).send("Invalid request");
            } else {
                if (body.getBy === "id") { // Get an offer by ID
                    const docRef = doc(db, "offers", body.value);

                    return new Promise((resolve, object) => {
                        getDoc(docRef).then((doc) => {
                            if(doc.exists()) {
                                res.status(200).json({...doc.data(), id: doc.id});
                            }else{
                                res.status(404).json({});
                            }
                            resolve();
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json(error);
                            resolve();
                        });
                    })
                } else if(body.getBy === "user") { // Get offers by user ID
                    const q = query(collection(db, "offers"), where("postedBy", "==", body.value), limit(body.limit > 0 ? body.limit : 9999), orderBy("date", "desc"));

                    return new Promise((resolve, object) => {
                        getDocs(q).then((e) => {
                            let offers = [];

                            e.docs.map((doc) => {
                                offers.push({...doc.data(), id: doc.id});
                            });
                            
                            res.status(200).json(offers);
                            resolve();
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json(error);
                            resolve();
                        });
                    })
                }else { // Get offers based on filters: Offer type (required), Property type, City
                    let byPropertyType = body.filters?.find(x => x.filterBy == "propertyType");
                    let byCity = body.filters?.find(x => x.filterBy == "city");
                    const q = query(collection(db, "offers"),
                        where("offerType", "==", body.value),
                        byPropertyType ? where("propertyType", "==", byPropertyType.value) : where("offerType", "==", body.value),
                        byCity ? where("city", "==", byCity.value) : where("offerType", "==", body.value),
                        limit(body.limit > 0 ? body.limit : 9999),
                        orderBy("date", "desc"));

                    return new Promise((resolve, object) => {
                        getDocs(q).then((e) => {
                            let offers = [];

                            e.docs.map((doc) => {
                                offers.push({...doc.data(), id: doc.id});
                            });
                            res.status(200).json(offers);
                            resolve();
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json(error);
                            resolve();
                        });
                    })
                }
            }
        }

        case 'PUT': {
            if (v.validate(req.body, PUT_SCHEMA) !== true) {
                return res.status(500).send("Invalid request");
            } else {
                return new Promise((resolve, object) => {
                    setDoc(doc(db, "offers", req.body.id), req.body.offer).then(() => {
                        res.status(200).send("Success");
                        resolve();
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json(error);
                        resolve();
                    });
                })
            }
        }

        case 'DELETE': {
            if (v.validate(req.body, DELETE_SCHEMA) !== true) {
                return res.status(500).send("Invalid request");
            } else {
                return new Promise((resolve, object) => {
                    deleteDoc(doc(db, "offers", req.body.id)).then(() => {
                        res.status(200).send("Success");
                        resolve();
                    }).catch(error => {
                        console.log(error);
                        res.status(500).json(error);
                        resolve();
                    });
                })
            }
        }
    }
}