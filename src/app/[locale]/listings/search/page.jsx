import ListingsPartContent from "../../../components/Listings/ListingsPartContentSearch/ListingsPartContentSearch";
import useAuthentication from "../../../../../hooks/useAuthentication";
import classes from "./listings.module.scss";

import { cookies } from "next/headers";

export default async function Listings({ params: { locale } }) {
	// GET THE TOKEN FROM COOKIES
	const token = cookies().get("retweet-token")?.value;

	// AUTHENTICATION
	const { authenticated, error, userData } = await useAuthentication(token);

	return (
		<div className={`${classes.ContentContainer}`}>
			<div className={`${classes.Cards}`}>
				<ListingsPartContent
					locale={locale}
					authenticated={authenticated}
				/>
			</div>
		</div>
	);
}
