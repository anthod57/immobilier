import { app, db } from "../../firebase/config";
import { doc, orderBy, deleteDoc, collection, getDoc, addDoc, query, where, getDocs, setDoc, limit, Timestamp } from "firebase/firestore";
import Validator from "fastest-validator";

const postSchema = {
    title: { type: "string" },
    offerType: { type: "string", enum: ["buy", "rent"] },
    propertyType: { type: "string", enum: ["appartment", "house"] },
    date: { type: "date", default: (schema, field, parent, context) => new Date() },
    description: { type: "string" },
    price: { type: "number" },
    city: { type: "string" },
    address: { type: "string" },
    rooms: { type: "number" },
    bedrooms: { type: "number" },
    bathrooms: { type: "number" },
    surface: { type: "number" },
    land_surface: { type: "number" },
    images: { type: "array", optional: true }
}

const getSchema = {
    getBy: { type: "string", enum: ["id", "offerType"] },
    value: { type: "string" },
    filters: {
        type: "array", items: {
            type: "object",
            props: {
                filterBy: { type: "string" },
                value: { type: "string" },
            }
        },
        optional: true
    },
    limit: { type: "number", optional: true }
}
const putSchema = {
    id: { type: "string" },
    offer: { type: "object", props: postSchema }
}

const deleteSchema = {
    id: { type: "string" }
}

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

                    if (v.validate(offer, postSchema) !== true) {
                        console.log(v.validate(offer, postSchema));
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
                if (v.validate(req.body, postSchema) !== true) {
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
            if (v.validate(req.body, getSchema) !== true) {
                return res.status(500).send("Invalid request");
            } else {
                if (req.body.getBy === "id") { // Get an offer by ID
                    const docRef = doc(db, "offers", req.body.value);

                    return new Promise((resolve, object) => {
                        getDoc(docRef).then((doc) => {
                            res.status(200).json(doc.data());
                            resolve();
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json(error);
                            resolve();
                        });
                    })
                } else { // Get offers based on filters: Offer type (required), Property type, City
                    let byPropertyType = req.body.filters?.find(x => x.filterBy == "propertyType");
                    let byCity = req.body.filters?.find(x => x.filterBy == "city");


                    const q = query(collection(db, "offers"),
                        where("offerType", "==", req.body.value),
                        byPropertyType ? where("propertyType", "==", byPropertyType.value) : where("offerType", "==", req.body.value),
                        byCity ? where("city", "==", byCity.value) : where("offerType", "==", req.body.value),
                        limit(req.body.limit > 0 ? req.body.limit : 9999),
                        orderBy("date", "desc"));

                    return new Promise((resolve, object) => {
                        getDocs(q).then((e) => {
                            let offers = [];

                            e.docs.map((doc) => {
                                offers.push(doc.data());
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
            if (v.validate(req.body, putSchema) !== true) {
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
            if (v.validate(req.body, deleteSchema) !== true) {
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