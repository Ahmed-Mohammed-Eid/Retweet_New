"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Spinner from "../../LayoutAndHomeComponents/Spinner/Spinner";

// IMPORTS ###
import RealEstateForm from "../Forms/RealEstateForm/RealEstateForm";
// CARS
import CarsForm from "../Forms/Cars/CarsForSale/Cars";
import SpareParts from "../Forms/Cars/SpareParts/SpareParts";
import Accessories from "../Forms/Cars/Accessories/Accessories";
import WheelRims from "../Forms/Cars/WheelRims/WheelRims";
import TrucksTrailers from "../Forms/Cars/TrucksTrailers/TrucksTrailers";

// MOBILE
import MobileForm from "../Forms/Mobile/MobilesAndTablets/Mobile";
import SmartWatches from "../Forms/Mobile/SmartWatches/SmartWatches";
import PhoneNumbers from "../Forms/Mobile/PhoneNumbers/PhoneNumbers";
import Headphones from "../Forms/Mobile/Headphones/Headphones";
import CoversAndProtectors from "../Forms/Mobile/CoversAndProtectors/CoversAndProtectors";
import ChargersAndCables from "../Forms/Mobile/ChargersAndCables/ChargersAndCables";
import SparePartsMobile from "../Forms/Mobile/SpareParts/SpareParts";

// VIDEO GAMES
import Consoles from "../Forms/VideoGames/Consoles/Consoles";
import VideoGames from "../Forms/VideoGames/VideoGames/VideoGames";
import VideoGamesAccessories from "../Forms/VideoGames/Accessories/Accessories";
import GiftCards from "../Forms/VideoGames/GiftCards/GiftCards";
import AccountsAndCharacters from "../Forms/VideoGames/AccountsAndCharacters/AccountsAndCharacters";
import Figures from "../Forms/VideoGames/Figures/Figures ";

// HOME AND GARDEN
import LivingRoomFurniture from "../Forms/HomeAndGarden/LivingRoomFurniture/LivingRoomFurniture";
import BedroomFurniture from "../Forms/HomeAndGarden/BedroomFurniture/BedroomFurniture";
import OfficeFurniture from "../Forms/HomeAndGarden/OfficeFurniture/OfficeFurniture";
import OutdoorFurniture from "../Forms/HomeAndGarden/OutdoorFurniture/OutdoorFurniture";
import DecorationAccessories from "../Forms/HomeAndGarden/DecorationAccessories/DecorationAccessories";
import GardenPlants from "../Forms/HomeAndGarden/GardenPlants/GardenPlants";
import HouseKitchens from "../Forms/HomeAndGarden/HouseKitchens/HouseKitchens";
import HouseKitchenTools from "../Forms/HomeAndGarden/HouseKitchenTools/HouseKitchenTools";
import Bathrooms from "../Forms/HomeAndGarden/Bathrooms/Bathrooms";
import TilesFlooring from "../Forms/HomeAndGarden/TilesFlooring/TilesFlooring";
import HouseLighting from "../Forms/HomeAndGarden/HouseLighting/HouseLighting";
import DoorsAndWindows from "../Forms/HomeAndGarden/DoorsAndWindows/DoorsAndWindows";
import HouseCarpets from "../Forms/HomeAndGarden/HouseCarpets/HouseCarpets";
import Curtains from "../Forms/HomeAndGarden/Curtains/Curtains";
import DiningRoomAndFurniture from "../Forms/HomeAndGarden/DiningRoomAndFurniture/DiningRoomAndFurniture";

// GENERAL AND NO OPTIONS
import General from "../Forms/General/General";
import NoOptions from "../Forms/NoOPtions/NoOptions";

// JOBS
import JobsSeekers from "../Forms/Jobs/JobsSeekers/Jobs";
import Vacancies from "../Forms/Jobs/Vacancies/vacancies";

// BIKES
import Bikes from "../Forms/Motorcycles/Bikes/Bikes";
import MotrocycleAccessories from "../Forms/Motorcycles/Accessories/Accessories";

