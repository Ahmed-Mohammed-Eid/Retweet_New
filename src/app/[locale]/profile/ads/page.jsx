import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import MyListingContent from "../../../components/UserProfileComponents/MyListings/MyListingsContent";

export default function Ads({ params }) {

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
						arrow: true,
					},
					{
						href: `/${locale}/profile/ads`,
						text: "Ads",
						arrow: false,
					},
				]}
			/>
			{/*  CONTENT  */}
			<MyListingContent locale={locale} />
		</div>
	);
}
