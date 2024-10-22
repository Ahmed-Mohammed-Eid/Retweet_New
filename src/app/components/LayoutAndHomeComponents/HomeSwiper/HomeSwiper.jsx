"use client";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeSwiper() {
	const [ads, setAds] = useState([]);

	useEffect(() => {
		const fetchAds = async () => {
			try {
				const response = await axios.get(
					`${process.env.BASE_URL}/all/home/ads`
				);
				const adsData = response.data.homeAds.carousel;
				setAds(adsData);
			} catch (error) {
				console.error("Error fetching ads:", error);
			}
		};

		fetchAds();
	}, []);

	return (
		ads?.length > 0 && (
			<Swiper
				modules={[Navigation, Pagination, A11y, Autoplay]}
				spaceBetween={50}
				navigation
				pagination={{ clickable: true }}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
			>
				{ads?.map((ad, index) => {
					if (!ad?.url) return null;
					return (
						<SwiperSlide key={index}>
							<div
								style={{
									width: "100%",
									minHeight: "300px",
									maxHeight: "300px",
									overflow: "hidden",
									objectFit: "contain",
								}}
							>
								<Image
									src={ad?.url}
									alt={"ADVERTISEMENT"}
									width={1920}
									height={300}
									priority={true}
									style={{
										objectFit: "contain",
										objectPosition: "center",
										width: "100%",
										height: "300px",
									}}
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		)
	);
}
