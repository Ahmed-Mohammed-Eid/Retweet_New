"use client";

import classes from "./Location.module.scss";
import Hint from "../../Hint/Hint";

// REDUX
import { useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";

export default function Location({
	locale,
	setCity = () => {},
	city,
	neighborhood,
	setNeighborhood = () => {},
}) {
	// REDUX
	const userCountryInformation = useSelector(
		(state) => state.mainLayout.userCountryInformation
	);

	return (
		<div className={`${classes.LocationPart} p-12 rounded bg-white`}>
			<h2>{locale === "en" ? "Location" : "موقع"}</h2>
			<Hint
				texts={
					locale === "en"
						? [
								"Describe the listing in more details you want people to know",
								"Details increase your chance of getting the right buyer",
						  ]
						: [
								"صف القائمة بمزيد من التفاصيل التي تريد أن يعرفها الناس",
								"التفاصيل تزيد من فرصتك في الحصول على المشتري المناسب",
						  ]
				}
				locale={locale}
			/>

			{/*CITY*/}
			<div
				className={`${classes.City} rounded bg-white flex flex-col gap-2 mt-8`}
			>
				<div className={"flex flex-col gap-2"}>
					<label htmlFor={"city"}>
						{locale === "en" ? "City" : "مدينة"}
					</label>
					<Dropdown
						filter={true}
						id={"city"}
						options={userCountryInformation?.cities || []}
						value={city}
						onChange={(e) => {
							setCity(e.value);
						}}
						placeholder={locale === "en" ? "City" : "مدينة"}
						autoComplete={"off"}
					/>
				</div>
				<div className={"flex flex-col gap-2"}>
					<label htmlFor={"Neighborhood"}>
						{locale === "en" ? "Neighborhood" : "حي"}
					</label>
					<input
						type="text"
						id={"Neighborhood"}
						placeholder={locale === "en" ? "Neighborhood" : "حي"}
						value={neighborhood || ""}
						onChange={(e) => {
							setNeighborhood(e.target.value);
						}}
						autoComplete={"off"}
					/>
				</div>
			</div>
		</div>
	);
}
