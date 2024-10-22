import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";
import {Toaster} from "react-hot-toast";
import {cookies} from "next/headers";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

// NEXT REQUEST

// CUSTOM COMPONENTS
import ClientLayout from "../components/ClientLayout";
import Footer from "../components/LayoutAndHomeComponents/Footer/Footer";

// CUSTOM HOOKS
import useAuthentication from "../../../hooks/useAuthentication";
import LoadingOverlay from "../components/LayoutAndHomeComponents/LoadingOverlay/LoadingOverlay";

// METADATA
export const metadata = {
    generator: "Retweet",
    title: "ريتويت | اعلانات مبوبة مجانية",
    description:
        "Retweet: Your gateway to a global community where you can connect, share thoughts, and explore endless possibilities. Buy, sell, rent, or trade goods and services effortlessly. From cars to real estate, electronics to fashion, Retweet connects you with friends, family, and businesses worldwide. Join us and experience the power of networking, marketing, and advertising in a dynamic social media platform. #Retweet #SocialMedia #GlobalCommunity",
    authors: ["Retweet"],
    robots: "index, follow",
    siteName: "Retweet",
    openGraph: {
        type: "website",
        title: "Retweet",
        siteName: "Retweet",
        url: "https://retweet.com/",
        description:
            "Retweet: Your gateway to a global community where you can connect, share thoughts, and explore endless possibilities. Buy, sell, rent, or trade goods and services effortlessly. From cars to real estate, electronics to fashion, Retweet connects you with friends, family, and businesses worldwide. Join us and experience the power of networking, marketing, and advertising in a dynamic social media platform. #Retweet #SocialMedia #GlobalCommunity",
        images: ["/assets/home/logo.png"],
        ttl: 604800,
        // LOCALIZATION [ARABIC, ENGLISH]
        locale: "en_US",
        localeAlternate: "ar_EG",
    },
    icons: {
        icon: "/assets/home/favicon.ico",
    },
};

export default async function RootLayout({children, params}) {
    // GET THE LANGUAGE FROM PARAMS
    const {locale} = params;

    // GET THE TOKEN FROM COOKIES
    const token = cookies().get("retweet-token")?.value;

    // CHECK IF THE USER IS AUTHENTICATED
    const {authenticated, error, userData} = await useAuthentication(token);


    const messages = await getMessages();

    return (
        <html lang={locale}>
        <head>
            <link
                rel="preload"
                href="/assets/fonts/Tajawal-Regular.ttf"
                as="font"
                type="font/ttf"
            />
            <link
                rel="preload"
                href="/assets/fonts/Tajawal-Bold.ttf"
                as="font"
                type="font/ttf"
            />
            <link
                rel="preload"
                href="/assets/fonts/Tajawal-ExtraBold.ttf"
                as="font"
                type="font/ttf"
            />
            {/*  Title  */}
            <title>{metadata.title}</title>
            {/*  Meta  */}
        </head>
        <body>
        <NextIntlClientProvider
            messages={messages}
        >
            <PrimeReactProvider>
                <ClientLayout
                    locale={locale}
                    authenticated={authenticated}
                    error={error}
                    userData={userData}
                >
                    {children}
                    <LoadingOverlay />
                </ClientLayout>
                <Footer locale={locale}/>
                <Toaster position={"bottom-right"}/>
            </PrimeReactProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}