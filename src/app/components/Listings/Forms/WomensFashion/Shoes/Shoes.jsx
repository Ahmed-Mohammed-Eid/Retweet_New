"use client";
import classes from "./Shoes.module.scss";
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
import ShoesJson from "../../../../../../../Json_Data/WomensFashion/Shoes.json";

export default function Shoes({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(ShoesJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: ShoesJson[0].labelAr,
			labelEn: ShoesJson[0].labelEn,
			value: "",
		},
		[String(ShoesJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: ShoesJson[1].labelAr,
			labelEn: ShoesJson[1].labelEn,
			value: "",
		},
		[String(ShoesJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: ShoesJson[2].labelAr,
			labelEn: ShoesJson[2].labelEn,
			value: "",
		},
		[String(ShoesJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: ShoesJson[3].labelAr,
			labelEn: ShoesJson[3].labelEn,
			value: "",
		},
		[String(ShoesJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: ShoesJson[4].labelAr,
			labelEn: ShoesJson[4].labelEn,
			value: "",
		},
		[String(ShoesJson[5].labelEn).toLocaleLowerCase()]: {
			labelAr: ShoesJson[5].labelAr,
			labelEn: ShoesJson[5].labelEn,
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

	const modelsOptions = ShoesJson[0].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions2 = ShoesJson[1].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions3 = ShoesJson[2].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions4 = ShoesJson[3].Values.map((value) => {
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
							? ShoesJson[0].labelEn
							: ShoesJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										ShoesJson[0].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										ShoesJson[0].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												ShoesJson[0].labelEn
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
									? ShoesJson[0].labelEn
									: ShoesJson[0].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? ShoesJson[1].labelEn
							: ShoesJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										ShoesJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										ShoesJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												ShoesJson[1].labelEn
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
									? ShoesJson[1].labelEn
									: ShoesJson[1].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? ShoesJson[2].labelEn
							: ShoesJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										ShoesJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										ShoesJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												ShoesJson[2].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions3}
							filter={true}
							placeholder={
								locale === "en"
									? ShoesJson[2].labelEn
									: ShoesJson[2].labelAr
							}
						/>
					</div>
				</div>

				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? ShoesJson[3].labelEn
							: ShoesJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										ShoesJson[3].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										ShoesJson[3].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												ShoesJson[3].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions4}
							filter={true}
							placeholder={
								locale === "en"
									? ShoesJson[3].labelEn
									: ShoesJson[3].labelAr
							}
						/>
					</div>
				</div>

				{/* condition */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? ShoesJson[4].labelEn
							: ShoesJson[4].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{ShoesJson[4].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									locale={locale}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(ShoesJson[4].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												ShoesJson[4].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														ShoesJson[4].labelEn
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
							? ShoesJson[5].labelEn
							: ShoesJson[5].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{ShoesJson[5].Values.map((value, index) => {
							return (
								<RadioComponent
									key={index}
									locale={locale}
									value={value.labelEn}
									textAr={value.labelAr}
									textEn={value.labelEn}
									name={String(ShoesJson[5].labelEn)}
									onChange={(event) => {
										setListingDetails({
											...listingDetails,
											[String(
												ShoesJson[5].labelEn
											).toLocaleLowerCase()]: {
												...listingDetails[
													String(
														ShoesJson[5].labelEn
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
