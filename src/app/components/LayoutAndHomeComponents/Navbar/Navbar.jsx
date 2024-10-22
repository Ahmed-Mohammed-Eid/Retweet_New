"use client";
import React, { useEffect } from "react";
import classes from "./Navbar.module.scss";
import subClasses from "./Sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Button } from "primereact/button";
// import LanguageSwitcher from "@/src/app/components/LayoutAndHomeComponents/LanguageSwitcher/LanguageSwitcher";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import AuthenticatedProfile from "../AuthenticatedProfile/AuthenticatedProfile";
import { useRouter } from "next/navigation";
import { Sidebar } from "primereact/sidebar";
import CountrySwitcher from "../CountrySwitcher/CountrySwitcher";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
	updateUserInformation,
	updateUserCountryInformation,
	setIsAuthenticated,
	updateNotifications,
} from "../../../../../redux/Slices/mainLayoutSlice";
import axios from "axios";
import { Badge } from "primereact/badge";
import toast from "react-hot-toast";

function Navbar({ locale, auth, country, userData }) {
	// STATE
	const [showSidebar, setShowSidebar] = React.useState(false);

	// ROUTER
	const router = useRouter();

	// REDUX
	const dispatch = useDispatch();
	const { notifications } = useSelector((state) => state.mainLayout);

	// UPDATE USER INFORMATION
	dispatch(updateUserInformation(userData));

	// UPDATE USER COUNTRY INFORMATION
	dispatch(updateUserCountryInformation(country));

	// SET AUTHENTICATED
	dispatch(setIsAuthenticated(auth));

	// LOGOUT
	const onLogout = (event) => {
		// PREVENT DEFAULT
		event.preventDefault();

		// CLEAR LOCAL STORAGE
		localStorage.clear();
		// CLEAR COOKIES
		document.cookie = `retweet-verify-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-reset-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-user-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-user-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-user-name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-user-phone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `retweet-has-profile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		// REDIRECT TO HOME PAGE
		// router.push("/?redirected=true");
		router.push(`/${locale}/?redirected=true`);
	};

	// GET THE NOTIFICATIONS HANDLER
	const getNotifications = () => {
		// AUTHENTICATED VALIDATION
		if (!auth) return;

		// GET THE NOTIFICATIONS
		axios
			.get(`${process.env.BASE_URL}/unseen/notifications`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem(
						"retweet-token"
					)}`,
				},
			})
			.then((response) => {
				dispatch(
					updateNotifications({
						hasNotifications: response.data?.hasNotifications,
						notificationCount: response.data?.notificationCount,
					})
				);
			})
			.catch((error) => {
				if (auth) {
					console.log(error);
					toast.error(error.response.data?.message || err.message);
				}
			});
	};

	// GET THE NOTIFICATIONS
	useEffect(() => {
		getNotifications();

		const interval = setInterval(() => {
			getNotifications();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<nav className={classes.Navbar}>
				<div className={classes.Navbar__logo}>
					<Link href={`/${locale}/`}>
						<Image
							src={"/assets/home/logo.png"}
							alt={"retweet logo"}
							width={200}
							height={36}
							priority
						/>
					</Link>
				</div>
				<div className={classes.Navbar__select__wrapper}>
					{/*<SelectedArea className={classes.Navbar__select} country={country || {}}/>*/}
					<CountrySwitcher locale={locale} />
				</div>
				<div className={classes.Navbar_group}>
					{auth && (
						<div className={classes.Navbar__icons}>
							<Button
								className={classes.Navbar__icons__icon}
								tooltip={"Favourite"}
								onClick={() => {
									router.push(`/${locale}/profile/favourites`);
								}}
							>
								<Image
									src={"/assets/home/Heart.svg"}
									alt={"Heart"}
									width={18}
									height={18}
								/>
							</Button>

							<span className={classes.Navbar__breaker}></span>

							<Button
								className={classes.Navbar__icons__icon}
								tooltip={"Messages"}
								onClick={() =>
									router.push(
										`/${locale}/profile/messages#chat__box-hash`
									)
								}
							>
								<Image
									src={"/assets/home/bx_chat.svg"}
									alt={"bx_chat"}
									width={18}
									height={18}
								/>
							</Button>

							<span className={classes.Navbar__breaker}></span>

							<Button
								className={classes.Navbar__icons__icon}
								tooltip={"Notifications"}
								onClick={() => {
									router.push(`/${locale}/profile/notifications`);
								}}
							>
								<Image
									src={"/assets/home/notification.svg"}
									alt={"notification"}
									width={18}
									height={18}
								/>
								{/* NOTIFICATIONS */}
								{notifications.hasNotifications &&
									notifications.notificationCount > 0 && (
										<Badge
											value={
												notifications.notificationCount
											}
											severity="danger"
											style={{ marginLeft: "0" }}
										/>
									)}
							</Button>

							<span className={classes.Navbar__breaker}></span>
						</div>
					)}

					<div className={classes.Navbar__sign}>
						{!auth && (
							<Button className={classes.Navbar__sign__btn}>
								<Image
									src={"/assets/home/user.svg"}
									alt={"user"}
									width={19}
									height={19}
								/>
								<Link href={`/${locale}/auth/login`}>
									<span>
										{locale === "en"
											? "Sign Up/Sign In"
											: "تسجيل الدخول/التسجيل"}
									</span>
								</Link>
							</Button>
						)}
						{auth && (
							<AuthenticatedProfile
								locale={locale}
								userData={userData}
							/>
						)}
					</div>
				</div>

				<div className={classes.Navbar__Add}>
					<Button
						className={classes.Navbar__Add__btn}
						onClick={() => {
							auth
								? router.push(`/${locale}/listings/select-category`)
								: router.push(`/${locale}/auth/login`);
						}}
					>
						<Image
							src={"/assets/home/solar_camera-add-bold.svg"}
							alt={"camera"}
							width={19}
							height={19}
						/>
						<span>
							{locale === "en"
								? "Add New Listing"
								: "إضافة إعلان جديد"}
						</span>
					</Button>
				</div>

				<div className={classes.Navbar__locale}>
					<LanguageSwitcher
						className={classes.Navbar__locale__select}
						locale={locale}
					/>
				</div>

				<div className={classes.Navbar__burger}>
					<button
						className={classes.Navbar__burger__btn}
						onClick={() => setShowSidebar(true)}
					>
						<Image
							src={"/assets/home/menu.svg"}
							alt={"menu"}
							width={24}
							height={24}
						/>
					</button>
				</div>
			</nav>

			<Sidebar
				onHide={() => setShowSidebar(false)}
				visible={showSidebar}
				position="right"
				className={subClasses.Sidebar}
				header={
					<div>
						<div>
							<Link locale={locale} href={`/${locale}/`}>
								<Image
									src={"/assets/home/logo.png"}
									alt={"retweet logo"}
									width={100}
									height={36}
									priority
								/>
							</Link>
						</div>
					</div>
				}
			>
				<div className={`${subClasses.Sidebar_group} mb-4`}>
					{auth && (
						<div className={subClasses.Sidebar__icons}>
							<Button
								className={subClasses.Sidebar__icons__icon}
								onClick={() => {
									router.push(`/${locale}/profile/favourites`);
								}}
							>
								<Image
									src={"/assets/home/Heart.svg"}
									alt={"Heart"}
									width={18}
									height={18}
								/>
								<span>
									{locale === "en" ? "Favourite" : "المفضلة"}
								</span>
							</Button>

							<span
								className={subClasses.Sidebar__breaker}
							></span>

							<Button
								className={subClasses.Sidebar__icons__icon}
								style={{ position: "relative" }}
								onClick={() =>
									router.push(
										`/${locale}/profile/messages#chat__box-hash`
									)
								}
							>
								<Image
									src={"/assets/home/bx_chat.svg"}
									alt={"bx_chat"}
									width={18}
									height={18}
								/>
								<span>
									{locale === "en" ? "Messages" : "الرسائل"}
								</span>
							</Button>

							<span
								className={subClasses.Sidebar__breaker}
							></span>

							<Button
								className={subClasses.Sidebar__icons__icon}
								onClick={() => {
									router.push(`/${locale}/profile/notifications`);
								}}
							>
								<Image
									src={"/assets/home/notification.svg"}
									alt={"notification"}
									width={18}
									height={18}
								/>
								<span>
									{locale === "en"
										? "Notifications"
										: "الإشعارات"}
								</span>
								{auth &&
									notifications.hasNotifications &&
									notifications.notificationCount > 0 && (
										<Badge
											value={
												notifications.notificationCount
											}
											severity="danger"
											style={{
												marginLeft: "0",
												position: "absolute",
												top: "0",
												right: "10px",
												color: "#FFFFFF",
											}}
										/>
									)}
							</Button>
						</div>
					)}
				</div>

				<div className={`${subClasses.Sidebar__locale} mb-4`}>
					<p
						style={
							locale === "en"
								? { textAlign: "left", direction: "ltr" }
								: {
										textAlign: "right",
										direction: "rtl",
								  }
						}
						className={"mb-2"}
					>
						{locale === "en" ? "Location" : "الموقع"}
					</p>
					<CountrySwitcher
						locale={locale}
						className={subClasses.Sidebar__locale__select}
					/>
				</div>

				<div className={`${subClasses.Sidebar__locale} mb-4`}>
					<p
						style={
							locale === "en"
								? { textAlign: "left", direction: "ltr" }
								: {
										textAlign: "right",
										direction: "rtl",
								  }
						}
						className={"mb-2"}
					>
						{locale === "en" ? "Language" : "اللغة"}
					</p>
					<LanguageSwitcher
						className={subClasses.Sidebar__locale__select}
						locale={locale}
					/>
				</div>

				<div className={`${subClasses.Sidebar__Add} mb-4`}>
					<Button
						className={subClasses.Sidebar__Add__btn}
						onClick={() => {
							auth
								? router.push(`/${locale}/listings/select-category`)
								: router.push(`/${locale}/auth/login`);
						}}
					>
						<Image
							src={"/assets/home/solar_camera-add-bold.svg"}
							alt={"camera"}
							width={19}
							height={19}
						/>
						<span>
							{locale === "en"
								? "Add New Listing"
								: "إضافة إعلان جديد"}
						</span>
					</Button>
				</div>

				<div className={`${subClasses.Sidebar__sign} mb-4`}>
					{!auth && (
						<Button className={subClasses.Sidebar__sign__btn}>
							<Image
								src={"/assets/home/user.svg"}
								alt={"user"}
								width={19}
								height={19}
							/>
							<Link href={`/${locale}/auth/login`}>
								<span>
									{locale === "en"
										? "Sign Up/Sign In"
										: "تسجيل الدخول/التسجيل"}
								</span>
							</Link>
						</Button>
					)}
					{auth && (
						<div className={subClasses.Sidebar__sign__profile}>
							<Link
								href={`/${locale}/profile/account`}
								passHref
							>
								<div
									className={
										subClasses.Sidebar__sign__profile__img
									}
								>
									<Image
										src={userData?.userImage || "/assets/home/userAccount.png"}
										alt={"user"}
										width={80}
										height={80}
										style={{
											borderRadius: "50%",
											objectPosition: "center",
											objectFit: "cover",
										}}
									/>
								</div>
							</Link>
							<div
								className={
									subClasses.Sidebar__sign__profile__info
								}
							>
								<Link
									href={`/${locale}/profile/account`}
									  passHref
								>
									<span>{userData?.fullName}</span>
								</Link>
								{/*  EMAIL  */}
								<span>{userData?.email}</span>
								{/*  LOCATION  */}
								<span>
									<Image
										src={"/assets/home/Location.svg"}
										alt={"location"}
										width={18}
										height={18}
									/>
									<span>{country?.country}</span>
								</span>
							</div>
						</div>
					)}
				</div>

				{/* DASHBOARD */}
				{auth && (
					<div className={`${subClasses.Sidebar__dashboard} mb-4`}>
						<Button
							onClick={() => {
								router.push(`/${locale}/profile/account`);
							}}
						>
							<Image
								src={"/assets/home/dashboard.svg"}
								alt={"dashboard"}
								width={19}
								height={19}
							/>
							<span>
								{locale === "en" ? "Dashboard" : "لوحة التحكم"}
							</span>
						</Button>
					</div>
				)}

				{/* LOGOUT */}
				{auth && (
					<div className={`${subClasses.Sidebar__logout} mb-4`}>
						<Button onClick={onLogout}>
							<Image
								src={"/assets/home/Logout.svg"}
								alt={"logout"}
								width={19}
								height={19}
							/>
							<span>
								{locale === "en" ? "Logout" : "تسجيل الخروج"}
							</span>
						</Button>
					</div>
				)}
			</Sidebar>
		</>
	);
}

export default Navbar;
