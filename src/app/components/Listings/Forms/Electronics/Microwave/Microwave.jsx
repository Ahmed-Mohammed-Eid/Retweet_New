"use client";
import classes from "./Microwave.module.scss";
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
import MicrowaveJson from "../../../../../../../Json_Data/Electronics/Microwave.json";

export default function Microwave({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(MicrowaveJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: MicrowaveJson[0].labelAr,
			labelEn: MicrowaveJson[0].labelEn,
			value: "",
		},
		[String(MicrowaveJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: MicrowaveJson[1].labelAr,
			labelEn: MicrowaveJson[1].labelEn,
			value: "",
		},
		[String(MicrowaveJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: MicrowaveJson[2].labelAr,
			labelEn: MicrowaveJson[2].labelEn,
			value: "",
		},
		[String(MicrowaveJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: MicrowaveJson[3].labelAr,
			labelEn: MicrowaveJson[3].labelEn,
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

	const modelsOptions = MicrowaveJson[0].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions2 = MicrowaveJson[1].Values.map((value) => {
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
							? MicrowaveJson[0].labelEn
							: MicrowaveJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										MicrowaveJson[0].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										MicrowaveJson[0].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												MicrowaveJson[0].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions}
							filter={true}
							placeholder={
								locale === "en"
									? MicrowaveJson[0].labelEn
									: MicrowaveJson[0].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? MicrowaveJson[1].labelEn
							: MicrowaveJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										MicrowaveJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										MicrowaveJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												MicrowaveJson[1].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions2}
							filter={true}
							placeholder={
								locale === "en"
									? MicrowaveJson[1].labelEn
									: MicrowaveJson[1].labelAr
							}
						/>
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? MicrowaveJson[2].labelEn
							: MicrowaveJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{MicrowaveJson[2].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									locale={locale}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(MicrowaveJson[2].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												MicrowaveJson[2].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														MicrowaveJson[2].labelEn
													).toLocaleLowerCase()
												],
												value: event.target.value,
											},
										});
									}}
								/>
							);
						})}
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? MicrowaveJson[3].labelEn
							: MicrowaveJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{MicrowaveJson[3].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									locale={locale}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(MicrowaveJson[3].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												MicrowaveJson[3].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														MicrowaveJson[3].labelEn
													).toLocaleLowerCase()
												],
												value: event.target.value,
											},
										});
									}}
								/>
							);
						})}
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
					{loading ? <Spinner /> : null}
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
