import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import AccountHome from "../../../components/UserProfileComponents/AccountHome/AccountHome";

export default function Account({ params }) {
	const { locale } = params;
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
						text: "Profile",
						arrow: false,
					},
				]}
			/>
			{/*  CONTENT  */}
			<AccountHome locale={locale} />
		</div>
	);
}
