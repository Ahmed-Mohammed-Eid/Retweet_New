"use client";

// app/not-found.jsx
import Image from 'next/image';
import classes from './not-found.module.scss';
import { useRouter } from 'next/navigation';
import arrayToRedirect from "../../helpers/ArrayToRedirectHome";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

export default function NotFound() {
    // INIT ROUTER
    const router = useRouter();
    const pathname = usePathname();

    // GO BACK TO PREVIOUS PAGE
    function goBack() {
        router.back();
    }

    // GO TO HOME PAGE
    function goToHome() {
        router.push('/');
    }

    // REDIRECT TO HOME PAGE
    useEffect(() => {
        arrayToRedirect.forEach((item) => {
            if (item.includes(pathname)) {
                router.push('/');
            }
        });
    }, []);

    return (
        <div className={classes.NotFound404}>
            <Image src={'/assets/not-found/background.svg'} alt={'Not Found'} width={400} height={400}/>
            <h2>404, Page not founds</h2>
            <p>Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken .</p>
            <div className={classes.NotFound404__buttons}>
                <button onClick={goBack}>
                    <Image src={'/assets/not-found/ArrowLeft.svg'} alt={'Arrow'} width={20} height={20}/>
                    <span>Go back</span>
                </button>
                <button onClick={goToHome}>
                    <Image src={'/assets/not-found/House.svg'} alt={'Home'} width={20} height={20}/>
                    <span>Go to home</span>
                </button>
            </div>
        </div>
    );
}
