import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountSettings from "../../../components/UserProfileComponents/AccountSettings/AccountSettings";

export default async function Settings({ params: { locale } }) {
	return (
		<div className={"w-full min-h-screen"}>
			<SecondaryNavigation
				arrayOfLinks={[
					{
						href: `/${locale}/`,
						icon: "/assets/home/House.svg",
						arrow: true,
					},
					{
						href: `/${locale}/profile/account`,
						text: "My Account",
						arrow: false,
					},
				]}
			/>
			{/*  CONTENT  */}
			<AccountSettings locale={locale} />
		</div>
	);
}
