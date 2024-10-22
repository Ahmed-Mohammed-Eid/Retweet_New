"use client";

import classes from "./AccountHomeContent.module.scss";
import Image from "next/image";
import PercentageCircle from "../../Percentagecircle/PercentageCircle";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AccountHomeContent({ user, locale, dictionary }) {
	const [stats, setStats] = useState({});

	useEffect(() => {
		// GET THE TOKEN
		const token = localStorage.getItem("retweet-token");

		axios
			.get(`${process.env.BASE_URL}/listing/stats`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				const listingStats = response.data?.listingStats || [];
				const objectOfStats = {};

				listingStats.forEach((stat) => {
					objectOfStats[stat.status] = {
						...stat,
					};
				});

				setStats(objectOfStats);
			})
			.catch((error) => {
				console.log(error);
				toast.error(
					locale === "en"
						? "An error occurred. Please try again later."
						: "حدث خطأ. يرجى المحاولة مرة أخرى لاحقاً."
				);
			});
	}, []);

	return (
		<div className={classes.AccountHomeContent}>
			<div className={classes.AccountHomeContent__Header}>
				<div className={classes.AccountHomeContent__Header__Image}>
					<Image
						width={250}
						height={250}
						src="/assets/profile/managementImage.png"
						alt="Management Image"
					/>
				</div>
				<div className={classes.AccountHomeContent__Header__Name}>
					<h3>{user.fullName}</h3>
					<h2>
						{locale === "en"
							? "Welcome to Management"
							: "مرحبا بك في الإدارة"}
					</h2>
					<p>
						{locale === "en"
							? "Project activity will be updated here."
							: "سيتم تحديث نشاط المشروع هنا."}
					</p>
				</div>
				<div className={classes.AccountHomeContent__Header__Texture}>
					<Image
						width={203}
						height={109}
						src="/assets/profile/texture.png"
						alt="Texture"
					/>
				</div>
			</div>
			<div className={classes.AccountHomeContent__Body}>
				<div className={classes.AccountHomeContent__Body__Card}>
					<PercentageCircle
						percentage={
							stats?.promoted?.count
								? (stats?.promoted?.count /
										stats?.total?.count) *
								  100
								: 0
						}
						colour={"rgba(245, 169, 47, 1)"}
						bgColor={"rgba(245, 169, 47, 0.4)"}
					/>
					<h2>{locale === "en" ? "Promoted" : "تم الترويج"}</h2>
				</div>
				<div className={classes.AccountHomeContent__Body__Card}>
					<PercentageCircle
						percentage={
							stats?.pending?.count
								? (stats?.pending?.count /
										stats?.total?.count) *
								  100
								: 0
						}
						colour={"rgba(0, 172, 238, 1)"}
						bgColor={"rgba(0, 172, 238, 0.4)"}
					/>
					<h2>{locale === "en" ? "Pending" : "قيد الانتظار"}</h2>
				</div>
				<div className={classes.AccountHomeContent__Body__Card}>
					<PercentageCircle
						percentage={
							stats?.rejected?.count
								? (stats?.rejected?.count /
										stats?.total?.count) *
								  100
								: 0
						}
						colour={"rgba(255, 59, 59, 1)"}
						bgColor={"rgba(255, 59, 59, 0.4)"}
					/>
					<h2>{locale === "en" ? "Rejected" : "تم الرفض"}</h2>
				</div>
				<div className={classes.AccountHomeContent__Body__Card}>
					<PercentageCircle
						percentage={100}
						colour={"rgba(46, 172, 109, 1)"}
						bgColor={"rgba(46, 172, 109, 0.4)"}
					/>
					<h2>{locale === "en" ? "Total" : "الإجمالي"}</h2>
				</div>
				{/* <div className={classes.AccountHomeContent__Body__Card}>
					<PercentageCircle
						percentage={
							stats?.deleted?.count
								? (stats?.deleted?.count /
										stats?.total?.count) *
								  100
								: 0
						}
						colour={"rgba(255, 59, 59, 1)"}
						bgColor={"rgba(255, 59, 59, 0.4)"}
					/>
					<h2>{locale === "en" ? "Deleted" : "تم الحذف"}</h2>
				</div> */}
			</div>
		</div>
	);
}
