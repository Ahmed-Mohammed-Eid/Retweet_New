"use client";
import React, { useState, useEffect } from "react";
import ListingCard from "../ListingCard/ListingCard";
import { Paginator } from "primereact/paginator";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import classes from "./ListingsPartContent.module.scss";

import FilterListingPart from "../FilterListingPart/FilterListingPart";
import { Dialog } from "primereact/dialog";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { returnToInitialState } from "../../../../../redux/Slices/filterSlice";
import { setListings, setPagination } from "../../../../../redux/Slices/listingsSlice";
import Image from "next/image";

export default function ListingsPartContent({
	locale,
	authenticated,
	isMainFilterHidden,
}) {
	// ROUTER
	const router = useRouter();

	// REDUX
	const dispatch = useDispatch();
	const listings = useSelector((state) => state.listings.listings);
	const { currentPage, itemsPerPage, totalListings } = useSelector(
		(state) => state.listings.pagination
	);
	const {
		categoryId,
		subCategoryId,
		item,
		selectedLocation,
		priceRange,
		page,
	} = useSelector((state) => state.filter);

	const [filterDialog, setFilterDialog] = useState(false);

	// SEARCH PARAMS
	const searchParams = useSearchParams();

	// HANDLERS TO GET THE DATA
	function getListings(
		categoryId,
		subCategoryId,
		item,
		location,
		minPrice,
		maxPrice,
		page
	) {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		// GET THE DATA
		axios
			.get(
				`${process.env.BASE_URL}/filtered/listings?categoryId=${
					categoryId || ""
				}&subCategoryId=${subCategoryId || ""}&minPrice=${
					minPrice || ""
				}&maxPrice=${maxPrice || ""}&city=${location || ""}&page=${
					page || 1
				}&item=${item || ""}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				// SET THE DATA
				dispatch(setListings(response.data?.data?.listings || []));
				dispatch(
					setPagination({
						currentPage: response.data?.data?.currentPage,
						hasNextPage: response.data?.data?.hasNextPage,
						hasPreviousPage: response.data?.data?.hasPreviousPage,
						itemsPerPage: response.data?.data?.itemsPerPage,
						lastPage: response.data?.data?.lastPage,
						maxPrice: response.data?.data?.maxPrice,
						nextPage: response.data?.data?.nextPage,
						previousPage: response.data?.data?.previousPage,
						totalListings: response.data?.data?.totalListings,
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		// GET THE PRODUCTS
		getListings(
			categoryId,
			subCategoryId,
			item,
			selectedLocation === "All Cities" ? "" : selectedLocation,
			priceRange[0] || "",
			priceRange[1] || "",
			page
		);
	}, [categoryId, item, page, priceRange, selectedLocation, subCategoryId]);

	// EFFECT TO CLEAR THE FILTERS WHEN THE COMPONENT UNMOUNTS
	useEffect(() => {
		return () => {
			// CLEAR THE FILTERS
			dispatch(returnToInitialState());
		};
	}, []);

	return (
		<div className="card">
			{/* FILTER ICON BUTTON */}
			{isMainFilterHidden && (
				<button
					className={`${classes.FilterButton}`}
					onClick={() => setFilterDialog(true)}
				>
					<Image
						src={"/assets/filter.svg"}
						alt="filter"
						width={20}
						height={20}
					/>
					Filter
				</button>
			)}

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

			<Paginator
				first={currentPage || 0}
				rows={itemsPerPage}
				totalRecords={totalListings}
				rowsPerPageOptions={[itemsPerPage]}
				// Next and Previous Buttons are disables if there is no next or previous page
				alwaysShow={false}
				onPageChange={(e) => {
					// CHANGE THE SEARCH PARAMS ADD THE PAGE NUMBER
					// GET ALL THE SEARCH PARAMS
					const categoryId = searchParams.get("categoryId");
					const subcategoryId = searchParams.get("subcategoryId");
					const item = searchParams.get("item");
					const location = searchParams.get("location");
					const minPrice = searchParams.get("minPrice");
					const maxPrice = searchParams.get("maxPrice");
					const page = e.page + 1;
					// UPDATE THE SEARCH PARAMS IN THE URL
					router.push(
						`/listings?categoryId=${categoryId}&subcategoryId=${subcategoryId}&item=${item}&location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}`
					);
				}}
			/>

			<Dialog
				header="Filter"
				visible={filterDialog}
				style={{ width: "90vw", minWidth: "350px" }}
				onHide={() => setFilterDialog(false)}
			>
				<FilterListingPart locale={locale} />
			</Dialog>
		</div>
	);
}
