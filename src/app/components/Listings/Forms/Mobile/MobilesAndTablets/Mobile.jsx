"use client";
import classes from "./Mobile.module.scss";
import Hint from "../../../Hint/Hint";
import RadioComponent from "../../../RadioComponent/RadioComponent";
import CheckBoxComponent from "../../../CheckBoxComponent/CheckBoxComponent";
import DropDown from "../../../DropDown/DropDown";
import Location from "../../../Forms/Globals/Location";
import Description from "../../../Forms/Globals/Description";
import { useState } from "react";
import Price from "../../../Forms/Globals/Price";
import ContactInformation from "../../../Forms/Globals/ContactInformation";
import CategoryInfo from "../../../Forms/Globals/CategoryInfo";
import ColorDropDown from "../../../Forms/Globals/ColorDropDown";
import Spinner from "../../../../LayoutAndHomeComponents/Spinner/Spinner";

// IMPORT MOBILE BRANDS
import mobiles from "../../../../../../../public/assets/json/tecjnologyBrands.json";

export default function MobileForm({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		brand: {
			labelAr: "الماركة",
			labelEn: "Brand",
			value: "",
		},
		storage: {
			labelAr: "التخزين",
			labelEn: "Storage",
			value: "",
		},
		ram: {
			labelAr: "الرام",
			labelEn: "RAM",
			value: "",
		},
		color: {
			labelAr: "اللون",
			labelEn: "Color",
			value: "",
		},
		status: {
			labelAr: "الحالة",
			labelEn: "Status",
			value: "",
		},
		warranty: {
			labelAr: "الضمان",
			labelEn: "Warranty",
			value: "",
		},
		attachedAccessories: {
			labelAr: "الملحقات المرفقة",
			labelEn: "Attached VideoGames",
			value: [],
		},
		deviceAge: {
			labelAr: "عمر الجهاز",
			labelEn: "Device Age",
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
		<div className={`${classes.RealEstateForm} rounded p-4`}>
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
				<div className={`${classes.Brand} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Brand" : "الماركة"}</h3>
					<DropDown
						value={listingDetails.brand.value || ""}
						onChange={(e) => {
							setListingDetails({
								...listingDetails,
								brand: {
									...listingDetails.brand,
									value: e.value,
								},
							});
						}}
						options={mobiles.map((brand) => {
							return {
								label:
									locale === "en"
										? brand.labelEn
										: brand.labelAr,
								value:
									locale === "en"
										? brand.labelEn
										: brand.labelAr,
							};
						})}
					/>
				</div>

				{/*  STORAGE  */}
				<div className={`${classes.Storage} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Storage" : "التخزين"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							textAr={"16 جيجا"}
							textEn={"16 GB"}
							locale={locale}
							value={"16 GB"}
							name={"storage"}
							checked={listingDetails.storage.value === "16 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "16 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"32 جيجا"}
							textEn={"32 GB"}
							locale={locale}
							value={"32 GB"}
							name={"storage"}
							checked={listingDetails.storage.value === "32 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "32 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"64 جيجا"}
							textEn={"64 GB"}
							locale={locale}
							value={"64 GB"}
							name={"storage"}
							checked={listingDetails.storage.value === "64 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "64 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"128 جيجا"}
							textEn={"128 GB"}
							locale={locale}
							value={"128 GB"}
							name={"storage"}
							checked={listingDetails.storage.value === "128 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "128 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"256 جيجا"}
							textEn={"256 GB"}
							locale={locale}
							value={"256 GB"}
							name={"storage"}
							checked={listingDetails.storage.value === "256 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "256 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"512 جيجا"}
							textEn={"512 GB"}
							locale={locale}
							value={"512 GB"}
							name={"storage"}
							checked={listingDetails.storage.value === "512 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "512 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"1 تيرا"}
							textEn={"1 TB"}
							locale={locale}
							value={"1 TB"}
							name={"storage"}
							checked={listingDetails.storage.value === "1 TB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "1 TB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"2 تيرا"}
							textEn={"2 TB"}
							locale={locale}
							value={"2 TB"}
							name={"storage"}
							checked={listingDetails.storage.value === "2 TB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "2 TB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"أخرى"}
							textEn={"Other"}
							locale={locale}
							value={"other"}
							name={"storage"}
							checked={listingDetails.storage.value === "other"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									storage: {
										...listingDetails.storage,
										value: "other",
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  RAM  */}
				<div className={`${classes.Ram} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "RAM" : "الرام"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							textAr={"2 جيجا"}
							textEn={"2 GB"}
							locale={locale}
							value={"2 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "2 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "2 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"3 جيجا"}
							textEn={"3 GB"}
							locale={locale}
							value={"3 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "3 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "3 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"4 جيجا"}
							textEn={"4 GB"}
							locale={locale}
							value={"4 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "4 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "4 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"6 جيجا"}
							textEn={"6 GB"}
							locale={locale}
							value={"6 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "6 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "6 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"8 جيجا"}
							textEn={"8 GB"}
							locale={locale}
							value={"8 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "8 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "8 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"12 جيجا"}
							textEn={"12 GB"}
							locale={locale}
							value={"12 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "12 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "12 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"16 جيجا"}
							textEn={"16 GB"}
							locale={locale}
							value={"16 GB"}
							name={"ram"}
							checked={listingDetails.ram.value === "16 GB"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "16 GB",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"أخرى"}
							textEn={"Other"}
							locale={locale}
							value={"other"}
							name={"ram"}
							checked={listingDetails.ram.value === "other"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									ram: {
										...listingDetails.ram,
										value: "other",
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  COLOR  */}
				<div className={`${classes.Color} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Color" : "اللون"}</h3>
					<ColorDropDown
						value={listingDetails.color.value || ""}
						locale={locale}
						setSelectedColor={(color) => {
							setListingDetails({
								...listingDetails,
								color: {
									...listingDetails.color,
									value: color,
								},
							});
						}}
						selectedColor={listingDetails.color.value}
					/>
				</div>

				{/*  STATUS  */}
				<div className={`${classes.Status} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Status" : "الحالة"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							textAr={"جديد"}
							textEn={"New"}
							locale={locale}
							value={"new"}
							name={"status"}
							checked={listingDetails.status.value === "new"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									status: {
										...listingDetails.status,
										value: "new",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"مستعمل"}
							textEn={"Used"}
							locale={locale}
							value={"used"}
							name={"status"}
							checked={listingDetails.status.value === "used"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									status: {
										...listingDetails.status,
										value: "used",
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  WARRANTY  */}
				<div className={`${classes.Warranty} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Warranty" : "الضمان"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							textAr={"متاح"}
							textEn={"Available"}
							locale={locale}
							value={"available"}
							name={"warranty"}
							checked={
								listingDetails.warranty.value === "available"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									warranty: {
										...listingDetails.warranty,
										value: "available",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"غير متاح"}
							textEn={"Not Available"}
							locale={locale}
							value={"not-available"}
							name={"warranty"}
							checked={
								listingDetails.warranty.value ===
								"not-available"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									warranty: {
										...listingDetails.warranty,
										value: "not-available",
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  ATTACHED ACCESSORIES  */}
				<div className={`${classes.Attached} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? "Attached VideoGames"
							: "الملحقات المرفقة"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<CheckBoxComponent
							locale={locale}
							textAr={"شاحن"}
							textEn={"Charger"}
							value={"charger"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"charger"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"charger",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) => value !== "charger"
											),
										},
									});
								}
							}}
						/>

						<CheckBoxComponent
							locale={locale}
							textAr={"سماعات"}
							textEn={"VideoGames"}
							value={"headphones"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"headphones"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"headphones",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) =>
													value !== "headphones"
											),
										},
									});
								}
							}}
						/>

						<CheckBoxComponent
							locale={locale}
							textAr={"كرتونة"}
							textEn={"Box"}
							value={"box"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"box"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"box",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) => value !== "box"
											),
										},
									});
								}
							}}
						/>

						<CheckBoxComponent
							locale={locale}
							textAr={"كتالوج"}
							textEn={"Catalog"}
							value={"catalog"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"catalog"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"catalog",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) => value !== "catalog"
											),
										},
									});
								}
							}}
						/>

						<CheckBoxComponent
							locale={locale}
							textAr={"كفر"}
							textEn={"Cover"}
							value={"cover"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"cover"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"cover",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) => value !== "cover"
											),
										},
									});
								}
							}}
						/>

						<CheckBoxComponent
							locale={locale}
							textAr={"حامل"}
							textEn={"Stand"}
							value={"stand"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"stand"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"stand",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) => value !== "stand"
											),
										},
									});
								}
							}}
						/>

						<CheckBoxComponent
							locale={locale}
							textAr={"أخرى"}
							textEn={"Other"}
							value={"other"}
							name={"attachedAccessories"}
							checked={listingDetails.attachedAccessories.value.includes(
								"other"
							)}
							onChange={(e) => {
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: [
												...listingDetails
													.attachedAccessories.value,
												"other",
											],
										},
									});
								} else {
									setListingDetails({
										...listingDetails,
										attachedAccessories: {
											...listingDetails.attachedAccessories,
											value: listingDetails.attachedAccessories.value.filter(
												(value) => value !== "other"
											),
										},
									});
								}
							}}
						/>
					</div>
				</div>

				{/*  DEVICE AGE  */}
				<div className={`${classes.Age} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Device Age" : "عمر الجهاز"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							textAr={"جديد"}
							textEn={"New"}
							locale={locale}
							value={"new"}
							name={"deviceAge"}
							checked={listingDetails.deviceAge.value === "new"}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "new",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"أقل من سنة"}
							textEn={"Less than a year"}
							locale={locale}
							value={"less-than-a-year"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value ===
								"less-than-a-year"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "less-than-a-year",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"سنة"}
							textEn={"1 year"}
							locale={locale}
							value={"1-year"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "1-year"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "1-year",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"2 سنة"}
							textEn={"2 years"}
							locale={locale}
							value={"2-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "2-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "2-years",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"3 سنوات"}
							textEn={"3 years"}
							locale={locale}
							value={"3-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "3-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "3-years",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"4 سنوات"}
							textEn={"4 years"}
							locale={locale}
							value={"4-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "4-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "4-years",
									},
								});
							}}
						/>

						<RadioComponent
							textAr={"5 سنوات"}
							textEn={"5 years"}
							locale={locale}
							value={"5-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "5-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "5-years",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"6 سنوات"}
							textEn={"6 years"}
							locale={locale}
							value={"6-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "6-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "6-years",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"7 سنوات"}
							textEn={"7 years"}
							locale={locale}
							value={"7-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value === "7-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "7-years",
									},
								});
							}}
						/>
						<RadioComponent
							textAr={"أكثر من 7 سنوات"}
							textEn={"More than 7 years"}
							locale={locale}
							value={"more-than-7-years"}
							name={"deviceAge"}
							checked={
								listingDetails.deviceAge.value ===
								"more-than-7-years"
							}
							onChange={() => {
								setListingDetails({
									...listingDetails,
									deviceAge: {
										...listingDetails.deviceAge,
										value: "more-than-7-years",
									},
								});
							}}
						/>
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
