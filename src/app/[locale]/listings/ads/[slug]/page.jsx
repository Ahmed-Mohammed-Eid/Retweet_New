"use client";

import FilterListingPart from "../../../../components/Listings/FilterListingPart/FilterListingPart";
import ListingsPartContent from "../../../../components/Listings/ListingsPartContent/ListingsPartContent";
import SecondaryNavigation from "../../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import classes from "./listings.module.scss";
import { useEffect, useState } from "react";

export default async function Listings({ params: { locale } }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [error, setError] = useState(null);
	const [isFilterHidden, setIsFilterHidden] = useState(false);

	useEffect(() => {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		const authenticate = async () => {
			try {
				// Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
				const response = await fetch(
					`${process.env.BASE_URL}/get/verify/token?token=${token}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
							"Content-Type": "application/json",
						},
					}
				);

				if (response.ok) {
					setAuthenticated(true);
					setError(null);
				} else {
					setAuthenticated(false);
					setError("Authentication failed");
				}
			} catch (error) {
				console.error("Error authenticating:", error);
				setAuthenticated(false);
				setError("An error occurred while authenticating");
			}
		};

		// Only authenticate if a token is provided
		if (token) {
			authenticate();
		}
	}, []);

	const handleMediaQueryChange = (e) => {
		if (e.matches) {
			setIsFilterHidden(true);
		} else {
			setIsFilterHidden(false);
		}
	};

	// EFFECT TO LISTEN ON SCREEN WIDTH 1200px
	useEffect(() => {
		// check at the beginning
		if (window.innerWidth <= 1200) {
			setIsFilterHidden(true);
		}

		const mediaQuery = window.matchMedia("(max-width: 1200px)");
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () =>
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	return (
		<>
			<div className={"mb-2"}>
				<SecondaryNavigation
					arrayOfLinks={[
						{
							text: "Home",
							icon: "/assets/home/House.svg",
							href: "/",
							arrow: true,
						},
						{
							href: "/listings",
							text: "Listings",
						},
					]}
				/>
			</div>
			<div className={`${classes.ContentContainer}`}>
				<div className={`${classes.Filter}`}>
					{isFilterHidden ? null : <FilterListingPart locale={locale} />}
				</div>
				<div className={`${classes.Cards}`}>
					<ListingsPartContent
						locale={locale}
						authenticated={authenticated}
						isMainFilterHidden={isFilterHidden}
					/>
				</div>
			</div>
		</>
	);
}
