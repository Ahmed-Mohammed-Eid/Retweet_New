import SecondaryNavigation from "../../../components/LayoutAndHomeComponents/SecondaryNavigation/SecondaryNavigation";
import VerifyEmail from "../../../components/AuthenticationComponents/VerifyEmail/VerifyEmail";

export default function VerifyEmailAddress({ params: { locale } }) {
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
						href: `/${locale}/auth/verify`,
						text: "Email Verification",
						arrow: false,
					},
				]}
			/>
			<VerifyEmail locale={locale} />
		</div>
	);
}
