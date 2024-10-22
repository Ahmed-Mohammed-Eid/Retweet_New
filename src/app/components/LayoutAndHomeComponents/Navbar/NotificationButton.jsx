import classes from "@/src/app/components/LayoutAndHomeComponents/Navbar/Navbar.module.scss";
import Image from "next/image";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import React, { useEffect } from "react";

// REDUX
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { updateNotifications } from "@/redux/Slices/mainLayoutSlice";
import toast from "react-hot-toast";

// REDUX
import { useDispatch } from "react-redux";

export default function NotificationButton({ auth }) {
	const router = useRouter();
	const { notifications } = useSelector((state) => state.mainLayout);

	const dispatch = useDispatch();

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
		<Button
			className={classes.Navbar__icons__icon}
			tooltip={"Notifications"}
			onClick={() => {
				router.push("/profile/notifications");
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
						value={notifications.notificationCount}
						severity="danger"
						style={{ marginLeft: "0" }}
					/>
				)}
		</Button>
	);
}
