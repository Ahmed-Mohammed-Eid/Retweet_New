"use client";
import classes from "./Cars.module.scss";
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
import CarsDropdown from "../../../Forms/Globals/CarsDropdown";
import ColorDropDown from "../../../Forms/Globals/ColorDropDown";
import { Calendar } from "primereact/calendar";
import Spinner from "../../../../LayoutAndHomeComponents/Spinner/Spinner";

export default function CarsForm({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		type: {
			labelAr: "الماركة",
			labelEn: "Brand",
			value: "",
		},
		model: {
			labelAr: "الموديل",
			labelEn: "Model",
			value: "",
		},
		year: {
			labelAr: "سنة الصنع",
			labelEn: "Year of Manufacture",
			value: "",
		},
		regionalSpecifications: {
			labelAr: "المواصفات الإقليمية",
			labelEn: "Regional Specifications",
			value: "",
		},
		carStatus: {
			labelAr: "حالة السيارة",
			labelEn: "Car Status",
			value: "",
		},
		mileage: {
			labelAr: "المسافة المقطوعة",
			labelEn: "Mileage",
			value: "",
		},
		transmissionType: {
			labelAr: "نوع ناقل الحركة",
			labelEn: "Transmission Type",
			value: "",
		},
		typeOfFuel: {
			labelAr: "نوع الوقود",
			labelEn: "Type of Fuel",
			value: "",
		},
		specs: {
			labelAr: "المواصفات",
			labelEn: "Specs",
			value: [],
		},
		typeOfStructure: {
			labelAr: "نوع الهيكل",
			labelEn: "Type of Structure",
			value: "",
		},
		outerColor: {
			labelAr: "اللون الخارجي",
			labelEn: "Outer Color",
			value: "",
		},
		innerColor: {
			labelAr: "اللون الداخلي",
			labelEn: "Inner Color",
			value: "",
		},
		vin: {
			labelAr: "رقم الهيكل",
			labelEn: "VIN",
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
				<div className={`${classes.CarType} rounded bg-white mt-4`}>
					<h3>{locale === "en" ? "Brand" : "الماركة"}</h3>
					<CarsDropdown
						locale={locale}
						setSelectedCar={(car) => {
							setListingDetails({
								...listingDetails,
								type: {
									...listingDetails.type,
									value: car,
								},
							});
						}}
						selectedCar={listingDetails.type.value}
					/>
				</div>

				{/*  MODEL  */}
				<div className={`${classes.Model} rounded bg-white`}>
					<h3>{locale === "en" ? "Model" : "الموديل"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							placeholder={"Model"}
							autoComplete={"off"}
							value={listingDetails?.model.value || ""}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									model: {
										...listingDetails.model,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  YEAR  */}
				<div className={`${classes.Year} rounded bg-white`}>
					<h3>{locale === "en" ? "Year" : "السنة"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<Calendar
							value={listingDetails.year.value}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									year: {
										...listingDetails.year,
										value: e.value,
									},
								});
							}}
							showIcon
							placeholder={"Year"}
							view="year"
							dateFormat="yy"
							minDate={new Date(1900, 0, 1)}
							maxDate={new Date()}
							className={"w-full"}
						/>
					</div>
				</div>

				{/*  REGIONAL SPECIFICATIONS  */}
				<div
					className={`${classes.RegionalSpecifications} rounded bg-white`}
				>
					<h3>
						{locale === "en"
							? "Regional Specifications"
							: "المواصفات الإقليمية"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات خليجية"}
							textEn={"Gulf Specifications"}
							value={"مواصفات خليجية"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات خليجية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات أمريكية"}
							textEn={"American Specifications"}
							value={"مواصفات أمريكية"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات أمريكية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات أوروبية"}
							textEn={"European Specifications"}
							value={"مواصفات أوروبية"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات أوروبية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات يابانية"}
							textEn={"Japanese Specifications"}
							value={"مواصفات يابانية"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات يابانية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات كورية"}
							textEn={"Korean Specifications"}
							value={"مواصفات كورية"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات كورية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات صينية"}
							textEn={"Chinese Specifications"}
							value={"مواصفات صينية"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات صينية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"regionalSpecifications"}
							textAr={"مواصفات أخرى"}
							textEn={"Other Specifications"}
							value={"مواصفات أخرى"}
							checked={
								listingDetails.regionalSpecifications.value ===
								"مواصفات أخرى"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									regionalSpecifications: {
										...listingDetails.regionalSpecifications,
										value: event.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  CAR STATUS  */}

				<div className={`${classes.CarStatus} rounded bg-white`}>
					<h3>{locale === "en" ? "Car Status" : "حالة السيارة"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"carStatus"}
							textAr={"جديد"}
							textEn={"New"}
							value={"جديد"}
							checked={listingDetails.carStatus.value === "جديد"}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									carStatus: {
										...listingDetails.carStatus,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"carStatus"}
							textAr={"مستعمل"}
							textEn={"Used"}
							value={"مستعمل"}
							checked={
								listingDetails.carStatus.value === "مستعمل"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									carStatus: {
										...listingDetails.carStatus,
										value: event.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  MILEAGE  */}
				<div className={`${classes.Mileage} rounded bg-white`}>
					<h3>{locale === "en" ? "Mileage" : "المسافة المقطوعة"}</h3>
					<DropDown
						locale={locale}
						options={[
							{ label: "0-5000", value: "0-5000" },
							{ label: "5000-10000", value: "5000-10000" },
							{ label: "10000-20000", value: "10000-20000" },
							{ label: "20000-30000", value: "20000-30000" },
							{ label: "30000-40000", value: "30000-40000" },
							{ label: "40000-50000", value: "40000-50000" },
							{ label: "50000-60000", value: "50000-60000" },
							{ label: "60000-70000", value: "60000-70000" },
							{ label: "70000-80000", value: "70000-80000" },
							{ label: "80000-90000", value: "80000-90000" },
							{ label: "90000-100000", value: "90000-100000" },
							{ label: "100000+", value: "100000+" },
						]}
						value={listingDetails.mileage.value}
						onChange={(e) => {
							setListingDetails({
								...listingDetails,
								mileage: {
									...listingDetails.mileage,
									value: e.value,
								},
							});
						}}
					/>
				</div>

				{/*  TRANSMISSION TYPE  */}

				<div className={`${classes.TransmissionType} rounded bg-white`}>
					<h3>
						{locale === "en"
							? "Transmission Type"
							: "نوع ناقل الحركة"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"transmissionType"}
							textAr={"أوتوماتيك"}
							textEn={"Automatic"}
							value={"أوتوماتيك"}
							checked={
								listingDetails.transmissionType.value ===
								"أوتوماتيك"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									transmissionType: {
										...listingDetails.transmissionType,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"transmissionType"}
							textAr={"عادي"}
							textEn={"Manual"}
							value={"عادي"}
							checked={
								listingDetails.transmissionType.value === "عادي"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									transmissionType: {
										...listingDetails.transmissionType,
										value: event.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  TYPE OF FUEL  */}
				<div className={`${classes.TypeOfFuel} rounded bg-white`}>
					<h3>{locale === "en" ? "Type of Fuel" : "نوع الوقود"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"typeOfFuel"}
							textAr={"بنزين"}
							textEn={"Petrol"}
							value={"بنزين"}
							checked={
								listingDetails.typeOfFuel.value === "بنزين"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfFuel: {
										...listingDetails.typeOfFuel,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfFuel"}
							textAr={"ديزل"}
							textEn={"Diesel"}
							value={"ديزل"}
							checked={listingDetails.typeOfFuel.value === "ديزل"}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfFuel: {
										...listingDetails.typeOfFuel,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfFuel"}
							textAr={"هجين"}
							textEn={"Hybrid"}
							value={"هجين"}
							checked={listingDetails.typeOfFuel.value === "هجين"}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfFuel: {
										...listingDetails.typeOfFuel,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfFuel"}
							textAr={"كهربائي"}
							textEn={"Electric"}
							value={"كهربائي"}
							checked={
								listingDetails.typeOfFuel.value === "كهربائي"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfFuel: {
										...listingDetails.typeOfFuel,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfFuel"}
							textAr={"غاز"}
							textEn={"Gas"}
							value={"غاز"}
							checked={listingDetails.typeOfFuel.value === "غاز"}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfFuel: {
										...listingDetails.typeOfFuel,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfFuel"}
							textAr={"أخرى"}
							textEn={"Other"}
							value={"أخرى"}
							checked={listingDetails.typeOfFuel.value === "أخرى"}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfFuel: {
										...listingDetails.typeOfFuel,
										value: event.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  INNER SPECS  */}
				<div className={`${classes.InnerSpecs} rounded bg-white`}>
					<h3>{locale === "en" ? "Specs" : "المواصفات"}</h3>
					<MultiSelect
						value={listingDetails.specs.value}
						filter={true}
						options={[
							{
								label:
									locale === "en"
										? "Leather Seats"
										: "مقاعد جلدية",
								value: "Leather Seats",
							},
							{
								label: locale === "en" ? "Sunroof" : "فتحة سقف",
								value: "Sunroof",
							},
							{
								label:
									locale === "en"
										? "Navigation System"
										: "نظام الملاحة",
								value: "Navigation System",
							},
							{
								label: locale === "en" ? "Bluetooth" : "بلوتوث",
								value: "Bluetooth",
							},
							{
								label: locale === "en" ? "USB" : "USB",
								value: "USB",
							},
							{
								label: locale === "en" ? "AUX" : "AUX",
								value: "AUX",
							},
							{
								label: locale === "en" ? "CD Player" : "مشغل CD",
								value: "CD Player",
							},
							{
								label: locale === "en" ? "Radio" : "راديو",
								value: "Radio",
							},
							{
								label:
									locale === "en"
										? "Air Conditioning"
										: "تكييف هواء",
								value: "Air Conditioning",
							},
							{
								label: locale === "en" ? "Heater" : "سخان",
								value: "Heater",
							},
							{
								label: locale === "en" ? "Cooler" : "مبرد",
								value: "Cooler",
							},
							{
								label:
									locale === "en"
										? "Heated Seats"
										: "مقاعد مدفأة",
								value: "Heated Seats",
							},
							{
								label:
									locale === "en"
										? "Cruise Control"
										: "مثبت السرعة",
								value: "Cruise Control",
							},
							{
								label:
									locale === "en"
										? "Power Windows"
										: "نوافذ كهربائية",
								value: "Power Windows",
							},
							{
								label:
									locale === "en"
										? "Power Locks"
										: "أقفال كهربائية",
								value: "Power Locks",
							},
							{
								label:
									locale === "en"
										? "Keyless Entry"
										: "دخول بدون مفتاح",
								value: "Keyless Entry",
							},
							{
								label:
									locale === "en"
										? "Push Start"
										: "تشغيل بالضغط",
								value: "Push Start",
							},
							{
								label:
									locale === "en"
										? "Rear Camera"
										: "كاميرا خلفية",
								value: "Rear Camera",
							},
							{
								label:
									locale === "en"
										? "Front Camera"
										: "كاميرا أمامية",
								value: "Front Camera",
							},
							{
								label:
									locale === "en" ? "360 Camera" : "كاميرا 360",
								value: "360 Camera",
							},
							{
								label:
									locale === "en"
										? "Parking Sensors"
										: "أجهزة استشعار الركن",
								value: "Parking Sensors",
							},
							{
								label:
									locale === "en"
										? "Blind Spot Detection"
										: "كشف النقطة العمياء",
								value: "Blind Spot Detection",
							},
							{
								label:
									locale === "en"
										? "Lane Departure Warning"
										: "تحذير مغادرة المسار",
								value: "Lane Departure Warning",
							},
							{
								label:
									locale === "en"
										? "Adaptive Cruise Control"
										: "مثبت السرعة التكيفي",
								value: "Adaptive Cruise Control",
							},
							{
								label:
									locale === "en"
										? "Collision Warning"
										: "تحذير التصادم",
								value: "Collision Warning",
							},
							{
								label:
									locale === "en"
										? "Automatic Emergency Braking"
										: "نظام الفرامل الطارئة التلقائي",
								value: "Automatic Emergency Braking",
							},
							{
								label:
									locale === "en"
										? "Traction Control"
										: "التحكم في الجر",
								value: "Traction Control",
							},
							{
								label:
									locale === "en"
										? "Stability Control"
										: "نظام التحكم في الاستقرار",
								value: "Stability Control",
							},
							{
								label:
									locale === "en"
										? "ABS"
										: "نظام الفرامل المانعة للانغلاق",
								value: "ABS",
							},
							{
								label: locale === "en" ? "ESP" : "ESP",
								value: "ESP",
							},
							{
								label:
									locale === "en"
										? "Hill Assist"
										: "مساعدة الهضم",
								value: "Hill Assist",
							},
							{
								label:
									locale === "en" ? "Off Road" : "خارج الطريق",
								value: "Off Road",
							},
							{
								label:
									locale === "en"
										? "Sport Mode"
										: "وضع الرياضة",
								value: "Sport Mode",
							},
							{
								label:
									locale === "en" ? "Eco Mode" : "وضع الاقتصاد",
								value: "Eco Mode",
							},
							{
								label:
									locale === "en" ? "Snow Mode" : "وضع الثلج",
								value: "Snow Mode",
							},
							{
								label:
									locale === "en" ? "Sand Mode" : "وضع الرمل",
								value: "Sand Mode",
							},
							{
								label:
									locale === "en" ? "Rock Mode" : "وضع الصخور",
								value: "Rock Mode",
							},
							{
								label: locale === "en" ? "Mud Mode" : "وضع الطين",
								value: "Mud Mode",
							},
							{
								label:
									locale === "en" ? "Custom Mode" : "وضع مخصص",
								value: "Custom Mode",
							},
							{
								label:
									locale === "en"
										? "Memory Seats"
										: "مقاعد الذاكرة",
								value: "Memory Seats",
							},
							{
								label:
									locale === "en"
										? "Electric Seats"
										: "مقاعد كهربائية",
								value: "Electric Seats",
							},
							{
								label:
									locale === "en"
										? "Cooling Seats"
										: "مقاعد التبريد",
								value: "Cooling Seats",
							},
							{
								label:
									locale === "en"
										? "Heated Steering Wheel"
										: "عجلة القيادة المدفأة",
								value: "Heated Steering Wheel",
							},
							{
								label:
									locale === "en"
										? "Panoramic Roof"
										: "سقف بانورامي",
								value: "Panoramic Roof",
							},
							{
								label:
									locale === "en"
										? "LED Headlights"
										: "مصابيح LED",
								value: "LED Headlights",
							},
							{
								label:
									locale === "en"
										? "Xenon Headlights"
										: "مصابيح زينون",
								value: "Xenon Headlights",
							},
							{
								label:
									locale === "en"
										? "Fog Lights"
										: "أضواء الضباب",
								value: "Fog Lights",
							},
							{
								label:
									locale === "en"
										? "Daytime Running Lights"
										: "أضواء النهار",
								value: "Daytime Running Lights",
							},
							{
								label:
									locale === "en"
										? "Alloy Wheels"
										: "عجلات سبيكة",
								value: "Alloy Wheels",
							},
							{
								label:
									locale === "en"
										? "Steel Wheels"
										: "عجلات فولاذية",
								value: "Steel Wheels",
							},
							{
								label:
									locale === "en"
										? "Rear Spoiler"
										: "جناح خلفي",
								value: "Rear Spoiler",
							},
							{
								label:
									locale === "en"
										? "Front Spoiler"
										: "جناح أمامي",
								value: "Front Spoiler",
							},
							{
								label: locale === "en" ? "Side Skirts" : "جانبية",
								value: "Side Skirts",
							},
							{
								label:
									locale === "en"
										? "Rear Diffuser"
										: "موزع خلفي",
								value: "Rear Diffuser",
							},
							{
								label:
									locale === "en"
										? "Front Diffuser"
										: "موزع أمامي",
								value: "Front Diffuser",
							},
							{
								label:
									locale === "en"
										? "Tinted Windows"
										: "نوافذ ملونة",
								value: "Tinted Windows",
							},
							{
								label: locale === "en" ? "Roof Rack" : "رف سقف",
								value: "Roof Rack",
							},
							{
								label:
									locale === "en" ? "Tow Hook" : "خطاف القطر",
								value: "Tow Hook",
							},
							{
								label:
									locale === "en"
										? "Spare Tire"
										: "إطار الغيار",
								value: "Spare Tire",
							},
							{
								label: locale === "en" ? "Jack" : "رافعة",
								value: "Jack",
							},
							{
								label: locale === "en" ? "Tool Kit" : "عدة أدوات",
								value: "Tool Kit",
							},
							{
								label:
									locale === "en"
										? "First Aid Kit"
										: "عدة إسعافات أولية",
								value: "First Aid Kit",
							},
							{
								label:
									locale === "en"
										? "Fire Extinguisher"
										: "طفاية حريق",
								value: "Fire Extinguisher",
							},
							{
								label:
									locale === "en"
										? "Warning Triangle"
										: "مثلث تحذير",
								value: "Warning Triangle",
							},
							{
								label:
									locale === "en" ? "Car Cover" : "غطاء سيارة",
								value: "Car Cover",
							},
							{
								label:
									locale === "en" ? "Car Mats" : "بساط السيارة",
								value: "Car Mats",
							},
							{
								label:
									locale === "en"
										? "Car Freshener"
										: "معطر سيارة",
								value: "Car Freshener",
							},
							{
								label:
									locale === "en"
										? "Car Charger"
										: "شاحن سيارة",
								value: "Car Charger",
							},
							{
								label:
									locale === "en" ? "Car Holder" : "حامل سيارة",
								value: "Car Holder",
							},
							{
								label:
									locale === "en" ? "Car Phone" : "هاتف سيارة",
								value: "Car Phone",
							},
							{
								label:
									locale === "en"
										? "Car Camera"
										: "كاميرا سيارة",
								value: "Car Camera",
							},
							{
								label:
									locale === "en" ? "Car Alarm" : "إنذار سيارة",
								value: "Car Alarm",
							},
							{
								label: locale === "en" ? "Car Lock" : "قفل سيارة",
								value: "Car Lock",
							},
							{
								label:
									locale === "en" ? "Car Key" : "مفتاح سيارة",
								value: "Car Key",
							},
							{
								label:
									locale === "en"
										? "Car Remote"
										: "ريموت سيارة",
								value: "Car Remote",
							},
							{
								label:
									locale === "en"
										? "Car Battery"
										: "بطارية سيارة",
								value: "Car Battery",
							},
							{
								label:
									locale === "en" ? "Car Engine" : "محرك سيارة",
								value: "Car Engine",
							},
							{
								label:
									locale === "en"
										? "Car Gearbox"
										: "صندوق التروس",
								value: "Car Gearbox",
							},
							{
								label:
									locale === "en"
										? "Car Suspension"
										: "تعليق السيارة",
								value: "Car Suspension",
							},
							{
								label:
									locale === "en"
										? "Car Brakes"
										: "فرامل السيارة",
								value: "Car Brakes",
							},
							{
								label:
									locale === "en"
										? "Car Wheels"
										: "عجلات السيارة",
								value: "Car Wheels",
							},
							{
								label:
									locale === "en"
										? "Car Lights"
										: "أضواء السيارة",
								value: "Car Lights",
							},
							{
								label:
									locale === "en"
										? "Car Windows"
										: "نوافذ السيارة",
								value: "Car Windows",
							},
						]}
						onChange={(event) => {
							setListingDetails({
								...listingDetails,
								specs: {
									...listingDetails.specs,
									value: event.value,
								},
							});
						}}
						placeholder={
							locale === "en"
								? "Select Inner Specs"
								: "اختر المواصفات الداخلية"
						}
						className={"w-full border"}
					/>
				</div>

				{/*  TYPE OF STRUCTURE  */}
				<div className={`${classes.TypeOfStructure} rounded bg-white`}>
					<h3>
						{locale === "en" ? "Type of Structure" : "نوع الهيكل"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"هاتشباك"}
							textEn={"Hatchback"}
							value={"هاتشباك"}
							checked={
								listingDetails.typeOfStructure.value ===
								"هاتشباك"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"سيدان"}
							textEn={"Sedan"}
							value={"سيدان"}
							checked={
								listingDetails.typeOfStructure.value === "سيدان"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"كوبيه"}
							textEn={"Coupe"}
							value={"كوبيه"}
							checked={
								listingDetails.typeOfStructure.value === "كوبيه"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"كروس أوفر"}
							textEn={"Crossover"}
							value={"كروس أوفر"}
							checked={
								listingDetails.typeOfStructure.value ===
								"كروس أوفر"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"سيارة رياضية"}
							textEn={"Sports Car"}
							value={"سيارة رياضية"}
							checked={
								listingDetails.typeOfStructure.value ===
								"سيارة رياضية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"سيارة عائلية"}
							textEn={"Family Car"}
							value={"سيارة عائلية"}
							checked={
								listingDetails.typeOfStructure.value ===
								"سيارة عائلية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"typeOfStructure"}
							textAr={"سيارة كهربائية"}
							textEn={"Electric Car"}
							value={"سيارة كهربائية"}
							checked={
								listingDetails.typeOfStructure.value ===
								"سيارة كهربائية"
							}
							onChange={(event) => {
								setListingDetails({
									...listingDetails,
									typeOfStructure: {
										...listingDetails.typeOfStructure,
										value: event.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  OUTER COLOR  */}
				<div className={`${classes.OuterColor} rounded bg-white`}>
					<h3>{locale === "en" ? "Outer Color" : "اللون الخارجي"}</h3>
					<ColorDropDown
						locale={locale}
						selectedColor={listingDetails.outerColor.value}
						setSelectedColor={(color) => {
							setListingDetails({
								...listingDetails,
								outerColor: {
									...listingDetails.outerColor,
									value: color,
								},
							});
						}}
					/>
				</div>

				{/*  INNER COLOR  */}
				<div className={`${classes.InnerColor} rounded bg-white`}>
					<h3>{locale === "en" ? "Inner Color" : "اللون الداخلي"}</h3>
					<ColorDropDown
						locale={locale}
						selectedColor={listingDetails.innerColor.value}
						setSelectedColor={(color) => {
							setListingDetails({
								...listingDetails,
								innerColor: {
									...listingDetails.innerColor,
									value: color,
								},
							});
						}}
					/>
				</div>

				{/*  VIN  */}
				<div className={`${classes.Vin} rounded bg-white`}>
					<h3>{locale === "en" ? "VIN Number" : "رقم الشاسيه"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<input
							type="text"
							placeholder={"VIN"}
							value={listingDetails?.vin.value || ""}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									vin: {
										...listingDetails.vin,
										value: e.target.value,
									},
								});
							}}
							autoComplete={"off"}
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
