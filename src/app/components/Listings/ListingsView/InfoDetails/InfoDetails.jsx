import classes from "./Information.module.scss";
import isFirstWordEnglish from "../../../../../../helpers/isFirstWordEnglish";


export default function InfoDetails({listing, locale}) {
    if (!listing) return null;

    // HANDLE INFO DETAILS Object to be an array
    const listingSpecs = listing?.listingSpecs;
    const ArrayListingSpecs = [];

    for (const key in listingSpecs) {
        ArrayListingSpecs.push(listingSpecs[key]);
    }


    return (
        <div className={`${classes.InfoDetails} flex flex-col mb-8`}>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-left mt-8 mb-4">
                    {locale === "en" ? "Information" : "معلومات"}
                </h2>
                <div className="grid grid-cols-1 gap-2 mb-8 md:grid-cols-2">
                    {ArrayListingSpecs?.map((info, index) => {
                        const firstColor = "#3A9BB630";
                        const secondColor = "#FFFFFF";
                        // Determine the color based on the current index
                        let color = index % 4 === 0 || index % 4 === 3 ? firstColor : secondColor;

                        // CHECK IF THE INFO IS {} || [] || VALUE
                        const isObject = typeof info?.value === "object";
                        const isArray = Array.isArray(info?.value);

                        return (
                            <div
                                key={index}
                                className={`col-span-2 md:col-span-1 flex items-center flex-wrap justify-between p-4 border border-gray-200 rounded-lg ${(index + 1 === ArrayListingSpecs.length && (index + 1) % 2 !== 0) ? "md:col-span-2" : ""}`}
                                style={{
                                    backgroundColor: color, // Apply the background color here
                                }}
                            >
                                <p className="text-base text-left uppercase font-bold">
                                    {locale === "en" ? info?.labelEn : info?.labelAr}
                                </p>
                                <p className="text-base font-normal text-right">
                                    {isArray ? info?.value.join(", ") : (isObject ? "" : info?.value)}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <h2 className="text-2xl font-bold text-left mt-8 mb-4">
                    {locale === "en" ? "Description" : "الوصف"}
                </h2>
                <p
                    className="text-base font-normal text-left bg-white p-8 border border-gray-200 rounded-lg"
                    // IF THE DESCRIPTION IS ARABIC, APPLY THE TEXT ALIGN TO RIGHT ELSE TO LEFT
                    style={{
                        textAlign: isFirstWordEnglish(listing?.listingDescription) ? "left" : "right",
                    }}
                >
                    {listing?.listingDescription}
                </p>
            </div>
        </div>
    );
}