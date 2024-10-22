import {redirect} from "next/navigation";

export default function AdsPage({params: {locale}}) {

    // Redirect to the home page
    return redirect(`/${locale}/listings/ads/all`);
}