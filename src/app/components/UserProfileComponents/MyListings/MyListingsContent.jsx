"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";

// IMPORTS
import EditCard from "../../../components/Listings/EditCard/EditCard";
import Spinner from "../../../components/LayoutAndHomeComponents/Spinner/Spinner";

// Helpers
import axios from "axios";
import toast from "react-hot-toast";

// REDUX
import { useSelector } from "react-redux";

export default function MyListingContent({ locale }) {
	// REDUX
	const isAuthenticated = useSelector(
		(state) => state.mainLayout.isAuthenticated
	);

	// STATES
	const [loading, setLoading] = useState(false);
	const [myListings, setMyListings] = useState([]);
	const [deleteDialog, setDeleteDialog] = useState({
		visible: false,
		id: null,
	});

	// Effect to fetch user's myListings
	useEffect(() => {
		// Fetch user's myListings
		fetchMyListings();
		// setMyListings(response.data)
	}, []);

	// GET request to fetch user's myListings from the server
	async function fetchMyListings() {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		await axios
			.get(`${process.env.BASE_URL}/get/user/listings`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setMyListings(response.data?.listings || []);
			})
			.catch((error) => {
				console.log(error);
				toast.error(
					locale === "en"
						? "An error occurred while fetching your myListings"
						: "حدث خطأ أثناء جلب المفضلة الخاصة بك"
				);
			});
	}

	// DELETE request to delete a listing
	async function deleteListing() {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		// SET THE LOADING TO TRUE
		setLoading(true);

		// DELETE THE LISTING
		await axios
			.delete(
				`${process.env.BASE_URL}/delete/user/listing?listingId=${deleteDialog.id}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((_) => {
				// SET THE LOADING TO FALSE
				setLoading(false);

				setMyListings(
					myListings.filter(
						(listing) => listing._id !== deleteDialog.id
					)
				);
				setDeleteDialog({
					visible: false,
					id: null,
				});
				toast.success(
					locale === "en"
						? "Listing deleted successfully"
						: "تم حذف الإعلان بنجاح"
				);
			})
			.catch((error) => {
				// SET THE LOADING TO FALSE
				setLoading(false);

				console.log(error);
				toast.error(
					locale === "en"
						? "An error occurred while deleting the listing"
						: "حدث خطأ أثناء حذف الإعلان"
				);
			});
	}

	return (
		<div
			className={"w-full min-h-screen bg-white flex flex-col gap-2 py-6"}
		>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/*  CONTENT  */}
				{myListings.length > 0 &&
					myListings.map((product, index) => {
						return (
							<EditCard
								key={index}
								product={product}
								authenticated={isAuthenticated}
								locale={locale}
								onDelete={() => {
									setDeleteDialog({
										visible: true,
										id: product._id,
									});
								}}
							/>
						);
					})}

				{/*  NO CONTENT  */}
				{myListings.length === 0 && (
					<div className="w-full flex flex-col items-center justify-center sm:col-span-1 md:col-span-2 lg:col-span-3">
						<h1 className="text-2xl font-bold text-gray-500 text-center">
							{locale === "en"
								? "No Listings Found"
								: "لم يتم العثور على إعلانات"}
						</h1>
					</div>
				)}

				{/*  DELETE DIALOG  */}
				<Dialog
					header={locale === "en" ? "Delete Listing" : "حذف الإعلان"}
					visible={deleteDialog.visible}
					style={{
						width: "90%",
						maxWidth: "400px",
						borderRadius: "10px",
						direction: locale === "en" ? "ltr" : "rtl",
					}}
					modal
					onHide={() => {
						setDeleteDialog({
							visible: false,
							id: null,
						});
					}}
					position={"center"}
					draggable={false}
				>
					<div className="p-6">
						<h1 className="text-lg font-bold text-gray-500 md:text-2xl">
							{locale === "en"
								? "Are you sure you want to delete this listing?"
								: "هل أنت متأكد أنك تريد حذف هذا الإعلان؟"}
						</h1>
						<div className="flex justify-end gap-2 mt-4">
							<button
								onClick={deleteListing}
								className="px-4 py-2 bg-blue-500 transition-transform text-white rounded hover:bg-blue-600 w-[50%] active:scale-95 flex items-center gap-2"
							>
								{locale === "en" ? "Yes" : "نعم"}
								{loading && <Spinner />}
							</button>
							<button
								onClick={() => {
									setDeleteDialog({
										visible: false,
										id: null,
									});
								}}
								className="px-4 py-2 bg-red-500 transition-transform text-white rounded hover:bg-red-600 w-[50%] active:scale-95"
							>
								{locale === "en" ? "No" : "لا"}
							</button>
						</div>
					</div>
				</Dialog>
			</div>
		</div>
	);
}
