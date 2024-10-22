"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { formatePrice } from "../../../../../helpers/formatePrice";
import classes from "./ListingCard.module.scss";
import Link from "next/link";
import axios from "axios";

function ListingCard({ product, locale, authenticated, removeOnly }) {
	// STATES
	const [isFavourite, setIsFavourite] = useState(false);

	// HANDLER FUNCTION TO TOGGLE FAVOURITE
	const toggleFavouriteHandler = () => {
		// GET THE TOKEN FROM LOCAL STORAGE
		const token = localStorage.getItem("retweet-token");

		// URLS ADD AND REMOVE FAVOURITE
		const addUrl = `${process.env.BASE_URL}/add/favorite`;
		const removeUrl = `${process.env.BASE_URL}/remove/favorite`;

		// CHECK IF THE PRODUCT IS FAVOURITE

		// SEND THE REQUEST TO ADD OR REMOVE FAVOURITE
		if (!isFavourite && !removeOnly) {
			axios
				.post(
					addUrl,
					{
						listingId: product?._id,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((_) => {
					setIsFavourite(true);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			axios
				.delete(removeUrl, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
					params: {
						listingId: product?._id,
					},
				})
				.then((response) => {
					setIsFavourite(false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	// EFFECT TO CHECK IF THE PRODUCT IS FAVOURITE
	useEffect(() => {
		setIsFavourite(product?.inFavorite);

		if (removeOnly) {
			setIsFavourite(true);
		}
	}, []);

	return (
		<article className={classes.Card}>
			<div className="flex gap-5 max-md:flex-col max-md:gap-0">
				<div className={classes.Image}>
					<Link locale={locale} href={`/${locale}/listings/${product?._id}`} passHref>
						<Image
							src={
								product?.listingImages[0] ||
								"/assets/listings/no-image.jpeg"
							}
							alt={
								product?.listingDescription ||
								product?.listingTitle
							}
							width={207}
							height={201}
							className={classes.ImageLink}
						/>
					</Link>
				</div>
				<div className={classes.Content}>
					<div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
						<div className={classes.Title}>
							<h2 className="flex-auto max-md:max-w-full uppercase mt-2">
								<Link
									locale={locale}
									href={`/${locale}/listings/${product?._id}`}
									passHref
									className={classes.TitleLink}
								>
									{product?.listingTitle}
								</Link>
							</h2>
							{authenticated && (
								<svg
									width="30"
									height="28"
									viewBox="0 0 30 28"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="cursor-pointer button--effect"
									onClick={() => {
										toggleFavouriteHandler();
									}}
								>
									<g>
										<path
											d="M15 18.25C15 18.25 5.625 13 5.625 6.62501C5.625 5.49803 6.01546 4.40585 6.72996 3.53431C7.44445 2.66277 8.43884 2.0657 9.54393 1.84468C10.649 1.62366 11.7966 1.79235 12.7913 2.32204C13.7861 2.85174 14.5665 3.70972 15 4.75001C15.4335 3.70972 16.2139 2.85174 17.2087 2.32204C18.2034 1.79235 19.351 1.62366 20.4561 1.84468C21.5612 2.0657 22.5555 2.66277 23.27 3.53431C23.9845 4.40585 24.375 5.49803 24.375 6.62501C24.375 13 15 18.25 15 18.25Z"
											stroke="#FF4444"
											fill={
												isFavourite ? "#FF4444" : "none"
											}
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											shapeRendering="crispEdges"
										/>
									</g>
									<defs>
										<filter
											id="filter0_d_87_920"
											x="0.625"
											y="0.75"
											width="28.75"
											height="26.5"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood
												floodOpacity="0"
												result="BackgroundImageFix"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="4" />
											<feGaussianBlur stdDeviation="2" />
											<feComposite
												in2="hardAlpha"
												operator="out"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_87_920"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_87_920"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>
							)}
						</div>
						<p className={`${classes.Description} mt-2`}>
							{product?.listingDescription}
						</p>
						<p className={`${classes.Location} mt-2`}>
							{(product?.neighbourhood
								? product?.neighbourhood + " - "
								: "") + product?.listingCity}
						</p>
						<div className={classes.Footer}>
							<div className={classes.Buttons}>
								<ContactButton phone={product?.contactPhone} />
								<ChatButton id={product?._id} />
							</div>
							<div className={classes.Price}>
								{product?.listingCurrency}{" "}
								{formatePrice(product?.listingPrice || 0)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

function ContactButton({ phone }) {
	return (
		<button
			href={`https://wa.me/${phone}`}
			target={"_blank"}
			className={`${classes.Button__Contact}`}
		>
			<Image
				src="/assets/listings/logos_whatsapp-icon.svg"
				alt="Phone icon"
				width={24}
				height={24}
				className="shrink-0 w-6 aspect-square"
			/>
			<span>{phone}</span>
		</button>
	);
}

function ChatButton({ id }) {
	return (
		<button className={`${classes.Button__Chat}`}>
			<Image
				src="/assets/listings/fluent_chat-12-regular.svg"
				alt="Chat icon"
				width={24}
				height={24}
				className="shrink-0 w-6 aspect-square"
			/>
			<span className="my-auto">Chat</span>
		</button>
	);
}

export default ListingCard;
