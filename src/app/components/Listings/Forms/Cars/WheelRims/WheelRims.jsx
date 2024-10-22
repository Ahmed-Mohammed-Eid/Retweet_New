"use client";
import classes from "./WheelRims.module.scss";
import Hint from "../../../Hint/Hint";
import RadioComponent from "../../../RadioComponent/RadioComponent";
import DropDown from "../../../DropDown/DropDown";
import Location from "../../../Forms/Globals/Location";
import Description from "../../../Forms/Globals/Description";
import { useState } from "react";
import Price from "../../../Forms/Globals/Price";
import ContactInformation from "../../../Forms/Globals/ContactInformation";
import CategoryInfo from "../../../Forms/Globals/CategoryInfo";
import Spinner from "../../../../LayoutAndHomeComponents/Spinner/Spinner";

// JSON DATA
import WheelRimsJson from "../../../../../../../Json_Data/Cars/WheelRims.json";

export default function WheelRims({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(WheelRimsJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: WheelRimsJson[0].labelAr,
			labelEn: WheelRimsJson[0].labelEn,
			value: "",
		},
		[String(WheelRimsJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: WheelRimsJson[1].labelAr,
			labelEn: WheelRimsJson[1].labelEn,
			value: "",
		},
		[String(WheelRimsJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: WheelRimsJson[2].labelAr,
			labelEn: WheelRimsJson[2].labelEn,
			value: "",
		},
		[String(WheelRimsJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: WheelRimsJson[3].labelAr,
			labelEn: WheelRimsJson[3].labelEn,
			value: "",
		},
		[String(WheelRimsJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: WheelRimsJson[4].labelAr,
			labelEn: WheelRimsJson[4].labelEn,
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

	// CREATE BRAND OPTIONS FOR DROPDOWN
	const brandsOptions = WheelRimsJson[2].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

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
							? WheelRimsJson[0].labelEn
							: WheelRimsJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{WheelRimsJson[0].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(WheelRimsJson[0].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											WheelRimsJson[0].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													WheelRimsJson[0].labelEn
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

				{/* SIZE */}
				<div className={`${classes.Size} rounded bg-white`}>
					<h3 className={"uppercase"}>
						{locale === "en"
							? WheelRimsJson[1].labelEn
							: WheelRimsJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							placeholder={
								locale === "en"
									? WheelRimsJson[1].labelEn
									: WheelRimsJson[1].labelAr
							}
							autoComplete="off"
							value={
								listingDetails[
									String(
										WheelRimsJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									[String(
										WheelRimsJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WheelRimsJson[1].labelEn
											).toLocaleLowerCase()
										],
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  BRAND  */}
				<div className={`${classes.Brand} rounded bg-white`}>
					<h3 className={"uppercase"}>
						{locale === "en"
							? WheelRimsJson[2].labelEn
							: WheelRimsJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										WheelRimsJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										WheelRimsJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												WheelRimsJson[2].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={brandsOptions}
							filter={true}
							placeholder={
								locale === "en"
									? WheelRimsJson[2].labelEn
									: WheelRimsJson[2].labelAr
							}
						/>
					</div>
				</div>

				{/*  Delivery  */}
				<div className={`${classes.Delivery} rounded bg-white`}>
					<h3 className={"uppercase"}>
						{locale === "en"
							? WheelRimsJson[3].labelEn
							: WheelRimsJson[3].labelAr}
					</h3>

					<div className={"flex justify-start gap-2 flex-wrap"}>
						{WheelRimsJson[3].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(WheelRimsJson[3].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											WheelRimsJson[3].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													WheelRimsJson[3].labelEn
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

				{/*  condition  */}
				<div className={`${classes.Condition} rounded bg-white`}>
					<h3 className={"uppercase"}>
						{locale === "en"
							? WheelRimsJson[4].labelEn
							: WheelRimsJson[4].labelAr}
					</h3>

					<div className={"flex justify-start gap-2 flex-wrap"}>
						{WheelRimsJson[4].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(WheelRimsJson[4].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											WheelRimsJson[4].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													WheelRimsJson[4].labelEn
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
					{loading && <Spinner />}
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
