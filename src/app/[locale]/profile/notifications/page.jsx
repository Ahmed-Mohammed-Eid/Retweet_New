import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountNotifications from "../../../components/UserProfileComponents/AccountNotifications/AccountNotifications";

export default function Notifications({ params: { locale } }) {
	return (
		<div className={"w-full min-h-screen"}>
			<SecondaryNavigation
				arrayOfLinks={[
					{
						href: `/${locale}/profile`,
						icon: "/assets/home/House.svg",
						arrow: true,
					},
					{
						href: `/${locale}/profile/notifications`,
						text: "Notifications",
						arrow: false,
					},
				]}
			/>
			{/*  CONTENT  */}
			<AccountNotifications locale={locale} />
		</div>
	);
}
