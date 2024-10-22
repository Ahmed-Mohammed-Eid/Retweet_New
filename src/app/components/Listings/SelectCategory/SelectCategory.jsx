"use client";
import classes from "./SelectCategory.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function SelectCategory({ locale }) {
	// INITIALIZE THE ROUTER
	const router = useRouter();

	// STATES
	const [categories, setCategories] = useState([]);
	const [filteredCategories, setFilteredCategories] = useState([]);

	// GET THE CATEGORIES FROM THE API
	useEffect(() => {
		axios
			.get(`${process.env.BASE_URL}/home/categories`)
			.then((response) => {
				const categories = response.data.categories;
				// SET THE CATEGORIES
				setCategories(categories);
				setFilteredCategories(categories);
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
								return setFilteredCategories(categories);

							// FILTER THE CATEGORIES
							const filteredCategories = categories.filter(
								(category) => {
									return (
										category.categoryName
											.toLowerCase()
											.includes(search.toLowerCase()) ||
										category.categoryNameEn
											.toLowerCase()
											.includes(search.toLowerCase())
									);
								}
							);
							// SET THE CATEGORIES
							setFilteredCategories(filteredCategories);
						}}
					/>
				</div>
				{filteredCategories.map((category) => {
					return (
						<CategoryItem
							key={category._id}
							image={category.categoryImage}
							category={
								locale === "en"
									? category.categoryNameEn
									: category.categoryName
							}
							icon={"/assets/listings/RightArrow.svg"}
							clicked={() => {
								router.push(
									`/${locale}/listings/select-subcategory?category=${category._id}`
								);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
