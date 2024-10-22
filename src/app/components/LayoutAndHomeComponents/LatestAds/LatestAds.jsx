"use client";

import classes from "./LatestAds.module.scss";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
	updateAdvertisements,
	updateClientsAds,
} from "../../../../../redux/Slices/homeSlice";

// COMPONENTS
import Card from "../Card/Card";

export default function LatestAds({ dictionary, locale }) {
	// REDUX
	const dispatch = useDispatch();
	const latestAds =
		useSelector((state) => state.home.advertisements.latest) || [];
	const clientsAds =
		useSelector((state) => state.home.clientsAds.secondAd) || [];

	// Fetch latest ads from server
	function getLatestAds() {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		///latest/listings
		try {
			axios
				.get(`${process.env.BASE_URL}/latest/listings`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((response) => {
					const data = response.data;
					// Update redux store
					dispatch(updateAdvertisements(data));
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	}

	function getBottomAd() {
		const token = localStorage.getItem("retweet-token");

		// Fetch data from server
		axios
			.get(`${process.env.BASE_URL}/all/home/ads`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				const ads = response.data.homeAds;
				// Update redux store
				dispatch(updateClientsAds(ads));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Fetch latest ads on component mount
	useEffect(() => {
		getBottomAd();
		getLatestAds();
	}, []);

	return (
		<section className={classes.LatestAds}>
			<div className={classes.LatestAds__Top}>
				<div>
					<h2>Latest Advertisements</h2>
					<p>Explore Our Advertisements</p>
				</div>
				<div>
					{/*<button>*/}
					{/*	View All <span>&rarr;</span>*/}
					{/*</button>*/}
				</div>
			</div>
			<div className={classes.LatestAds__Container}>
				{latestAds.length > 0 &&
					latestAds.map((item, index) => {
						return (
							<Card
								key={index}
								dictionary={dictionary}
								data={item}
								locale={locale}
							/>
						);
					})}
			</div>
			<div className={classes.LatestAds__Bottom}>
				<Image
					src={clientsAds}
					alt={"Ads Banner"}
					width={1920}
					height={300}
					loading={"lazy"}
				/>
			</div>
		</section>
	);
}
