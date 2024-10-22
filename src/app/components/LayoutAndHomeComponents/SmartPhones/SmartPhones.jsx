"use client";

import classes from "./SmartPhones.module.scss";

// REDUX
import { useSelector } from "react-redux";

// COMPONENTS
import Card from "../Card/Card";

export default function SmartPhones({ dictionary, locale }) {
	// REDUX
	const data =
		useSelector((state) => state.home.advertisements.mobiles) || [];

	return (
		<section className={classes.RealEstate}>
			<div className={classes.RealEstate__Top}>
				<div>
					<h2>Smart Phones</h2>
				</div>
				<div>{/*<button>View All <span>&rarr;</span></button>*/}</div>
			</div>
			<div className={classes.RealEstate__Container}>
				{data.map((item, index) => {
					return (
						<Card key={index} dictionary={dictionary} data={item} locale={locale} />
					);
				})}
			</div>
		</section>
	);
}
