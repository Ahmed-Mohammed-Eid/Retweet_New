import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectSubcategory from "../../../components/Listings/SelectSubcategory/SelectSubcategory";

export default function SelectCategoryPage({ params: { locale } }) {
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
						href: `/${locale}/listings/select-subcategory`,
						text: "Select Subcategory",
						arrow: false,
					},
				]}
			/>
			<SelectSubcategory locale={locale} />
		</div>
	);
}
