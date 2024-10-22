import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectImages from "../../../components/Listings/SelectImages/SelectImages";

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
						href: `/${locale}/listings/select-images`,
						text: "Select Images",
						arrow: false,
					},
				]}
			/>
			<SelectImages locale={locale} />
		</div>
	);
}
