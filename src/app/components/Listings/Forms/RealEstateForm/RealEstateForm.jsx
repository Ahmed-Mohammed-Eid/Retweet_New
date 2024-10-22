"use client";
import classes from "./RealEstateForm.module.scss";
import Hint from "../../Hint/Hint";
import RadioComponent from "../../RadioComponent/RadioComponent";
import DropDown from "../../DropDown/DropDown";
import CheckBoxComponent from "../../CheckBoxComponent/CheckBoxComponent";
import Location from "../../Forms/Globals/Location";
import Description from "../../Forms/Globals/Description";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import Price from "../../Forms/Globals/Price";
import ContactInformation from "../../Forms/Globals/ContactInformation";
import CategoryInfo from "../../Forms/Globals/CategoryInfo";
import Spinner from "../../../LayoutAndHomeComponents/Spinner/Spinner";

export default function RealEstateForm({
	locale,
	categoryName,
	subCategoryName,
	submit = () => {},
	loading = false,
}) {
	// LISTING DETAILS PART
	const [listingDetails, setListingDetails] = useState({
		rooms: {
			labelAr: "الغرف",
			labelEn: "Rooms",
			value: "",
		},
		bathrooms: {
			labelAr: "الحمامات",
			labelEn: "HouseLighting",
			value: "",
		},
		furnished: {
			labelAr: "مفروش/غير مفروش",
			labelEn: "Furnished/Unfurnished",
			value: "",
		},
		surfaceArea: {
			labelAr: "مساحة السطح",
			labelEn: "Surface Area",
			value: "",
		},
		surfaceAreaUnit: {
			labelAr: "وحدة السطح",
			labelEn: "Surface Area Unit",
			value: "",
		},
		floor: {
			labelAr: "طابق",
			labelEn: "Floor",
			value: "",
		},
		buildingAge: {
			labelAr: "عمر البناء",
			labelEn: "Building Age",
			value: "",
		},
		rentalPeriod: {
			labelAr: "فترة الإيجار",
			labelEn: "Rental Period",
			value: "",
		},
		mainAmenities: {
			labelAr: "المرافق الرئيسية",
			labelEn: "Main Amenities",
			value: [],
		},
		additionalAmenities: {
			labelAr: "مرافق إضافية",
			labelEn: "Additional Amenities",
			value: [],
		},
		nearbyLocations: {
			labelAr: "المواقع القريبة",
			labelEn: "Nearby Locations",
			value: [],
		},
		facade: {
			labelAr: "واجهة",
			labelEn: "Facade",
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

	// MAIN AMENITIES OPTIONS

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

				{/*  NUMBER OF ROOMS  */}
				<div className={`${classes.NumberOfRooms} rounded bg-white`}>
					<h3>{locale === "en" ? "Number of rooms" : "عدد الغرف"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"rooms"}
							value={"studio"}
							textEn={"Studio"}
							textAr={"استديو"}
							checked={listingDetails.rooms.value === "studio"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rooms: {
										...listingDetails.rooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rooms"}
							value={"1"}
							textEn={"1"}
							textAr={"1"}
							checked={listingDetails.rooms.value === "1"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rooms: {
										...listingDetails.rooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rooms"}
							value={"2"}
							textEn={"2"}
							textAr={"2"}
							checked={listingDetails.rooms.value === "2"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rooms: {
										...listingDetails.rooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rooms"}
							value={"3"}
							textEn={"3"}
							textAr={"3"}
							checked={listingDetails.rooms.value === "3"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rooms: {
										...listingDetails.rooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rooms"}
							value={"4"}
							textEn={"4"}
							textAr={"4"}
							checked={listingDetails.rooms.value === "4"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rooms: {
										...listingDetails.rooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rooms"}
							value={"5"}
							textEn={"5"}
							textAr={"5"}
							checked={listingDetails.rooms.value === "5"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rooms: {
										...listingDetails.rooms,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  NUMBER OF BATHROOMS  */}
				<div
					className={`${classes.NumberOfBathrooms} rounded bg-white`}
				>
					<h3>
						{locale === "en" ? "Number of bathrooms" : "عدد الحمامات"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"bathrooms"}
							value={"1"}
							textEn={"1"}
							textAr={"1"}
							checked={listingDetails.bathrooms.value === "1"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									bathrooms: {
										...listingDetails.bathrooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"bathrooms"}
							value={"2"}
							textEn={"2"}
							textAr={"2"}
							checked={listingDetails.bathrooms.value === "2"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									bathrooms: {
										...listingDetails.bathrooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"bathrooms"}
							value={"3"}
							textEn={"3"}
							textAr={"3"}
							checked={listingDetails.bathrooms.value === "3"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									bathrooms: {
										...listingDetails.bathrooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"bathrooms"}
							value={"4"}
							textEn={"4"}
							textAr={"4"}
							checked={listingDetails.bathrooms.value === "4"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									bathrooms: {
										...listingDetails.bathrooms,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"bathrooms"}
							value={"5"}
							textEn={"5"}
							textAr={"5"}
							checked={listingDetails.bathrooms.value === "5"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									bathrooms: {
										...listingDetails.bathrooms,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  Furnished/Unfurnished  */}
				<div
					className={`${classes.FurnishedUnfurnished} rounded bg-white`}
				>
					<h3>
						{locale === "en"
							? "Furnished/Unfurnished"
							: "مفروش/غير مفروش"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"furnished"}
							value={"furnished"}
							textEn={"Furnished"}
							textAr={"مفروش"}
							checked={
								listingDetails.furnished.value === "furnished"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									furnished: {
										...listingDetails.furnished,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"furnished"}
							value={"unfurnished"}
							textEn={"Unfurnished"}
							textAr={"غير مفروش"}
							checked={
								listingDetails.furnished.value === "unfurnished"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									furnished: {
										...listingDetails.furnished,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  Surface Area  */}
				<div className={`${classes.SurfaceArea} rounded bg-white`}>
					<h3>{locale === "en" ? "Surface Area" : "مساحة السطح"}</h3>
					<div className={"grid grid-cols-4 gap-4 items-start"}>
						<DropDown
							value={listingDetails?.surfaceAreaUnit.value || ""}
							options={[
								{ label: "m²", value: "m²" },
								{ label: "ft²", value: "ft²" },
							]}
							placeholder={
								locale === "en" ? "Select Unit" : "حدد الوحدة"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									surfaceAreaUnit: {
										...listingDetails.surfaceAreaUnit,
										value: e.value,
									},
								});
							}}
						/>
						<input
							type="number"
							placeholder={"Surface Area"}
							className={"col-span-3"}
							value={listingDetails?.surfaceArea.value || ""}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									surfaceArea: {
										...listingDetails.surfaceArea,
										value: e.target.value,
									},
								});
							}}
							autoComplete={"off"}
						/>
					</div>
				</div>

				{/* Floor  */}
				<div className={`${classes.Floor} rounded bg-white`}>
					<h3>{locale === "en" ? "Floor" : "طابق"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"Basement Floor"}
							textEn={"Basement Floor"}
							textAr={"طابق القبو"}
							checked={
								listingDetails.floor.value === "Basement Floor"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"Semi Ground Floor"}
							textEn={"Semi Ground Floor"}
							textAr={"طابق شبه الأرض"}
							checked={
								listingDetails.floor.value ===
								"Semi Ground Floor"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"Ground Floor"}
							textEn={"Ground Floor"}
							textAr={"الطابق الأرضي"}
							checked={
								listingDetails.floor.value === "Ground Floor"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"1"}
							textEn={"1"}
							textAr={"1"}
							checked={listingDetails.floor.value === "1"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"2"}
							textEn={"2"}
							textAr={"2"}
							checked={listingDetails.floor.value === "2"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"3"}
							textEn={"3"}
							textAr={"3"}
							checked={listingDetails.floor.value === "3"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"4"}
							textEn={"4"}
							textAr={"4"}
							checked={listingDetails.floor.value === "4"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"5"}
							textEn={"5"}
							textAr={"5"}
							checked={listingDetails.floor.value === "5"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"6"}
							textEn={"6"}
							textAr={"6"}
							checked={listingDetails.floor.value === "6"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"7"}
							textEn={"7"}
							textAr={"7"}
							checked={listingDetails.floor.value === "7"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"8"}
							textEn={"8"}
							textAr={"8"}
							checked={listingDetails.floor.value === "8"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"floor"}
							value={"Last Floor With Floor"}
							textEn={"Last Floor With Floor"}
							textAr={"الطابق الأخير مع الطابق"}
							checked={
								listingDetails.floor.value ===
								"Last Floor With Floor"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									floor: {
										...listingDetails.floor,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  Building Age  */}
				<div className={`${classes.BuildingAge} rounded bg-white`}>
					<h3>{locale === "en" ? "Building Age" : "عمر البناء"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"buildingAge"}
							value={"0-11 Months"}
							textEn={"0-11 Months"}
							textAr={"0-11 أشهر"}
							checked={
								listingDetails.buildingAge.value ===
								"0-11 Months"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									buildingAge: {
										...listingDetails.buildingAge,
										value: e.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"buildingAge"}
							value={"1-5 Years"}
							textEn={"1-5 Years"}
							textAr={"1-5 سنوات"}
							checked={
								listingDetails.buildingAge.value === "1-5 Years"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									buildingAge: {
										...listingDetails.buildingAge,
										value: e.target.value,
									},
								});
							}}
						/>

						<RadioComponent
							locale={locale}
							name={"buildingAge"}
							value={"6-10 Years"}
							textEn={"6-10 Years"}
							textAr={"6-10 سنوات"}
							checked={
								listingDetails.buildingAge.value ===
								"6-10 Years"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									buildingAge: {
										...listingDetails.buildingAge,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"buildingAge"}
							value={"11-20 Years"}
							textEn={"11-20 Years"}
							textAr={"11-20 سنوات"}
							checked={
								listingDetails.buildingAge.value ===
								"11-20 Years"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									buildingAge: {
										...listingDetails.buildingAge,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"buildingAge"}
							value={"20+ Years"}
							textEn={"20+ Years"}
							textAr={"20+ سنوات"}
							checked={
								listingDetails.buildingAge.value === "20+ Years"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									buildingAge: {
										...listingDetails.buildingAge,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  Rental period  */}
				<div className={`${classes.RentalPeriod} rounded bg-white`}>
					<h3>{locale === "en" ? "Rental period" : "فترة الإيجار"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"rentalPeriod"}
							value={"Daily"}
							textEn={"Daily"}
							textAr={"يومي"}
							checked={
								listingDetails.rentalPeriod.value === "Daily"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rentalPeriod: {
										...listingDetails.rentalPeriod,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rentalPeriod"}
							value={"Weekly"}
							textEn={"Weekly"}
							textAr={"أسبوعي"}
							checked={
								listingDetails.rentalPeriod.value === "Weekly"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rentalPeriod: {
										...listingDetails.rentalPeriod,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rentalPeriod"}
							value={"Monthly"}
							textEn={"Monthly"}
							textAr={"شهري"}
							checked={
								listingDetails.rentalPeriod.value === "Monthly"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rentalPeriod: {
										...listingDetails.rentalPeriod,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"rentalPeriod"}
							value={"Yearly"}
							textEn={"Yearly"}
							textAr={"سنوي"}
							checked={
								listingDetails.rentalPeriod.value === "Yearly"
							}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									rentalPeriod: {
										...listingDetails.rentalPeriod,
										value: e.target.value,
									},
								});
							}}
						/>
					</div>
				</div>

				{/*  Main Amenities  */}
				<div className={`${classes.MainAmenities} rounded bg-white`}>
					<h3>
						{locale === "en" ? "Main Amenities" : "المرافق الرئيسية"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<MultiSelect
							value={listingDetails?.mainAmenities.value || []}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									mainAmenities: {
										...listingDetails.mainAmenities,
										value: e.value,
									},
								});
							}}
							options={[
								locale === "en" ? "Air Conditioning" : "تكييف",
								locale === "en" ? "Balcony" : "شرفة",
								locale === "en"
									? "Built in Wardrobes"
									: "خزائن مدمجة",
								locale === "en" ? "Central A/C" : "تكييف مركزي",
								locale === "en" ? "Concierge" : "كونسيرج",
								locale === "en"
									? "Covered Parking"
									: "موقف سيارات مغطى",
								locale === "en"
									? "Kitchen Appliances"
									: "أجهزة المطبخ",
								locale === "en" ? "Maid Service" : "خدمة الغرف",
								locale === "en" ? "Networked" : "متصل بالشبكة",
								locale === "en"
									? "Pets Allowed"
									: "يسمح بالحيوانات الأليفة",
								locale === "en" ? "Security" : "أمان",
								locale === "en"
									? "Shared Gym"
									: "صالة رياضية مشتركة",
								locale === "en"
									? "Shared Pool"
									: "حمام سباحة مشترك",
								locale === "en"
									? "View of Landmark"
									: "إطلالة على معلم",
								locale === "en"
									? "View of Water"
									: "إطلالة على الماء",
								locale === "en"
									? "Walk-in Closet"
									: "خزانة ملابس",
								locale === "en"
									? "Waste Disposal"
									: "تخلص من النفايات",
								locale === "en" ? "Laundry Room" : "غرفة غسيل",
								locale === "en"
									? "Private Pool"
									: "حمام سباحة خاص",
								locale === "en"
									? "Private Gym"
									: "صالة رياضية خاصة",
								locale === "en" ? "Private Garden" : "حديقة خاصة",
								locale === "en"
									? "Private Jacuzzi"
									: "جاكوزي خاص",
								locale === "en" ? "Private Sauna" : "ساونا خاصة",
								locale === "en"
									? "Private Steam Room"
									: "غرفة بخار خاصة",
								locale === "en" ? "Barbecue Area" : "منطقة شواء",
								locale === "en"
									? "Kids Play Area"
									: "منطقة لعب الأطفال",
								locale === "en"
									? "Lawn or Garden"
									: "عشب أو حديقة",
								locale === "en" ? "CCTV Security" : "أمان CCTV",
								locale === "en" ? "Intercom" : "التحدث الداخلي",
								locale === "en"
									? "Satellite/Cable TV"
									: "تلفزيون الكابل / الأقمار الصناعية",
								locale === "en"
									? "Double Glazed Windows"
									: "نوافذ مزدوجة الزجاج",
								locale === "en"
									? "Maintenance Staff"
									: "طاقم الصيانة",
								locale === "en"
									? "Cleaning Services"
									: "خدمات التنظيف",
								locale === "en" ? "Marble" : "رخام",
								locale === "en" ? "Tiles" : "بلاط",
								locale === "en"
									? "Wood Flooring"
									: "أرضيات خشبية",
								locale === "en" ? "Balcony" : "شرفة",
								locale === "en" ? "Bar" : "بار",
								locale === "en" ? "Laundry Room" : "غرفة غسيل",
								locale === "en"
									? "Laundry in Building"
									: "غسيل في المبنى",
								locale === "en"
									? "Service Elevators"
									: "مصاعد الخدمة",
								locale === "en" ? "Prayer Room" : "غرفة الصلاة",
								locale === "en"
									? "Reception/Waiting Room"
									: "غرفة الاستقبال / الانتظار",
								locale === "en"
									? "Conference Room"
									: "غرفة المؤتمرات",
								locale === "en"
									? "Security Staff"
									: "طاقم الأمان",
								locale === "en"
									? "Cafeteria or Canteen"
									: "كافتيريا أو منتزه",
								locale === "en" ? "Freehold" : "ملكية حرة",
								locale === "en" ? "Maids Room" : "غرفة الخادمة",
								locale === "en"
									? "Storage Areas"
									: "مناطق التخزين",
								locale === "en" ? "Study Room" : "غرفة دراسة",
								locale === "en"
									? "Waste Disposal"
									: "تخلص من النفايات",
								locale === "en"
									? "Conference Room"
									: "غرفة المؤتمرات",
								locale === "en"
									? "Conference Room"
									: "غرفة المؤتمرات",
							]}
							display="chip"
							placeholder="Select Cities"
							maxSelectedLabels={20}
							className="w-full md:w-20rem"
							style={{
								width: "100%",
								height: "50px",
								border: "1px solid #EBF5F8",
								borderRadius: "5px",
								fontSize: "15px",
								outline: "none",
							}}
						/>
					</div>
				</div>

				{/*  Additional Amenities  */}
				<div
					className={`${classes.AdditionalAmenities} rounded bg-white`}
				>
					<h3>
						{locale === "en"
							? "Additional Amenities"
							: "مرافق إضافية"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Air Conditioning"}
							textEn={"Air Conditioning"}
							textAr={"تكييف"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Air Conditioning"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Balcony"}
							textEn={"Balcony"}
							textAr={"شرفة"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Balcony"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Built in Wardrobes"}
							textEn={"Built in Wardrobes"}
							textAr={"خزائن مدمجة"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Built in Wardrobes"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Central A/C"}
							textEn={"Central A/C"}
							textAr={"تكييف مركزي"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Central A/C"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Concierge"}
							textEn={"Concierge"}
							textAr={"كونسيرج"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Concierge"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Covered Parking"}
							textEn={"Covered Parking"}
							textAr={"موقف سيارات مغطى"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Covered Parking"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Kitchen Appliances"}
							textEn={"Kitchen Appliances"}
							textAr={"أجهزة المطبخ"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Kitchen Appliances"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Maid Service"}
							textEn={"Maid Service"}
							textAr={"خدمة الغرف"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Maid Service"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Networked"}
							textEn={"Networked"}
							textAr={"متصل بالشبكة"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Networked"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Pets Allowed"}
							textEn={"Pets Allowed"}
							textAr={"يسمح بالحيوانات الأليفة"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Pets Allowed"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Security"}
							textEn={"Security"}
							textAr={"أمان"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Security"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Shared Gym"}
							textEn={"Shared Gym"}
							textAr={"صالة رياضية مشتركة"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Shared Gym"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Shared Pool"}
							textEn={"Shared Pool"}
							textAr={"حمام سباحة مشترك"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Shared Pool"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"View of Landmark"}
							textEn={"View of Landmark"}
							textAr={"إطلالة على معلم"}
							checked={listingDetails.additionalAmenities.value.includes(
								"View of Landmark"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"View of Water"}
							textEn={"View of Water"}
							textAr={"إطلالة على الماء"}
							checked={listingDetails.additionalAmenities.value.includes(
								"View of Water"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Walk-in Closet"}
							textEn={"Walk-in Closet"}
							textAr={"خزانة ملابس"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Walk-in Closet"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"additionalAmenities"}
							value={"Waste Disposal"}
							textEn={"Waste Disposal"}
							textAr={"تخلص من النفايات"}
							checked={listingDetails.additionalAmenities.value.includes(
								"Waste Disposal"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: [
												...listingDetails
													.additionalAmenities.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										additionalAmenities: {
											...listingDetails.additionalAmenities,
											value: listingDetails.additionalAmenities.value.filter(
												(amenity) =>
													amenity !== e.target.value
											),
										},
									});
								}
							}}
						/>
					</div>
				</div>

				{/*  Nearby Locations  */}
				<div className={`${classes.NearbyLocations} rounded bg-white`}>
					<h3>
						{locale === "en" ? "Nearby Locations" : "المواقع القريبة"}
					</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Airport"}
							textEn={"Airport"}
							textAr={"مطار"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Airport"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Hospital"}
							textEn={"Hospital"}
							textAr={"مستشفى"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Hospital"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Mall"}
							textEn={"Mall"}
							textAr={"مركز تجاري"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Mall"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Metro"}
							textEn={"Metro"}
							textAr={"مترو"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Metro"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Mosque"}
							textEn={"Mosque"}
							textAr={"مسجد"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Mosque"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Park"}
							textEn={"Park"}
							textAr={"حديقة"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Park"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Pharmacy"}
							textEn={"Pharmacy"}
							textAr={"صيدلية"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Pharmacy"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Restaurants"}
							textEn={"Restaurants"}
							textAr={"مطاعم"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Restaurants"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"School"}
							textEn={"School"}
							textAr={"مدرسة"}
							checked={listingDetails.nearbyLocations.value.includes(
								"School"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
						<CheckBoxComponent
							locale={locale}
							name={"nearbyLocations"}
							value={"Supermarket"}
							textEn={"Supermarket"}
							textAr={"سوبر ماركت"}
							checked={listingDetails.nearbyLocations.value.includes(
								"Supermarket"
							)}
							onChange={(e) => {
								// CHECK IF THE CHECKBOX IS CHECKED ADD THE VALUE TO THE ARRAY ELSE REMOVE IT
								if (e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: [
												...listingDetails
													.nearbyLocations.value,
												e.target.value,
											],
										},
									});
								}
								if (!e.target.checked) {
									setListingDetails({
										...listingDetails,
										nearbyLocations: {
											...listingDetails.nearbyLocations,
											value: listingDetails.nearbyLocations.value.filter(
												(location) =>
													location !== e.target.value
											),
										},
									});
								}
							}}
						/>
					</div>
				</div>

				{/*  Facade  */}
				<div className={`${classes.Facade} rounded bg-white`}>
					<h3>{locale === "en" ? "Facade" : "واجهة"}</h3>
					<div className={"flex justify-start gap-2 flex-wrap"}>
						<RadioComponent
							locale={locale}
							name={"facade"}
							value={"North"}
							textEn={"North"}
							textAr={"شمال"}
							checked={listingDetails.facade.value === "North"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									facade: {
										...listingDetails.facade,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"facade"}
							value={"South"}
							textEn={"South"}
							textAr={"جنوب"}
							checked={listingDetails.facade.value === "South"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									facade: {
										...listingDetails.facade,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"facade"}
							value={"East"}
							textEn={"East"}
							textAr={"شرق"}
							checked={listingDetails.facade.value === "East"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									facade: {
										...listingDetails.facade,
										value: e.target.value,
									},
								});
							}}
						/>
						<RadioComponent
							locale={locale}
							name={"facade"}
							value={"West"}
							textEn={"West"}
							textAr={"غرب"}
							checked={listingDetails.facade.value === "West"}
							onChange={(e) => {
								setListingDetails({
									...listingDetails,
									facade: {
										...listingDetails.facade,
										value: e.target.value,
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
