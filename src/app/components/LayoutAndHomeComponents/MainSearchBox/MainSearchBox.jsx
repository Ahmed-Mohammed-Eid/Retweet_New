"use client";

import React from "react";

import { Button } from "primereact/button";
import classes from "./MainSearchBox.module.scss";
import toast from "react-hot-toast";
import axios from "axios";

// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {setSearchListings, setSearchPagination, setSearchQuery} from "../../../../../redux/Slices/listingsSlice";

// ROUTER
import {useRouter} from 'next/navigation';

export default function MainSearchBox({ locale }) {

    // ROUTER
    const router = useRouter();

    // REDUX
    const dispatch = useDispatch();

    // STATES
	const searchQuery = useSelector((state) => state.listings.searchQuery);

	function handleSearch() {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		// VALIDATE THE SEARCH QUERY
		if (searchQuery === "") {
			return toast.error(
				locale === "en"
					? "Please enter a search query"
					: "الرجاء إدخال مصطلح بحث"
			);
		}

		// MAKE THE SEARCH REQUEST
		axios
			.get(`${process.env.BASE_URL}/search?searchTerm=${searchQuery}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				const data = response?.data?.data;
				const listings = data?.listings || [];
				const pagination = {
					currentPage: data?.currentPage || null,
					hasNextPage: data?.hasNextPage || false,
					hasPreviousPage: data?.hasPreviousPage || false,
					itemsPerPage: data?.itemsPerPage || 20,
					lastPage: data?.lastPage || 1,
					nextPage: data?.nextPage || null,
					previousPage: data?.previousPage || null,
				};

                new Promise((resolve, reject) => {
					router.push(`/${locale}/listings/search`)
                    resolve()
                }).then(() =>{
                    dispatch(setSearchListings(listings));
					dispatch(setSearchPagination(pagination));
                })
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className={classes.SearchBox}>
			<input
				type={"search"}
				placeholder={
					locale === "en" ? "Search for anything" : "ابحث عن أي شيء"
				}
				className={classes.SearchBox__input}
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery({query: e.target.value}))}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
			/>
			<Button className={classes.SearchBox__button} onClick={handleSearch}>
				{locale === "en" ? "Search" : "بحث"}
			</Button>
		</div>
	);
}
