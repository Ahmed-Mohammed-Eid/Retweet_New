import classes from "./LoadingPageContent.module.scss";
import Image from "next/image";

const LoadingPageContent = () => {
    return (
        <div className={`${classes.LoadingPageContent} bg-white w-full h-screen`}>
            <Image src={'/assets/retweet.gif'} alt="loading" width={300} height={300} loading={'lazy'}/>
        </div>
    );
};

export default LoadingPageContent;
