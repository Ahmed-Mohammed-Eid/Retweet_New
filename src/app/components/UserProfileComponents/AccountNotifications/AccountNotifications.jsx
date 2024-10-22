"use client";

import classes from "./AccountNotifications.module.scss";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import AccountNotificationsContent from "../AccountNotifications/AccountNotificationsContent/AccountNotificationsContent";

// REDUX
import { useSelector } from "react-redux";

export default function AccountNotifications({ locale }) {
	// REDUX
	const userInformation = useSelector(
		(state) => state.mainLayout.userInformation
	);

	return (
		<div className={`w-full min-h-screen ${classes.AccountNotifications}`}>
			<ProfileNavigation user={userInformation} locale={locale} />
			<AccountNotificationsContent locale={locale}/>
		</div>
	);
}