// LAPTOPS
import Laptops from "../Forms/ComputerAndLaptops/Laptops/Laptops";
import Desktop from "../Forms/ComputerAndLaptops/Desktop/Desktop";
import Storage from "../Forms/ComputerAndLaptops/Storage/Storage";
import Printers from "../Forms/ComputerAndLaptops/Printers/Printers";

// ELECTRONICS
import TvAndMonitors from "../Forms/Electronics/TvAndMonitors/TvAndMonitors";
import Fridges from "../Forms/Electronics/Fridges/Fridges";
import DishWashers from "../Forms/Electronics/DishWashers/DishWashers";
import Microwave from "../Forms/Electronics/Microwave/Microwave";
import Washers from "../Forms/Electronics/Washers/Washers";
import Furneces from "../Forms/Electronics/Furneces/Furneces";
import Cameras from "../Forms/Electronics/Cameras/Cameras";
import AirConditions from "../Forms/Electronics/AirConditions/AirConditions";
import Receiver from "../Forms/Electronics/Receiver/Receiver";

// WOMEN'S FASHION
import WomensWear from "../Forms/WomensFashion/Wear/Wear";
import Shoes from "../Forms/WomensFashion/Shoes/Shoes";
import Bags from "../Forms/WomensFashion/Bags/Bags";

// MEN'S FASHION
import MensWear from "../Forms/MensFashion/Wear/Wear";
import MenShoes from "../Forms/MensFashion/Shoes/Shoes";
import MenWatches from "../Forms/MensFashion/Watches/Watches";

// BABY AND KIDS
import BabyAndDidsWear from "../Forms/BabyAndKids/Wear/Wear";
import KidsBedroomFurniture from "../Forms/BabyAndKids/Bedrooms/Bedrooms";
import KidsAccessories from "../Forms/BabyAndKids/Accessories/Accessories";

// STYLES
// import classes from "./SelectSpecs.module.scss";

// TOAST
import toast from "react-hot-toast";

// AXIOS
import axios from "axios";

