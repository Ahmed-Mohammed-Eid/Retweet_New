"use client";
import classes from "./SelectImages.module.scss";
import UploadMedia from "../uploadMedia/uploadMedia";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactUsCard from "../ContactUsCard/ContactUsCard";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "../../LayoutAndHomeComponents/Spinner/Spinner";

export default function SelectImages({ locale }) {
	// ROUTER
	const router = useRouter();
	const searchParams = useSearchParams();

	// STATES
	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState([]);
	const [searchParamsValues, setSearchParamsValues] = useState({});

	const callUsNowData = {
		iconSrc: "/assets/listings/PhoneCall.svg",
		title: "Call us now",
		description:
			"we are available online from 9:00 AM to 5:00 PM Talk with use now",
		phoneNumber: "+9-202-555-0126",
		buttonText: "Call now",
		iconBgColor: "#EAF6FE",
		buttonBg: "#00ACEE",
	};

	const chatWithUsData = {
		iconSrc: "/assets/listings/ChatCircleDots.svg",
		title: "Chat with us",
		description:
			"we are available online from 9:00 AM to 5:00 PM Talk with use now",
		phoneNumber: "Support@Retweet.com",
		buttonText: "Contact Us",
		iconBgColor: "#EAF7E9",
		buttonBg: "#F5A92F",
	};

	// EFFECT TO GET THE SEARCH PARAMS VALUES
	useEffect(() => {
		// GET THE SEARCH PARAMS
		const category = searchParams.get("category");
		const subCategory = searchParams.get("subCategory");
		const formType = searchParams.get("formType");
		const item = searchParams.get("item");
		const flag = searchParams.get("flag");
		const imagesId = searchParams.get("imagesId");
		const listingId = searchParams.get("listingId");

		// SET THE SEARCH PARAMS VALUES
		setSearchParamsValues({
			category,
			subCategory,
			formType,
			item,
			flag,
			imagesId,
			listingId,
		});
	}, [searchParams]);

	// UPLOAD MEDIA HANDLER
	function uploadMediaHandler() {
		// VALIDATE THE FILES AT LEAST 3 FILES
		if (files.length < 3 && searchParamsValues.flag !== "edit") {
			return toast.error(
				locale === "en"
					? "Please add at least 3 pictures"
					: "يرجى إضافة 3 صور على الأقل"
			);
		}

		if (files.length < 1 && searchParamsValues.flag === "edit") {
			// REDIRECT TO THE NEXT PAGE
			router.push(
				`/${locale}/listings/select-specs?imagesId=${searchParamsValues.imagesId}&category=${searchParamsValues.category}&subCategory=${searchParamsValues.subCategory}&formType=${searchParamsValues.formType}&item=${searchParamsValues.item}&listingId=${searchParamsValues.listingId}&flag=edit`
			);
			return;
		}

		// GET THE TOKEN
		const token = localStorage.getItem("retweet-token");

		// CREATE FORM DATA
		const formData = new FormData();

		// LOOP THROUGH THE FILES
		for (let i = 0; i < files.length; i++) {
			// VALIDATE THE FILE
			if (!files[i]) {
				continue;
			}

			// APPEND THE FILES
			formData.append("files", files[i]?.file);
		}

		formData.append("urls", JSON.stringify([]));

		// SHOW THE SPINNER
		setLoading(true);

		// UPLOAD THE FILES
		axios
			.post(`${process.env.BASE_URL}/upload/listing/images`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				// HIDE THE SPINNER
				setLoading(false);

				const imagesId = res.data?.imagesId;
				if (!imagesId) {
					return toast.error(
						locale === "en" ? "Something went wrong" : "حدث خطأ ما"
					);
				}

				// REDIRECT TO THE NEXT PAGE IF THE FLAG IS EDIT
				if (searchParamsValues.flag === "edit") {
					// REDIRECT TO THE NEXT PAGE
					router.push(
						`/${locale}/listings/select-specs?imagesId=${imagesId}&category=${searchParamsValues.category}&subCategory=${searchParamsValues.subCategory}&formType=${searchParamsValues.formType}&item=${searchParamsValues.item}&listingId=${searchParamsValues.listingId}&flag=edit`
					);
					return;
				}

				// REDIRECT TO THE NEXT PAGE
				router.push(
					`/${locale}/listings/select-specs?imagesId=${imagesId}&category=${searchParamsValues.category}&subCategory=${searchParamsValues.subCategory}&formType=${searchParamsValues.formType}&item=${searchParamsValues.item}`
				);
			})
			.catch((err) => {
				// HIDE THE SPINNER
				setLoading(false);

				console.log(err);
				toast.error(
					locale === "en" ? "Something went wrong" : "حدث خطأ ما"
				);
			});
	}

	return (
		<div className={`${classes.ContentContainer}`}>
			<h1 className={`${classes.Title}`}>
				{locale === "en"
					? "Add pictures to your listing"
					: "هل تريد إضافة صور لإعلانك؟"}
			</h1>

			<div className={`${classes.Instructions}`}>
				<div className={`${classes.Instructions_Image}`}>
					<Image
						src={"/assets/listings/instructions.svg"}
						alt={"/"}
						width={40}
						height={40}
					/>
				</div>
				<div className={`${classes.Instructions_Text}`}>
					<ul>
						<li>
							{locale === "en"
								? "You can add up to 8 pictures."
								: "يمكنك إضافة حتى 8 صور."}
						</li>
						<li>
							{locale === "en"
								? "Pictures increase the views of your listing"
								: "الصور تزيد من مشاهدات إعلانك"}
						</li>
						<li>
							{locale === "en"
								? "Adding clear pictures can get you noticed more"
								: "إضافة صور واضحة يمكن أن تجعلك تلاحظ أكثر"}
						</li>
						<li>
							{locale === "en"
								? "Adding at least 5 pictures improves the chances for a quick sale"
								: "إضافة 8 صور على الأقل تزيد من فرص البيع السريع"}
						</li>
					</ul>
				</div>
			</div>

			<div className={`${classes.FilesContainer}`}>
				<UploadMedia
					label={"Cover Picture"}
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[0] = {
							file,
							type: "cover",
							order: 0,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[1] = {
							file,
							type: "image",
							order: 1,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[2] = {
							file,
							type: "image",
							order: 2,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[3] = {
							file,
							type: "image",
							order: 3,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[4] = {
							file,
							type: "image",
							order: 4,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[5] = {
							file,
							type: "image",
							order: 5,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[6] = {
							file,
							type: "image",
							order: 6,
						};

						setFiles(filesCopy);
					}}
				/>
				<UploadMedia
					onFileChange={(file) => {
						// FILES COPY
						const filesCopy = [...files];
						filesCopy[7] = {
							file,
							type: "image",
							order: 7,
						};

						setFiles(filesCopy);
					}}
				/>
			</div>

			<button
				className={`${classes.Button}`}
				disabled={loading}
				onClick={() => {
					uploadMediaHandler();
				}}
			>
				{loading ? <Spinner /> : null}
				{loading ? "Loading..." : locale === "en" ? "Next" : "التالي"}
				<span>→</span>
			</button>

			<div className={`${classes.ContactUs} mt-8`}>
				<button className={"uppercase"}>
					{locale === "en" ? "Contact Us" : "تواصل معنا"}
				</button>

				<h2 className={"mb-8"}>
					<span>
						{locale === "en"
							? "Do you need help?"
							: "هل تحتاج إلى مساعدة؟"}
					</span>
					<span>
						{locale === "en"
							? "We are here to help you"
							: "نحن هنا لمساعدتك"}
					</span>
				</h2>

				<div className={`${classes.ContactUs_Cards}`}>
					<ContactUsCard locale={locale} callUsNowData={callUsNowData} />
					<ContactUsCard locale={locale} callUsNowData={chatWithUsData} />
				</div>
			</div>
		</div>
	);
}
