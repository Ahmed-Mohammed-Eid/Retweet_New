import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectSubcategoryItem from "../../../components/Listings/SelectSubcategoryItem/SelectSubcategoryItem";

export default function SelectCategoryItemPage({ params: { locale } }) {
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
						text: "Category",
						arrow: true,
					},
					{
						href: `/${locale}/listings/select-item`,
						text: "Select Item",
						arrow: false,
					},
				]}
			/>
			<SelectSubcategoryItem locale={locale} />
		</div>
	);
}
