"use client";
import classes from "./vacancies.module.scss";
import Hint from "../../../Hint/Hint";
import RadioComponent from "../../../RadioComponent/RadioComponent";
import DropDown from "../../../DropDown/DropDown";
import Location from "../../../Forms/Globals/Location";
import Description from "../../../Forms/Globals/Description";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import Price from "../../../Forms/Globals/Price";
import ContactInformation from "../../../Forms/Globals/ContactInformation";
import CategoryInfo from "../../../Forms/Globals/CategoryInfo";
import Spinner from "../../../../LayoutAndHomeComponents/Spinner/Spinner";

// JSON DATA
import VacanciesJson from "../../../../../../../Json_Data/Jobs/vacancies.json";

export default function JobsSeekers({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		[String(VacanciesJson[0].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[0].labelAr,
			labelEn: VacanciesJson[0].labelEn,
			value: "",
		},
		[String(VacanciesJson[1].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[1].labelAr,
			labelEn: VacanciesJson[1].labelEn,
			value: "",
		},
		[String(VacanciesJson[2].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[2].labelAr,
			labelEn: VacanciesJson[2].labelEn,
			value: "",
		},
		[String(VacanciesJson[3].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[3].labelAr,
			labelEn: VacanciesJson[3].labelEn,
			value: "",
		},
		[String(VacanciesJson[4].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[4].labelAr,
			labelEn: VacanciesJson[4].labelEn,
			value: "",
		},
		[String(VacanciesJson[5].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[5].labelAr,
			labelEn: VacanciesJson[5].labelEn,
			value: "",
		},
		[String(VacanciesJson[6].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[6].labelAr,
			labelEn: VacanciesJson[6].labelEn,
			value: "",
		},
		[String(VacanciesJson[7].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[7].labelAr,
			labelEn: VacanciesJson[7].labelEn,
			value: "",
		},
		[String(VacanciesJson[8].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[8].labelAr,
			labelEn: VacanciesJson[8].labelEn,
			value: "",
		},
		[String(VacanciesJson[9].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[9].labelAr,
			labelEn: VacanciesJson[9].labelEn,
			value: "",
		},
		[String(VacanciesJson[10].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[10].labelAr,
			labelEn: VacanciesJson[10].labelEn,
			value: "",
		},
		[String(VacanciesJson[11].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[11].labelAr,
			labelEn: VacanciesJson[11].labelEn,
			value: "",
		},
		[String(VacanciesJson[12].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[12].labelAr,
			labelEn: VacanciesJson[12].labelEn,
			value: "",
		},
		[String(VacanciesJson[13].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[13].labelAr,
			labelEn: VacanciesJson[13].labelEn,
			value: "",
		},
		[String(VacanciesJson[14].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[14].labelAr,
			labelEn: VacanciesJson[14].labelEn,
			value: "",
		},
		[String(VacanciesJson[15].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[15].labelAr,
			labelEn: VacanciesJson[15].labelEn,
			value: "",
		},
		[String(VacanciesJson[16].labelEn).toLocaleLowerCase()]: {
			labelAr: VacanciesJson[16].labelAr,
			labelEn: VacanciesJson[16].labelEn,
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

	const modelsOptions = VacanciesJson[1].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions2 = VacanciesJson[2].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions3 = VacanciesJson[3].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions4 = VacanciesJson[4].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions5 = VacanciesJson[5].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions6 = VacanciesJson[6].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions7 = VacanciesJson[7].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions8 = VacanciesJson[8].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions9 = VacanciesJson[9].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions10 = VacanciesJson[10].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions11 = VacanciesJson[11].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions12 = VacanciesJson[12].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions13 = VacanciesJson[13].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions14 = VacanciesJson[14].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions15 = VacanciesJson[15].Values.map((value) => {
		return {
			label: locale === "en" ? value.labelEn : value.labelAr,
			value: value.labelEn,
		};
	});

	const modelsOptions16 = VacanciesJson[16].Values.map((value) => {
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

				{/* TYPE */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[0].labelEn
							: VacanciesJson[0].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						{VacanciesJson[0].Values.map((value, index) => (
							<RadioComponent
								key={index}
								locale={locale}
								value={value.labelEn}
								textAr={value.labelAr}
								textEn={value.labelEn}
								name={String(VacanciesJson[0].labelEn)}
								onChange={(event) => {
									setListingDetails({
										...listingDetails,
										[String(
											VacanciesJson[0].labelEn
										).toLocaleLowerCase()]: {
											...listingDetails[
												String(
													VacanciesJson[0].labelEn
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

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[1].labelEn
							: VacanciesJson[1].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[1].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[1].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[1].labelEn
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
									? VacanciesJson[1].labelEn
									: VacanciesJson[1].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[2].labelEn
							: VacanciesJson[2].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[2].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[2].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[2].labelEn
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
									? VacanciesJson[2].labelEn
									: VacanciesJson[2].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[3].labelEn
							: VacanciesJson[3].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[3].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[3].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[3].labelEn
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
									? VacanciesJson[3].labelEn
									: VacanciesJson[3].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[4].labelEn
							: VacanciesJson[4].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[4].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[4].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[4].labelEn
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
									? VacanciesJson[4].labelEn
									: VacanciesJson[4].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[5].labelEn
							: VacanciesJson[5].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[5].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[5].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[5].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions5}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[5].labelEn
									: VacanciesJson[5].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[6].labelEn
							: VacanciesJson[6].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[6].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[6].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[6].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions6}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[6].labelEn
									: VacanciesJson[6].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[7].labelEn
							: VacanciesJson[7].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[7].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[7].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[7].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions7}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[7].labelEn
									: VacanciesJson[7].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[8].labelEn
							: VacanciesJson[8].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<MultiSelect
							style={{
								width: "100%",
								borderRadius: "5px",
								border: "1px solid #ccc",
							}}
							value={
								listingDetails[
									String(
										VacanciesJson[8].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[8].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[8].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions8}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[8].labelEn
									: VacanciesJson[8].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[9].labelEn
							: VacanciesJson[9].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[9].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[9].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[9].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions9}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[9].labelEn
									: VacanciesJson[9].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[10].labelEn
							: VacanciesJson[10].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[10].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[10].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[10].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions10}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[10].labelEn
									: VacanciesJson[10].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[11].labelEn
							: VacanciesJson[11].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[11].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[11].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[11].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions11}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[11].labelEn
									: VacanciesJson[11].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[12].labelEn
							: VacanciesJson[12].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[12].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[12].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[12].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions12}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[12].labelEn
									: VacanciesJson[12].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[13].labelEn
							: VacanciesJson[13].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[13].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[13].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[13].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions13}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[13].labelEn
									: VacanciesJson[13].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[14].labelEn
							: VacanciesJson[14].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<MultiSelect
							style={{
								width: "100%",
								borderRadius: "5px",
								border: "1px solid #ccc",
							}}
							value={
								listingDetails[
									String(
										VacanciesJson[14].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[14].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[14].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions14}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[14].labelEn
									: VacanciesJson[14].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[15].labelEn
							: VacanciesJson[15].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<DropDown
							value={
								listingDetails[
									String(
										VacanciesJson[15].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[15].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[15].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions15}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[15].labelEn
									: VacanciesJson[15].labelAr
							}
						/>
					</div>
				</div>

				{/*  JOB  */}
				<div className={`${classes.Type} rounded bg-white mt-4`}>
					<h3>
						{locale === "en"
							? VacanciesJson[16].labelEn
							: VacanciesJson[16].labelAr}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<MultiSelect
							style={{
								width: "100%",
								borderRadius: "5px",
								border: "1px solid #ccc",
							}}
							value={
								listingDetails[
									String(
										VacanciesJson[16].labelEn
									).toLocaleLowerCase()
								].value
							}
							onChange={(value) => {
								setListingDetails({
									...listingDetails,
									[String(
										VacanciesJson[16].labelEn
									).toLocaleLowerCase()]: {
										...listingDetails[
											String(
												VacanciesJson[16].labelEn
											).toLocaleLowerCase()
										],
										value: value.value,
									},
								});
							}}
							options={modelsOptions16}
							filter={true}
							placeholder={
								locale === "en"
									? VacanciesJson[16].labelEn
									: VacanciesJson[16].labelAr
							}
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