export default function SelectSpecs({ locale }) {
	// STATIC EXISTS FORM TYPES
	const formTypes = [
		"real-estate",
		"mobiles-tablets",
		"carsSale",
		"carsSpareParts",
		"carsAccessories",
		"carsWheelRims",
		"trucks-trailers",
		"smartWatches",
		"phoneNumbers",
		"headphones",
		"coversAndProtectors",
		"chargersAndCables",
		"mobileSpareParts",
		"mobileAccessories",
		"videoGames",
		"consoles",
		"videoGamesAccessories",
		"giftCards",
		"accountsAndCharacters",
		"figures",
		"livingRoomFurniture",
		"bedroomFurniture",
		"officeFurniture",
		"outdoorFurniture",
		"decorationAccessories",
		"gardenPlants",
		"houseKitchens",
		"houseKitchenTools",
		"bathrooms",
		"tilesFlooring",
		"houseLighting",
		"doorsAndWindows",
		"houseCarpets",
		"curtains",
		"diningRoomAndFurniture",
		"jobsSeekers",
		"vacancies",
		"general",
		"noOptions",
		"bikes",
		"motrocycleAccessories",
		"laptops",
		"desktop",
		"storage",
		"printers",
		"tvAndMonitors",
		"fridges",
		"dishWashers",
		"microwave",
		"washers",
		"furneces",
		"cameras",
		"airConditions",
		"electronicRecievers",
		"women'sWear",
		"women'sShoes",
		"women'sBags",
		"men'sWear",
		"men'sShoes",
		"men'sWatches",
		"babyAndKidsWear",
		"kidsBedrooms",
		"kidsAccessories",
	];

	// ROUTER
	const searchParams = useSearchParams();

	// STATES
	const [loading, setLoading] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchParamsValue, setSearchParamsValue] = useState({});

	// EFFECT TO SET THE SELECTED CATEGORY
	useEffect(() => {
		// GET THE imagesId AND category AND THE subCategory AND THE formType FROM THE searchParams
		const imagesId = searchParams.get("imagesId");
		const category = searchParams.get("category");
		const subCategory = searchParams.get("subCategory");
		const item = searchParams.get("item");
		const formType = searchParams.get("formType");
		const listingId = searchParams.get("listingId");
		const flag = searchParams.get("flag");

		// SET THE SELECTED CATEGORY
		setSearchParamsValue({
			imagesId,
			category,
			subCategory,
			item,
			listingId,
			flag,
		});

		// SET THE SELECTED CATEGORY
		if (formType) {
			setSelectedCategory(formType);
		}
	}, []);

	// HANDLER TO SUBMIT THE FORM
	const handleSubmit = (
		listingTitle,
		listingItem,
		listingDescription,
		categoryId,
		subCategoryId,
		listingSpecs,
		listingCity,
		listingNeighborhood,
		listingPrice,
		currency,
		contactPhone,
		imagesId
	) => {
		// GET THE TOKEN
		const token = localStorage.getItem("retweet-token");

		// IF THE FORM IS FOR EDIT
		if (searchParamsValue.flag === "edit") {
			return handleUpdate(
				listingTitle,
				listingItem,
				listingDescription,
				categoryId,
				subCategoryId,
				listingSpecs,
				listingCity,
				listingNeighborhood,
				listingPrice,
				currency,
				contactPhone,
				imagesId
			);
		}

		// VALIDATE THE FORM
		if (
			!listingTitle ||
			!listingDescription ||
			!categoryId ||
			// !subCategoryId ||
			!listingSpecs ||
			!listingCity ||
			!listingNeighborhood ||
			!listingPrice ||
			!currency ||
			!contactPhone ||
			!imagesId
		) {
			return toast.error(
				locale === "en"
					? "Please Fill All The Fields"
					: "الرجاء ملء جميع الحقول"
			);
		}

		// SHOW THE SPINNER
		setLoading(true);

		// SEND THE FORM
		axios
			.post(
				`${process.env.BASE_URL}/create/listing`,
				{
					listingTitle,
					listingItem,
					listingDescription,
					categoryId,
					subCategoryId,
					listingSpecs: JSON.stringify(listingSpecs),
					listingCity,
					neighbourhood: listingNeighborhood,
					listingPrice,
					listingCurrency: currency,
					contactPhone,
					imagesId,
					formType: selectedCategory,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				// HIDE THE SPINNER
				setLoading(false);

				if (response.data.success) {
					toast.success(
						locale === "en"
							? "Your Listing Has Been Created"
							: "تم إنشاء القائمة الخاصة بك"
					);
				} else {
					toast.error(
						locale === "en" ? "An Error Occurred" : "حدث خطأ"
					);
				}
			})
			.catch((_) => {
				// HIDE THE SPINNER
				setLoading(false);

				toast.error(locale === "en" ? "An Error Occurred" : "حدث خطأ");
			});
	};

	// UPDATE HANDLER
	const handleUpdate = (
		listingTitle,
		listingItem,
		listingDescription,
		categoryId,
		subCategoryId,
		listingSpecs,
		listingCity,
		listingNeighborhood,
		listingPrice,
		currency,
		contactPhone,
		imagesId
	) => {
		// GET THE TOKEN
		const token = localStorage.getItem("retweet-token");

		// VALIDATE THE FORM
		if (
			!listingTitle ||
			!listingDescription ||
			!categoryId ||
			// !subCategoryId ||
			!listingSpecs ||
			!listingCity ||
			!listingNeighborhood ||
			!listingPrice ||
			!currency ||
			!contactPhone ||
			!imagesId
		) {
			return toast.error(
				locale === "en"
					? "Please Fill All The Fields"
					: "الرجاء ملء جميع الحقول"
			);
		}

		// SHOW THE SPINNER
		setLoading(true);

		// SEND THE FORM
		axios
			.put(
				`${process.env.BASE_URL}/edit/listing`,
				{
					listingTitle,
					listingItem,
					listingDescription,
					categoryId,
					subCategoryId:
						subCategoryId === "undefined" ? null : subCategoryId,
					listingSpecs: JSON.stringify(listingSpecs),
					listingCity,
					neighbourhood: listingNeighborhood,
					listingPrice,
					listingCurrency: currency,
					contactPhone,
					imagesId,
					listingId:
						searchParamsValue.listingId === "undefined"
							? null
							: searchParamsValue.listingId,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((response) => {
				// HIDE THE SPINNER
				setLoading(false);

				if (response.data.success) {
					toast.success(
						locale === "en"
							? "Your Listing Has Been Updated"
							: "تم تحديث القائمة الخاصة بك"
					);
				} else {
					toast.error(
						locale === "en" ? "An Error Occurred" : "حدث خطأ"
					);
				}
			})
			.catch((_) => {
				// HIDE THE SPINNER
				setLoading(false);
				toast.error(locale === "en" ? "An Error Occurred" : "حدث خطأ");
			});
	};

	return (
		<div className={"my-8"}>
			{/* REAL ESTATE */}
			{/* #SELL AND RENT */}
			{selectedCategory === "real-estate" && (
				<RealEstateForm
					loading={loading}
					locale={locale}
					categoryName={"Real Estate"}
					subCategoryName={"Apartments"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}
			{/* CARS */}
			{/* #SELL AND RENT */}
			{selectedCategory === "carsSale" && (
				<CarsForm
					loading={loading}
					locale={locale}
					categoryName={"Cars"}
					subCategoryName={"Cars"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* SPARE PARTS */}
			{selectedCategory === "carsSpareParts" && (
				<SpareParts
					loading={loading}
					locale={locale}
					categoryName={"Cars"}
					subCategoryName={"Spare Parts"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* ACCESSORIES */}
			{selectedCategory === "carsAccessories" && (
				<Accessories
					loading={loading}
					locale={locale}
					categoryName={"Cars"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* WHEEL RIMS */}
			{selectedCategory === "carsWheelRims" && (
				<WheelRims
					loading={loading}
					locale={locale}
					categoryName={"Cars"}
					subCategoryName={"Wheel Rims"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* TRUCKS && TRAILERS */}
			{selectedCategory === "trucks-trailers" && (
				<TrucksTrailers
					loading={loading}
					locale={locale}
					categoryName={"Cars"}
					subCategoryName={"Trucks & Trailers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* MOBILES */}
			{selectedCategory === "mobiles-tablets" && (
				<MobileForm
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"Mobile"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* SMART WATCHES */}
			{selectedCategory === "smartWatches" && (
				<SmartWatches
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"Smart Watches"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* PHONE NUMBERS */}
			{selectedCategory === "phoneNumbers" && (
				<PhoneNumbers
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"Phone Numbers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* HEADPHONES */}
			{selectedCategory === "headphones" && (
				<Headphones
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* COVERS AND PROTECTORS */}
			{selectedCategory === "coversAndProtectors" && (
				<CoversAndProtectors
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* CHARGERS AND CABLES */}
			{selectedCategory === "chargersAndCables" && (
				<ChargersAndCables
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* SPARE PARTS */}
			{(selectedCategory === "mobileSpareParts" ||
				selectedCategory === "mobileAccessories") && (
				<SparePartsMobile
					loading={loading}
					locale={locale}
					categoryName={"Mobile"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* VIDEO GAMES */}
			{/* #CONSOLES */}
			{selectedCategory === "consoles" && (
				<Consoles
					loading={loading}
					locale={locale}
					categoryName={"Video Games"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #VIDEO GAMES */}
			{selectedCategory === "videoGames" && (
				<VideoGames
					loading={loading}
					locale={locale}
					categoryName={"Video Games"}
					subCategoryName={"VideoGames"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #VIDEO GAMES ACCESSORIES */}
			{selectedCategory === "videoGamesAccessories" && (
				<VideoGamesAccessories
					loading={loading}
					locale={locale}
					categoryName={"Video Games"}
					subCategoryName={"Accessories"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #GIFT CARDS */}
			{selectedCategory === "giftCards" && (
				<GiftCards
					loading={loading}
					locale={locale}
					categoryName={"Video Games"}
					subCategoryName={"Gift Cards"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #ACCOUNTS AND CHARACTERS */}
			{selectedCategory === "accountsAndCharacters" && (
				<AccountsAndCharacters
					loading={loading}
					locale={locale}
					categoryName={"Video Games"}
					subCategoryName={"Accounts & Characters"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* FIGURES */}
			{selectedCategory === "figures" && (
				<Figures
					loading={loading}
					locale={locale}
					categoryName={"Video Games"}
					subCategoryName={"Figures"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* HOME AND GARDEN */}
			{/* #LIVING ROOM FURNITURE */}
			{selectedCategory === "livingRoomFurniture" && (
				<LivingRoomFurniture
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Living Room Furniture"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #BEDROOM FURNITURE */}
			{selectedCategory === "bedroomFurniture" && (
				<BedroomFurniture
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Bedroom Furniture"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #OFFICE FURNITURE */}
			{selectedCategory === "officeFurniture" && (
				<OfficeFurniture
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Office Furniture"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #OUTDOOR FURNITURE */}
			{selectedCategory === "outdoorFurniture" && (
				<OutdoorFurniture
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Outdoor Furniture"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #DECORATION ACCESSORIES */}
			{selectedCategory === "decorationAccessories" && (
				<DecorationAccessories
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Decoration Accessories"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #GARDEN PLANTS */}
			{selectedCategory === "gardenPlants" && (
				<GardenPlants
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Garden Plants"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #HOUSE KITCHENS */}
			{selectedCategory === "houseKitchens" && (
				<HouseKitchens
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"House Kitchens"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #HOUSE KITCHEN TOOLS */}
			{selectedCategory === "houseKitchenTools" && (
				<HouseKitchenTools
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"House Kitchen Tools"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #BATHROOMS */}
			{selectedCategory === "bathrooms" && (
				<Bathrooms
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Bathrooms"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #TILES FLOORING */}
			{selectedCategory === "tilesFlooring" && (
				<TilesFlooring
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Tiles Flooring"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #HOUSE LIGHTING */}
			{selectedCategory === "houseLighting" && (
				<HouseLighting
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"House Lighting"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #DOORS AND WINDOWS */}
			{selectedCategory === "doorsAndWindows" && (
				<DoorsAndWindows
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Doors & Windows"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #HOUSE CARPETS */}
			{selectedCategory === "houseCarpets" && (
				<HouseCarpets
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"House Carpets"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #CURTAINS */}
			{selectedCategory === "curtains" && (
				<Curtains
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Curtains"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* #DINING ROOM AND FURNITURE */}
			{selectedCategory === "diningRoomAndFurniture" && (
				<DiningRoomAndFurniture
					loading={loading}
					locale={locale}
					categoryName={"Home & Garden"}
					subCategoryName={"Dining Room & Furniture"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* JOBS */}
			{selectedCategory === "jobsSeekers" && (
				<JobsSeekers
					loading={loading}
					locale={locale}
					categoryName={"Jobs"}
					subCategoryName={"Jobs Seekers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "vacancies" && (
				<Vacancies
					loading={loading}
					locale={locale}
					categoryName={"Jobs"}
					subCategoryName={"Vacancies"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* MOTORCYCLES */}
			{selectedCategory === "bikes" && (
				<Bikes
					loading={loading}
					locale={locale}
					categoryName={"Motorcycles"}
					subCategoryName={"Bikes"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "motrocycleAccessories" && (
				<MotrocycleAccessories
					loading={loading}
					locale={locale}
					categoryName={"Motorcycles"}
					subCategoryName={"Accessories"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* LAPTOPS */}
			{selectedCategory === "laptops" && (
				<Laptops
					loading={loading}
					locale={locale}
					categoryName={"Computer & Laptops"}
					subCategoryName={"Laptops"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "desktop" && (
				<Desktop
					loading={loading}
					locale={locale}
					categoryName={"Computer & Laptops"}
					subCategoryName={"Desktops"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "storage" && (
				<Storage
					loading={loading}
					locale={locale}
					categoryName={"Computer & Laptops"}
					subCategoryName={"Storage Devices"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "printers" && (
				<Printers
					loading={loading}
					locale={locale}
					categoryName={"Computer & Laptops"}
					subCategoryName={"Printers & Scanners"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* ELECTRONICS */}
			{selectedCategory === "tvAndMonitors" && (
				<TvAndMonitors
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"TVs & Monitors"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "fridges" && (
				<Fridges
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Fridges & Freezers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "dishWashers" && (
				<DishWashers
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Dish Washers & Dryers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "microwave" && (
				<Microwave
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Microwave & Ovens"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "washers" && (
				<Washers
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Washers & Dryers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "furneces" && (
				<Furneces
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Furnaces & Heaters"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "cameras" && (
				<Cameras
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Cameras"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "airConditioners" && (
				<AirConditions
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Air Conditioners"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{selectedCategory === "electronicRecievers" && (
				<Receiver
					loading={loading}
					locale={locale}
					categoryName={"Electronics"}
					subCategoryName={"Electronic Receivers"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* WOMEN'S FASHION */}

			{/* SHOES */}
			{selectedCategory === "womenWear" && (
				<WomensWear
					loading={loading}
					locale={locale}
					categoryName={"Women's Fashion"}
					subCategoryName={"Wear"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* SHOES */}
			{selectedCategory === "womenShoes" && (
				<Shoes
					loading={loading}
					locale={locale}
					categoryName={"Women's Fashion"}
					subCategoryName={"Shoes"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* BAGS */}
			{selectedCategory === "womenBags" && (
				<Bags
					loading={loading}
					locale={locale}
					categoryName={"Women's Fashion"}
					subCategoryName={"Bags"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* MEN'S FASHION */}
			{/* WEAR */}
			{selectedCategory === "menWear" && (
				<MensWear
					loading={loading}
					locale={locale}
					categoryName={"Men's Fashion"}
					subCategoryName={"Wear"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* SHOES */}
			{selectedCategory === "menShoes" && (
				<MenShoes
					loading={loading}
					locale={locale}
					categoryName={"Men's Fashion"}
					subCategoryName={"Shoes"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* WATCHES */}
			{selectedCategory === "menWatches" && (
				<MenWatches
					loading={loading}
					locale={locale}
					categoryName={"Men's Fashion"}
					subCategoryName={"Watches"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* KIDS FASHION */}
			{/* WEAR */}
			{selectedCategory === "babyAndKidsWear" && (
				<BabyAndDidsWear
					loading={loading}
					locale={locale}
					categoryName={"Kids Fashion"}
					subCategoryName={"Wear"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* BEDROOMS */}
			{selectedCategory === "kidsBedrooms" && (
				<KidsBedroomFurniture
					loading={loading}
					locale={locale}
					categoryName={"Kids Fashion"}
					subCategoryName={"Bedrooms and Furniture"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* KIDS ACCESSORIES */}
			{selectedCategory === "kidsAccessories" && (
				<KidsAccessories
					loading={loading}
					locale={locale}
					categoryName={"Kids Fashion"}
					subCategoryName={"Accessories"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* GENERAL*/}
			{selectedCategory === "general" && (
				<General
					loading={loading}
					locale={locale}
					categoryName={"NoOptions"}
					subCategoryName={"NoOptions"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId
						);
					}}
				/>
			)}

			{/* ELSE AND NO OPTIONS */}
			{(!selectedCategory ||
				!formTypes.includes(selectedCategory) ||
				selectedCategory === "noOptions") && (
				<NoOptions
					loading={loading}
					locale={locale}
					categoryName={"NoOptions"}
					subCategoryName={"NoOptions"}
					submit={(values) => {
						handleSubmit(
							values.description.title,
							searchParamsValue.item,
							values.description.description,
							searchParamsValue.category,
							searchParamsValue.subCategory,
							values.listingDetails,
							values.location.city,
							values.location.neighborhood,
							values.price.price,
							values.price.currency,
							`${values.contact.code}${values.contact.phone}`,
							searchParamsValue.imagesId,
							searchParamsValue.id
						);
					}}
				/>
			)}
		</div>
	);
}
