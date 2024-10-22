import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import SignUpSignIn from "../../../components/AuthenticationComponents/SignUpSignIn/SignUpSignIn";

// CREATE DYNAMIC PAGE SEO OPTIMIZATION

export async function generateMetadata({ params }) {
	const locale = params.locale;
	return {
		title: locale === "en" ? "Login" : "تسجيل الدخول",
		description:
			locale === "en" ? "Login to your account" : "تسجيل الدخول إلى حسابك",
		keywords: locale === "en" ? "Login" : "تسجيل الدخول",
	};
}

export default function Login({ params: { locale } }) {
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
						href: `/${locale}/auth/login`,
						text: "Login",
					},
				]}
			/>
			<SignUpSignIn locale={locale} />
		</div>
	);
}
