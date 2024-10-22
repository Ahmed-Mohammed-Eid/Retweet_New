"use client";
import classes from "./SelectSubcategoryItem.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function SelectSubcategoryItem({ locale }) {
	// INITIALIZE THE ROUTER
	const router = useRouter();
	const searchParams = useSearchParams();

	// STATES
	const [categoryIdFromUrl, setCategoryIdFromUrl] = useState("");
	const [filteredCategories, setFilteredCategories] = useState([]);
	const [items, setItems] = useState({
		items: [],
		itemsEn: [],
	});
	const [subCategoryId, setSubCategoryId] = useState("");
	const [formType, setFormType] = useState("");

	// GET THE CATEGORIES FROM THE API
	useEffect(() => {
		// TOKEN
		const token = localStorage.getItem("retweet-token");

		// GET THE CATEGORY ID
		const categoryId = searchParams.get("category");
		const subCategoryId = searchParams.get("subCategory");
		const formType = searchParams.get("formType");

		if (!subCategoryId && formType) {
			router.push(
				`/${locale}/listings/select-images?category=${categoryId}&subCategory=${subCategoryId}&formType=${formType}&item=`
			);
		}

		// SET THE SUBCATEGORY ID AND FORM TYPE
		setSubCategoryId(subCategoryId);
		setFormType(formType);

		// SET THE CATEGORY
		setCategoryIdFromUrl(categoryId);

		axios
			.get(`${process.env.BASE_URL}/user/subcategories`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					categoryId: categoryId,
				},
			})
			.then((response) => {
				const categories = response.data.subCategories;
				const formType = response.data.formType;

				// GET THE CATEGORY TO GET THE SELECTED CATEGORY BASED ON CATEGORY._ID === SUBCATEGORYID
				const selectedCategory = categories.find(
					(category) => category._id === subCategoryId
				);

				// SET THE ITEMS
				setItems({
					items: selectedCategory.items,
					itemsEn: selectedCategory.itemsEn,
				});

				// IF THERE ARE NO ITEMS THEN REDIRECT TO THE SELECT IMAGES PAGE
				if (selectedCategory.items.length === 0) {
					router.push(
						`/${locale}/listings/select-images?category=${categoryId}&subCategory=${subCategoryId}&formType=${formType}&item=`
					);
				}

				// SET THE FILTERED CATEGORIES BASED ON THE LANGUAGE
				setFilteredCategories(
					locale === "en"
						? selectedCategory.itemsEn
						: selectedCategory.items
				);

				// SET THE FORM TYPE
				if (formType) {
					setFormType(formType || "");
				}
			})
			.catch((error) => {
				toast.error(
					locale === "en"
						? "An error occurred"
						: "حذث خطأ ما أثناء تحميل البيانات"
				);
			});
	}, [locale]);

	return (
		<div className={`${classes.ContentContainer}`}>
			<h1 className={`${classes.Title}`}>
				{locale === "en"
					? "What do you want to Sell or Advertise?"
					: "ماذا تريد أن تبيع أو تعلن عنه؟"}
			</h1>

			<div className={`${classes.Content}`}>
				<div className={`${classes.CategoriesSearch}`}>
					<Image
						src={"/assets/listings/search.svg"}
						alt={"Search Icon"}
						width={20}
						height={20}
					/>
					<input
						type="text"
						placeholder={"Search for a category"}
						className={`${classes.SearchInput}`}
						onChange={(event) => {
							// SEARCH FOR THE CATEGORY
							const search = event.target.value;

							if (search.length === 0)
								return setFilteredCategories(
									locale === "en" ? items.itemsEn : items.items
								);

							const filteredCategories =
								locale === "en"
									? items.itemsEn.filter((category) =>
											category
												.toLowerCase()
												.includes(search.toLowerCase())
									  )
									: items.items.filter((category) =>
											category
												.toLowerCase()
												.includes(search.toLowerCase())
									  );
							// SET THE CATEGORIES
							setFilteredCategories(filteredCategories);
						}}
					/>
				</div>
				{filteredCategories.map((category, index) => {
					return (
						<CategoryItem
							key={`${
								locale === "en"
									? items.itemsEn[index] + "-" + index
									: items.items[index] + "-" + index
							}`}
							hasNoImage={true}
							category={
								locale === "en"
									? items.itemsEn[index]
									: items.items[index]
							}
							icon={"/assets/listings/RightArrow.svg"}
							clicked={() => {
								router.push(
									`/${locale}/listings/select-images?category=${categoryIdFromUrl}&subCategory=${subCategoryId}&formType=${formType}&item=${
										locale === "en"
											? items.itemsEn[index]
											: items.items[index]
									}`
								);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
