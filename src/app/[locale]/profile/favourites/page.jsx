import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import FavouriteContent from "../../../components/UserProfileComponents/FavouriteContent/FavouriteContent";
import useAuthentication from "../../../../../hooks/useAuthentication";
import { cookies } from "next/headers";

export default async function Ads({ params: { locale } }) {
	// GET THE TOKEN FROM COOKIES
	const token = cookies().get("retweet-token")?.value;

	// AUTHENTICATION
	const { authenticated, error, userData } = await useAuthentication(token);

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
						href: `/${locale}/profile/favourites`,
						text: "Favourites",
						arrow: false,
					},
				]}
			/>
			{/*  CONTENT  */}
			<FavouriteContent authenticated={authenticated} locale={locale} />
		</div>
	);
}
