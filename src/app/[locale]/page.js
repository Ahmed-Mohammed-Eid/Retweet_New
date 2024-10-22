import {getDictionary} from "./dictionaries/dictionaries";
import axios from "axios";

// DYNAMICALLY IMPORT COMPONENTS
import HomeSwiper from "../components/LayoutAndHomeComponents/HomeSwiper/HomeSwiper";
import HomeCategories from "../components/LayoutAndHomeComponents/HomeCategories/HomeCategories";
import LatestAds from "../components/LayoutAndHomeComponents/LatestAds/LatestAds";
import RealEstate from "../components/LayoutAndHomeComponents/RealEstate/RealEstate";
import CarsAndBikes from "../components/LayoutAndHomeComponents/CarsAndBikes/CarsAndBikes"
import SmartPhones from "../components/LayoutAndHomeComponents/SmartPhones/SmartPhones"
import SaveGoogleToken from "../components/AuthenticationComponents/SaveGoogleToken/SaveGoogleToken"

export async function generateMetadata({params}) {
    // LANGUAGE
    const locale = params?.locale || "en";

    // GET SEO DATA
    const seo = await getSEOData(locale);

    // RETURN METADATA
    return {
        title: locale === "en" ? seo.pageTitleEn : seo.pageTitleAr,
        description: locale === "en" ? seo.descriptionEn : seo.descriptionAr,
        keywords:
            locale === "en"
                ? `${seo.keywordsEn}`
                : `${seo.keywordsAr}`,
        type: "website",
        url: `https://retweet.com/${locale}`,
        canonical: `https://retweet.com/${locale}`,
        author: "Retweet",
        locale: locale,
        alternates: {
            canonical: `https://retweet.com/${locale}`,
        },
        openGraph: {
            type: "website",
            locale: locale === "en" ? "en_US" : "ar_AR",
            localeAlternate: locale === "en" ? "ar_AR" : "en_US",
            url: `https://retweet.com/${locale}`,
            title: locale === "en" ? seo.pageTitleEn : seo.pageTitleAr,
            description: locale === "en" ? seo.descriptionEn : seo.descriptionAr,
            image: seo.image,
            siteName: "Retweet",
            imageWidth: 1200,
            imageHeight: 630,
        },
        twitter: {
            handle: "@retweet",
            site: "@retweet",
            cardType: "summary_large_image",
            title: locale === "en" ? seo.pageTitleEn : seo.pageTitleAr,
            description: locale === "en" ? seo.descriptionEn : seo.descriptionAr,
            images: [
                {
                    url: seo.image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}

async function getSEOData() {
    return await axios
        .get(`${process.env.BASE_URL}/get/website/seo`)
        .then((response) => {
            return response.data?.seo;
        })
        .catch((error) => {
            console.log(error);
        });
}

export default async function Home({params: {locale}}) {
    const dictionary = await getDictionary(locale);

    if (!dictionary) return;

    return (
        <>
            <SaveGoogleToken locale={locale}/>
            <HomeSwiper/>
            <HomeCategories dictionary={dictionary} locale={locale}/>
            <LatestAds dictionary={dictionary} locale={locale}/>
            <RealEstate dictionary={dictionary} locale={locale}/>
            <CarsAndBikes dictionary={dictionary} locale={locale}/>
            <SmartPhones dictionary={dictionary} locale={locale}/>
        </>
    );
}
