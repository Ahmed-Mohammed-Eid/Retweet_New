"use client";
import React, { useEffect, useState } from "react";
import classes from "./HomeCategories.module.scss";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

// REDUX
import { useDispatch } from "react-redux";
import { updateFilterStates } from "../../../../../redux/Slices/filterSlice";
// IMPORTS
import dynamic from "next/dynamic";
// import HomeCategory from '@/src/app/components/LayoutAndHomeComponents/HomeCategories/Category';
const HomeCategory = dynamic(() =>
	import(
		"../HomeCategories/Category"
	)
);

export default function HomeCategories({ dictionary, locale }) {
	// REDUX
	const dispatch = useDispatch();

	// Router
	const router = useRouter();

	// State
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					`${process.env.BASE_URL}/home/categories`
				);
				setCategories(response.data?.categories || []);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchCategories();
	}, []);

	// redirect to listings page
	const redirectToAllListings = () => {
		dispatch(
			updateFilterStates({
				categoryId: "",
				subCategoryId: "",
				item: "",
				selectedLocation: "",
				priceRange: [],
				page: 1,
			})
		);

		router.push(`/${locale}/listings/ads/all`);
	};

	return (
		<section className={classes.HomeCategories}>
			<div className={classes.HomeCategories__Top}>
				<div>
					<h1>CATEGORIES</h1>
					<p>Browse By Category</p>
				</div>
				<div>
					<button onClick={redirectToAllListings}>
						View All <span>&rarr;</span>
					</button>
				</div>
			</div>
			<div className={classes.HomeCategories__Container}>
				{categories.slice(0, 14).map((category, index) => (
					<HomeCategory key={index} category={category} locale={locale} />
				))}
			</div>
			<div className={classes.HomeCategories__Bottom}>
				<div className={classes.HomeCategories__Bottom__Left}>
					<div className={classes.HomeCategories__Bottom__Left__Img}>
						<Image
							src={"/assets/home/logo.webp"}
							alt={"brands"}
							width={200}
							height={36}
							loading={"lazy"}
						/>
					</div>
					<h2>Get More Listings & Sell More Fast</h2>
					<ul>
						<li>Get discounts for bulk listings</li>
						<li>Sell more items</li>
					</ul>
					<button>
						View All Products <span>&rarr;</span>
					</button>
				</div>
				<div className={classes.HomeCategories__Bottom__Right}>
					<Image
						src={"/assets/home/viewAllProducts.webp"}
						alt={"brands"}
						width={505}
						height={427}
						loading={"lazy"}
					/>
				</div>
			</div>
		</section>
	);
}
