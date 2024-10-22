import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ContactPage from "../../../components/LayoutAndHomeComponents/ContactPage/ContactPage";

// SEO OPTIMIZATION
export async function generateMetadata({ params }) {
	// LANGUAGE
	const locale = params.locale;

	const descriptionEn =
		"Get in touch with us at Retweet for any inquiries, support, or feedback. We're here to help you with your buying, selling, and renting needs. Contact us today through our website.";
	const descriptionAr =
		"تواصل معنا في ريتويت لأي استفسارات أو دعم أو ملاحظات. نحن هنا لمساعدتك في احتياجاتك للبيع والشراء والتأجير. تواصل معنا اليوم عبر موقعنا الإلكتروني.";

	// RETURN METADATA
	return {
		title:
			locale === "en"
				? "Contact Us | Retweet Classified Ads Platform"
				: "تواصل معنا | منصة الإعلانات المبوبة ريتويت",
		description: locale === "en" ? descriptionEn : descriptionAr,
		canonical: `https://retweet.com/${locale}/contact`,
		alternates: {
			en: `https://retweet.com/en/contact`,
			ar: `https://retweet.com/ar/contact`,
		},
		openGraph: {
			title:
				locale === "en"
					? "Contact Us | Retweet Classified Ads Platform"
					: "تواصل معنا | منصة الإعلانات المبوبة ريتويت",
			description: locale === "en" ? descriptionEn : descriptionAr,
			url: `https://retweet.com/${locale}/contact`,
			type: "website",
			locale: locale === "en" ? "en_US" : "ar_AR",
			siteName: locale === "en" ? "Retweet" : "ريتويت",
			images: [
				{
					url: "https://retweet.com/assets/home/logo.png",
					width: 800,
					height: 600,
					alt: "Retweet Logo",
				},
			],
		},
	};
}

export default function VerifyEmailAddress({ params }) {

	const { locale } = params;

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
						href: `/${locale}/contact`,
						text: "Contact Us",
						arrow: false,
					},
				]}
			/>
			<ContactPage locale={locale} />
		</div>
	);
}
