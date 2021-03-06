import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { MENU_ITEMS } from '../data/menu'
import { Footer } from '../components/Footer'
import { getUser } from "../redux/features/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { Hero } from '../components/Hero'
import { FeaturedProperties } from '../components/FeaturedProperties'
import qs from 'qs'
import axios from 'axios'
import { HOST } from '../data/config'

export default function MonCompte(props) {

  const user = useSelector(getUser);
  const router = useRouter();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (!user.user) {
      router.replace("/")
    } else {
      axios.request({
        method: "GET",
        url: `${HOST}/api/offers`,
        params: {
          getBy: "user",
          value: user.user.uid
        },
        paramsSerializer: params => { return qs.stringify(params) }
      }).then((response) => {
        setOffers(response.data);
      }).catch((error) => console.log(error));
    }
  }, [user])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user.user && (
        <>
          <Navbar menu={MENU_ITEMS} active={"nav-mon-compte"}></Navbar>

          <main>
            <Hero height={{ mobile: "300px", desktop: "500px" }} background={"/images/account_bg.jpg"} title={`Bonjour ${user.user.displayName}`}></Hero>
            <FeaturedProperties title={"Mes offres"} data={offers}></FeaturedProperties>
          </main>

          <Footer menu={MENU_ITEMS}></Footer>
        </>
      )}
    </>
  )
}