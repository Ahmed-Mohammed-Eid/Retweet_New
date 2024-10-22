import classes from "./AccountNotificationsContent.module.scss";
import NotYet from "../../AccountNotifications/AccountNotificationsContent/NotYet/NotYet";
import NotificationsList from "../../AccountNotifications/AccountNotificationsContent/NotificationsList/NotificationsList";

export default function AccountNotificationsContent() {
	// SHOW THE NOTIFICATIONS IF THERE ARE ANY
	const showNotifications = true;

	return (
		<div className={classes.AccountNotificationsContent}>
			{/*  NOTIFICATIONS  */}
			{showNotifications ? <NotificationsList /> : <NotYet />}
		</div>
	);
}
