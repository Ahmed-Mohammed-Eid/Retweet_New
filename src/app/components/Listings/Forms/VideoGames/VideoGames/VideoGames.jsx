"use client";
import classes from "./VideoGames.module.scss";
import Hint from "../../../Hint/Hint";
import RadioComponent from "../../../RadioComponent/RadioComponent";
import Location from "../../../Forms/Globals/Location";
import Description from "../../../Forms/Globals/Description";
import { useState } from "react";
import Price from "../../../Forms/Globals/Price";
import ContactInformation from "../../../Forms/Globals/ContactInformation";
import CategoryInfo from "../../../Forms/Globals/CategoryInfo";
import Spinner from "../../../../LayoutAndHomeComponents/Spinner/Spinner";

// JSON DATA
import PhoneNumbersJson from "../../../../../../../Json_Data/VideoGames/videoGames.json";

export default function VideoGames({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(PhoneNumbersJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: PhoneNumbersJson[0].labelAr,
			labelEn: PhoneNumbersJson[0].labelEn,
			value: "",
		},
		[String(PhoneNumbersJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: PhoneNumbersJson[1].labelAr,
			labelEn: PhoneNumbersJson[1].labelEn,
			value: "",
		},
		[String(PhoneNumbersJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: PhoneNumbersJson[2].labelAr,
			labelEn: PhoneNumbersJson[2].labelEn,
			value: "",
		},
	});
	// LOCATION PART
	const [location, setLocation] = useState({
		city: "",
		neighborhood: "",
	});
	// DESCRIPTION PART
	const [description, setDescription] = useState({
		title: "",
		description: "",
	});
	// PRICE
	const [price, setPrice] = useState({
		price: "",
		currency: "",
	});

	// CONTACT PART
	const [contact, setContact] = useState({
		code: "",
		phone: "",
	});

	// SUBMIT FUNCTION
	const handleSubmit = () => {
		submit({
			listingDetails,
			location,
			description,
			price,
			contact,
		});
	};

	return (
		<div className={`${classes.SpareParts} rounded p-4`}>
			{/*  CATEGORY  */}
			<CategoryInfo
				locale={locale}
				categoryName={categoryName}
				subCategoryName={subCategoryName}
			/>

			{/*  LISTING DETAILS  */}
			<div
				className={`${classes.ListingDetailsPart} p-6 rounded bg-white`}
			>
				<h2 className={"uppercase"}>
					{locale === "en" ? "Listing Details" : "تفاصيل القائمة"}
				</h2>

				<Hint
					texts={
						locale === "en"
							? [
									"Attract more people to your listing by filling all information and being accurate",
							  ]
							: [
									"جذب المزيد من الناس إلى قائمتك من خلال ملء جميع المعلومات وكون دقيقًا",
							  ]
					}
				/>

				{/*  CAR TYPE  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? PhoneNumbersJson[0].labelEn
							: PhoneNumbersJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{PhoneNumbersJson[0].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(PhoneNumbersJson[0].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											PhoneNumbersJson[0].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													PhoneNumbersJson[0].labelEn
												).toLocaleLowerCase()
											],
											value: event.target.value,
										},
									});
								}}
							/>
						))}
					</div>
				</div>

				{/*  Delivery  */}
				<div className={`${classes.Delivery} rounded bg-white`}>
					<h3 className={"uppercase"}>
						{locale === "en"
							? PhoneNumbersJson[1].labelEn
							: PhoneNumbersJson[1].labelAr}
					</h3>

					<div className={"flex justify-start gap-2 flex-wrap"}>
						{PhoneNumbersJson[1].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(PhoneNumbersJson[1].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											PhoneNumbersJson[1].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													PhoneNumbersJson[1].labelEn
												).toLocaleLowerCase()
											],
											value: event.target.value,
										},
									});
								}}
							/>
						))}
					</div>
				</div>

				{/*  Condition  */}
				<div className={`${classes.Condition} rounded bg-white`}>
					<h3 className={"uppercase"}>
						{locale === "en"
							? PhoneNumbersJson[2].labelEn
							: PhoneNumbersJson[2].labelAr}
					</h3>

					<div className={"flex justify-start gap-2 flex-wrap"}>
						{PhoneNumbersJson[2].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(PhoneNumbersJson[2].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											PhoneNumbersJson[2].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													PhoneNumbersJson[2].labelEn
												).toLocaleLowerCase()
											],
											value: event.target.value,
										},
									});
								}}
							/>
						))}
					</div>
				</div>
			</div>

			{/*  LOCATION  */}
			<Location
				locale={locale}
				setCity={(city) => setLocation({ ...location, city })}
				setNeighborhood={(neighborhood) =>
					setLocation({ ...location, neighborhood })
				}
				city={location.city}
				neighborhood={location.neighborhood}
			/>

			{/*  DESCRIPTION  */}
			<Description
				locale={locale}
				title={description.title}
				setTitle={(title) => setDescription({ ...description, title })}
				description={description.description}
				setDescription={(descriptionValue) =>
					setDescription({
						...description,
						description: descriptionValue,
					})
				}
			/>

			{/*  PRICE  */}
			<Price
				locale={locale}
				price={price.price}
				setPrice={(priceValue) =>
					setPrice({ ...price, price: priceValue })
				}
				currency={price.currency}
				setCurrency={(currency) => setPrice({ ...price, currency })}
			/>

			{/*  CONTACT INFORMATION  */}
			<ContactInformation
				locale={locale}
				cuntryCode={contact.code}
				setCountryCode={(code) => setContact({ ...contact, code })}
				phoneNumber={contact.phone}
				setPhoneNumber={(phoneNumber) =>
					setContact({ ...contact, phone: phoneNumber })
				}
			/>

			{/*  SUBMIT  */}
			<div className={`${classes.SubmitPart} rounded`}>
				<button
					className={
						"bg-primary text-white p-4 rounded w-full mr-auto button--effect-small flex justify-center items-center gap-2"
					}
					onClick={handleSubmit}
					disabled={loading}
				>
					{loading ? <Spinner /> : ""}
					<span className={"uppercase"}>
						{locale === "en"
							? "Save and PUBLISH listing"
							: "حفظ ونشر القائمة"}
					</span>
					<span>{locale === "en" ? "→" : "←"}</span>
				</button>
			</div>
		</div>
	);
}
