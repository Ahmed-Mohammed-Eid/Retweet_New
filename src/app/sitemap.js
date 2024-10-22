import axios from "axios";

export default async function sitemap() {
    const locales = ['en', 'ar'];
    const staticPages = ['/', '/about', '/contact'];

    // SITEMAP MULTI-LANGUAGE PAGES FOR EACH LANGUAGE AND STATIC PAGES
    const staticSiteMap = locales.map((locale) => {
        return staticPages.map((page) => {
            return {
                url: `https://retweet.com/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 1,
            }
        })
    })

    // FLATTEN THE ARRAY OF ARRAYS INTO A SINGLE ARRAY OF OBJECTS
    const flatSiteMap = [].concat.apply([], staticSiteMap);

    // GET THE IDS OF ALL LISTINGS
    const getListings = async function () {
        return await axios.get(`${process.env.BASE_URL}/last/month/listings`)
            .then((response) => {
                const listings = response.data?.listings || [];
                return listings.map((listing) => {
                    return listing._id;
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const listingSiteMap = await getListings();

    // SITEMAP FOR LISTINGS BASED ON IDS AND LANGUAGES
    const listingSiteMapUrls = listingSiteMap.map((listing) => {
        return {
            url: `https://retweet.com/en/listings/${listing}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        }
    })

    // FLATTEN THE ARRAY OF ARRAYS INTO A SINGLE ARRAY OF OBJECTS
    const flatListingSiteMap = [].concat.apply([], listingSiteMapUrls);


    return [
        ...flatSiteMap,
        ...flatListingSiteMap
    ]
}