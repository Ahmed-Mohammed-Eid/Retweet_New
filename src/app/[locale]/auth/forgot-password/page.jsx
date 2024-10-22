import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ForgotPassword from "../../../components/AuthenticationComponents/ForgotPassword/ForgotPassword";

// CREATE DYNAMIC PAGE SEO OPTIMIZATION
export async function generateMetadata({ params }) {
	const locale = params.locale;
	return {
		title: locale === "en" ? "Forgot Password" : "نسيت كلمة المرور",
		description:
			locale === "en"
				? "Forgot your password? No problem! Enter your email and we'll send you a link to reset it."
				: "هل نسيت كلمة المرور؟ لا مشكلة! أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيينها.",
		keywords: locale === "en" ? "Forgot Password" : "نسيت كلمة المرور",
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
						text: "Sign In",
						arrow: true,
					},
					{
						href: `/${locale}/auth/forgot-password`,
						text: "Forgot Password",
					},
				]}
			/>
			<ForgotPassword locale={locale} />
		</div>
	);
}
