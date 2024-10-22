"use client";

import classes from "./AccountSettings.module.scss";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import AccountSettingsContent from "./AccountSettingsContent/AccountSettingsContent";

// REDUX
import { useSelector } from "react-redux";

export default function AccountHome({ locale }) {
	// REDUX
	const userInformation = useSelector(
		(state) => state.mainLayout.userInformation
	);

	return (
		<div className={`w-full min-h-screen ${classes.AccountSettings}`}>
			<ProfileNavigation locale={locale} user={userInformation} />
			{/*  CONTENT  */}
			<AccountSettingsContent locale={locale} user={userInformation} />
		</div>
	);
}
