import Image from "next/image";
import classes from "./AccountHomeFooter.module.scss";

export default function AccountHomeFooter() {
    return (
        <div className={classes.AccountHomeFooter}>
            <Image src={'/assets/profile/AccountHomeFooterImage.png'} className={classes.AccountHomeFooter__bg} fill={"layout"} alt={'Account Home Footer Image'}/>
            <div className={classes.AccountHomeFooter__Overlay}>
                <Image src={'/assets/profile/FooterLogo.png'} alt={'Footer Logo'} width={200} height={36}/>
            </div>
        </div>
    );
}