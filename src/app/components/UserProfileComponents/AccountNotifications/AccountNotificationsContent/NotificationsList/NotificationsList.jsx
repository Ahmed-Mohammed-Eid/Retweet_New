"use client";
import React, { useState, useEffect } from "react";

import classes from "./NotificationsList.module.scss";
import NotificationItem from "./NotificationItem/NotificationItem";

export default function NotificationsList() {
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		// GET THE TOKEN
		const token = localStorage.getItem("retweet-token");

		// GET THE NOTIFICATIONS
		fetch(`${process.env.BASE_URL}/user/notifications`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setNotifications(data?.notifications || []);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className={classes.NotificationsList}>
			{/*  NOTIFICATIONS  */}
			{notifications.map((notification, index) => (
				<NotificationItem key={index} notification={notification} />
			))}
		</div>
	);
}
