import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectCategory from "../../../components/Listings/SelectCategory/SelectCategory";

export default function SelectSubCategoryPage({ params: { locale } }) {
	return (
		<div className={"w-full"}>
			<SecondaryNavigation
				arrayOfLinks={[
					{
						href: `/${locale}/`,
						icon: "/assets/home/House.svg",
						arrow: true,
					},
					{
						href: `/${locale}/listings/select-category`,
						text: "Select Category",
						arrow: false,
					},
				]}
			/>
			<SelectCategory locale={locale} />
		</div>
	);
}
