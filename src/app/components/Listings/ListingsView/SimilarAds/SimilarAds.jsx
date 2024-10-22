import classes from "./SimilarAds.module.scss";
import AdCard from "../../../LayoutAndHomeComponents/Card/Card";

const SimilarAds = ({ locale, similarAds }) => {

    return (
        <div className={classes.similarAds}>
            <h2>{locale === "en" ? "Similar Ads" : "إعلانات مشابهة"}</h2>
            <div className={classes.similarAdsContainer}>
                {similarAds.map((ad, index) => (
                    <AdCard
                        key={"similarAd" + index}
                        locale={locale}
                        data={ad}
                    />
                ))}
            </div>
        </div>
    );
}

export default SimilarAds;