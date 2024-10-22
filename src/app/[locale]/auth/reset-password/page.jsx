import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import ResetPassword from "../../../components/AuthenticationComponents/ResetPassword/ResetPassword";

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
						arrow: true,
					},
					{
						href: `/${locale}/auth/reset-password`,
						text: "Reset Password",
						arrow: false,
					},
				]}
			/>
			<ResetPassword locale={locale} />
		</div>
	);
}
