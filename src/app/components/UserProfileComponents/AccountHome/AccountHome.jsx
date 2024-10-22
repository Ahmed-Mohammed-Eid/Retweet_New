"use client";

import classes from "./AccountHome.module.scss";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import AccountHomeContent from "./AccountHomeContent/AccountHomeContent";
import AccountHomeFooter from "./AccountHomeFooter/AccountHomeFooter";

// REDUX
import { useSelector } from "react-redux";

export default function AccountHome({locale}) {
	// REDUX
	const userInformation = useSelector(
		(state) => state.mainLayout.userInformation
	);

	return (
		<div className={`w-full min-h-screen ${classes.AccountHome}`}>
			<ProfileNavigation user={userInformation} locale={locale} />
			<AccountHomeContent user={userInformation} locale={locale} />
			<AccountHomeFooter locale={locale}/>
		</div>
	);
}
