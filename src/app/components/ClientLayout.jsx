// Add 'use client' directive for Client Component
"use client";

import React, { useEffect } from "react";

import ProgressBarClientContainer from "./LayoutAndHomeComponents/ProgressBarClientContainer/ProgressBarClientContainer";
import Navbar from "./LayoutAndHomeComponents/Navbar/Navbar";
import MegaMenu from "./LayoutAndHomeComponents/MegaMenu/MegaMenu";
import MainSearchBox from "./LayoutAndHomeComponents/MainSearchBox/MainSearchBox";

// INIT REDUX
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

function ClientLayout({ children, locale, authenticated, error, userData }) {
	// STATE
	const [country, setCountry] = React.useState(null);

	// FETCH USER COUNTRY FUNCTION
	async function fetchCountry() {
		try {
			// Fetch country information based on IP address
			const response = await fetch(
				`${process.env.BASE_URL}/user/country`
			);
			const data = await response.json();

			if (data.country) {
				return { country: data.country, error: null }; // Country retrieved successfully
			} else {
				return { country: null, error: "Unable to determine country" }; // Country not found
			}
		} catch (error) {
			console.error("Error fetching user country:", error);
			return {
				country: null,
				error: "An error occurred while fetching user country",
			}; // An error occurred while fetching country
		}
	}

	// EFFECT TO GET THE USER COUNTRY
	useEffect(() => {
		fetchCountry().then((data) => {
			setCountry(data.country);
		});
	}, []);

	return (
		<Provider store={store}>
			<div className="container">
				<ProgressBarClientContainer />
				<Navbar
					locale={locale}
					auth={authenticated}
					authError={error}
					country={country}
					userData={userData}
				/>
				<MegaMenu locale={locale} />
				<MainSearchBox locale={locale} />
				{children}
			</div>
		</Provider>
	);
}

export default ClientLayout;
