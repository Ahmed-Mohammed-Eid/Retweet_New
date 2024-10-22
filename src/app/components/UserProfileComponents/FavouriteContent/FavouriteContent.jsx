"use client";
import React, { useEffect, useState } from 'react'

// IMPORTS
import ListingCard from "../../Listings/ListingCard/ListingCard"

// Helpers
import axios from "axios";
import toast from 'react-hot-toast';

export default function FavouriteContent({locale, authenticated}) {

    const [favourites, setFavourites] = useState([]);

    // Effect to fetch user's favourites
    useEffect(() => {
        // Fetch user's favourites
        fetchFavourites()
        // setFavourites(response.data)

    }, []);

    // GET request to fetch user's favourites from the server
    async function fetchFavourites() {
        // GET THE TOKEN FROM LOCAL STORAGE
        const token = localStorage.getItem('retweet-token')

        await axios.get(`${process.env.BASE_URL}/my/favorites`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setFavourites(response.data?.favorites?.listings || [])
        })
        .catch(error => {
            console.log(error)
            toast.error(locale === 'en' ? 'An error occurred while fetching your favourites' : 'حدث خطأ أثناء جلب المفضلة الخاصة بك')
        })
    }


    return (
        <div className={'w-full min-h-screen bg-white flex flex-col gap-2 py-6'}>
            {/*  CONTENT  */}
            {favourites.length > 0 && favourites.map((product, index) => {
                return (
                    <ListingCard key={index} product={product} authenticated={authenticated} removeOnly={true} locale={locale}/>
                )
            })}
        </div>
    )
}