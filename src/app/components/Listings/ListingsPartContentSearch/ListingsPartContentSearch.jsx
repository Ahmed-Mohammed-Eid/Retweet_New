"use client";
import React, { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard";
import { Paginator } from "primereact/paginator";
import { useSearchParams, useRouter } from "next/navigation";
// import classes from "./ListingsPartContentSearch.module.scss";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import {
	setSearchListings,
	setSearchPagination,
	setSearchQuery,
} from "../../../../../redux/Slices/listingsSlice";

export default function ListingsPartContentSearch({ locale, authenticated }) {
	// ROUTER
	const router = useRouter();

	// REDUX
	const dispatch = useDispatch();
	const listings = useSelector((state) => state.listings.searchListings);
	const searchQuery = useSelector((state) => state.listings.searchQuery);
	const {
		currentPage,
		itemsPerPage,
		totalListings,
		hasNextPage,
		previousPage,
		nextPage,
		hasPreviousPage,
		lastPage,
	} = useSelector((state) => state.listings.searchPagination);

	// SEARCH PARAMS
	const searchParams = useSearchParams();

	function handleSearch(page) {
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
			.get(
				`${process.env.BASE_URL}/search?searchTerm=${searchQuery}&page=${page}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
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
					router.push("/listings/search");
					resolve();
				}).then(() => {
					dispatch(setSearchListings(listings));
					dispatch(setSearchPagination(pagination));
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// EFFECT
	useEffect(() => {
		// GET THE SEARCH QUERY
		const searchQuery = searchParams.get("searchTerm");

		// SET THE SEARCH QUERY
		dispatch(setSearchQuery({ query: searchQuery }));

		if (searchQuery === null) {
			return;
		}

		// HANDLE THE SEARCH
		handleSearch();
	}, []);

	return (
		<div className="card">
			<div className="grid grid-nogutter">
				{listings.map((product) => (
					<div
						className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2"
						key={product.id}
					>
						<ListingCard
							product={product}
							locale={locale}
							authenticated={authenticated}
						/>
					</div>
				))}
			</div>

			{/* SET THE PAGINATION ON A CONDITION */}

			{/* IF THERE ARE NO LISTINGS */}
			{listings.length === 0 && (
				<div className="text-center">
					{locale === "en"
						? "No listings found"
						: "لا توجد عناصر لعرضها"}
				</div>
			)}

			{/* IF THERE ARE LISTINGS */}
			{listings.length > 0 && (hasNextPage || hasPreviousPage) && (
				<Paginator
					id={"paginator"}
					template={
						"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
					}
					totalRecords={itemsPerPage * lastPage}
					rows={itemsPerPage}
					pageLinkSize={3}
					first={currentPage * itemsPerPage - itemsPerPage}
					rowsPerPageOptions={[itemsPerPage]}
					onPageChange={(e) => {
						const page = e.page + 1;
						handleSearch(page);
					}}
				/>
			)}
		</div>
	);
}
