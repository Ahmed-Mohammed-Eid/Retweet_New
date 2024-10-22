"use client";

import React from "react";
import classes from "./Price.module.scss";

import Hint from "../../Hint/Hint";
import DropDown from "../../DropDown/DropDown";

// REDUX
import { useSelector } from "react-redux";

export default function Price({
	locale,
	price,
	setPrice = (value) => {},
	currency,
	setCurrency = (currency) => {},
}) {
	// REDUX
	const userCountryInformation = useSelector(
		(state) => state.mainLayout.userCountryInformation
	);

	// EFFECT HOOK TO SET CURRENCY
	React.useEffect(() => {
		setCurrency(userCountryInformation?.currency);
	}, [userCountryInformation?.currency]);

	return (
		<div className={`${classes.PricePart} p-12 rounded bg-white`}>
			<h2>{locale === "en" ? "Price" : "السعر"}</h2>
			<Hint
				texts={
					locale === "en"
						? [
								"Set the price for your listing",
								"Price should be reasonable",
						  ]
						: ["قم بتعيين السعر لقائمتك", "يجب أن يكون السعر معقول"]
				}
				locale={locale}
			/>

			<div className={"grid grid-cols-4 gap-2 mt-8"}>
				<div className={"flex flex-col gap-2"}>
					<label htmlFor={"currency"}>
						{locale === "en" ? "Currency" : "عملة"}
					</label>
					<DropDown
						value={currency || ""}
						disabled={true}
						options={[{ label: currency, value: currency }]}
						onChange={(e) => {
							setCurrency(userCountryInformation?.currency);
						}}
						placeholder={
							locale === "en" ? "Select Currency" : "حدد العملة"
						}
					/>
				</div>
				<div className={"flex flex-col gap-2 col-span-3"}>
					<label htmlFor={"price"}>
						{locale === "en" ? "Price" : "السعر"}
					</label>
					<input
						type="number"
						id={"price"}
						placeholder={locale === "en" ? "Price" : "السعر"}
						value={price || ""}
						onChange={(e) => {
							setPrice(e.target.value);
						}}
						autoComplete={"off"}
					/>
				</div>
			</div>
		</div>
	);
}
