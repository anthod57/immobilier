import React, { useEffect, useState, useCallback } from 'react'
import Head from 'next/head'
import { Navbar } from '../components/Navbar';
import { OffersList } from '../components/OffersList'
import { MENU_ITEMS } from '../data/menu';
import axios from 'axios';
import { HOST } from '../data/config';
import { Hero } from '../components/Hero';
import { clearProps, getProps, setProps } from '../redux/features/searchSlice';
import { useSelector, useDispatch } from "react-redux";
import qs from 'qs';

export default function Search(props) {

    const searchProps = useSelector(getProps);
    const [offers, setOffers] = useState([]);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar menu={MENU_ITEMS}></Navbar>

            <main>
                <Hero title={"Recherche"} searchBar={"advanced"} background={"/images/hero.jpg"} setOffers={setOffers}></Hero>
                <OffersList offers={offers}></OffersList>
            </main> 
        </>
    )
}