import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SelectSpecs from "../../../components/Listings/SelectSpecs/SelectSpecs";
export default function SelectSpecsPage({ params: { locale } }) {
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
						href: `/${locale}/listings/select-specs`,
						text: "Select Specs",
						arrow: false,
					},
				]}
			/>
			<SelectSpecs locale={locale} />
		</div>
	);
}
