"use client";

import classes from "./RealEstate.module.scss";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// REDUX
import { useSelector } from "react-redux";

// COMPONENTS
import Card from "../Card/Card";

export default function RealEstate({ dictionary, locale }) {
	// REDUX
	const realEstate =
		useSelector((state) => state.home.advertisements.realestates) || [];
	const clientsAds =
		useSelector((state) => state.home.clientsAds.thirdAd) || [];

	function getBottomAd() {
		// Fetch data from server
		axios
			.get(`${process.env.BASE_URL}/all/home/ads`)
			.then((_) => {
				// const ads = response.data.homeAds.thirdAd;
				// setAds(ads);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Fetch latest ads on component mount
	useEffect(() => {
		getBottomAd();
	}, []);

	return (
		<section className={classes.RealEstate}>
			<div className={classes.RealEstate__Top}>
				<div>
					<h2>Real Estate for Rent</h2>
				</div>
				<div>{/*<button>View All <span>&rarr;</span></button>*/}</div>
			</div>
			<div className={classes.RealEstate__Container}>
				{realEstate.map((item, index) => {
					return (
						<Card key={index} dictionary={dictionary} data={item} locale={locale} />
					);
				})}
			</div>
			<div className={classes.RealEstate__Bottom}>
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
