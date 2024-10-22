"use client";
import {useRef} from "react";
import {OverlayPanel} from 'primereact/overlaypanel';
import Image from "next/image";
import {Button} from "primereact/button";
import Link from "next/link";
import classes from "./AuthenticatedProfile.module.scss"
import {useRouter} from "next/navigation";


export default function AuthenticatedProfile({locale, userData}) {

    // ROUTER
    const router = useRouter();

    // INIT OVERLAY PANEL
    let op = useRef(null);

    const onLogout = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();

        // CLEAR LOCAL STORAGE
        localStorage.clear();
        // CLEAR COOKIES
        document.cookie = `retweet-verify-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-reset-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-user-phone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `retweet-has-profile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        // REDIRECT TO HOME PAGE
        router.push(`/?redirected=true`);
    }

    return (
        <div>
            <Button className={classes.Navbar__sign__btn} onClick={(e) => op.toggle(e)}>
                <div className={classes.Navbar__sign__btn__Image}>
                    <Image src={userData?.userImage || "/assets/home/userAccount.png"} alt={'user'} width={22} height={22} style={{width: "22px", height: "22px", borderRadius: "50%", objectPosition: "center", objectFit: "cover"}}/>
                    <Image src={'/assets/home/ArrowDown.svg'} alt={'arrow '}
                           className={classes.Navbar__sign__btn__Image_Arrow} width={15} height={15}/>
                </div>
                <p className={classes.MainName}>{userData?.fullName || ''}</p>
            </Button>
            <OverlayPanel ref={(el) => op = el}>
                <div className={classes.Navbar__sign__btn__Content}>
                    {/*  USER IMAGE + FULL NAME  */}
                    <div className={classes.Navbar__sign__btn__FullImage}>
                        <Image src={userData?.userImage || "/assets/home/userAccount.png"} alt={'user'} width={50} height={50} style={{width: "50px", height: "50px", objectFit: 'cover', objectPosition: "center", borderRadius: "50%"}}/>
                        <p>
                            {userData?.fullName || ''}
                        </p>
                    </div>

                    {/*  LINE TO SPLIT THE USER INFO  */}
                    <div className={classes.Navbar__sign__btn__Line}></div>

                    {/*  USER INFO LINKS */}
                    <div className={classes.Navbar__sign__btn__Links}>
                        <Link locale={locale} href={`/${locale}/profile/account`} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/dashboard.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>
                                    {locale === 'en' ? 'Dashboard' : 'لوحة التحكم'}
                                </span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>
                        <Link locale={locale} href={`/${locale}/profile/notifications`} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/notificationAuth.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>
                                    {locale === 'en' ? 'Notifications' : 'الإشعارات'}
                                </span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>
                        <Link locale={locale} href={`/${locale}/profile/ads`} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/myAds.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>
                                    {locale === 'en' ? 'My Ads' : 'إعلاناتي'}
                                </span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>
                        <Link locale={locale} href={`/${locale}/profile/settings`} className={classes.Navbar__sign__btn__Links_Link}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/MyAccount.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>
                                    {locale === 'en' ? 'Settings' : 'الإعدادات'}
                                </span>
                            </span>
                            <span>
                                <Image src={'/assets/home/ArrowRight.svg'} alt={'ArrowRight'} width={15} height={15}/>
                            </span>
                        </Link>

                        {/*  LINE TO SPLIT THE USER INFO  */}
                        <div className={classes.Navbar__sign__btn__Line}></div>

                        <Link locale={locale} href={"#"} className={classes.Navbar__sign__btn__Links_Link} onClick={onLogout}>
                            <span className={classes.Navbar__sign__btn__Links_Link__Left}>
                                <Image src={'/assets/home/Logout.svg'} alt={'dashboard'} width={20} height={20}/>
                                <span>
                                    {locale === 'en' ? 'Logout' : 'تسجيل الخروج'}
                                </span>
                            </span>
                        </Link>
                    </div>

                </div>
            </OverlayPanel>
        </div>
)
}