"use client";

import React, {useEffect, useState} from 'react';
import classes from './MainDetails.module.scss';
import Image from 'next/image';

import {useRouter} from "next/navigation";
// REDUX
const {useDispatch} = require("react-redux");
import {updateCreatorId} from "../../../../../../redux/Slices/chatSlice";


export default function MainDetails({locale, listing, creatorId}) {
    const [mainImage, setMainImage] = useState();

    // REDUX
    const dispatch = useDispatch();

    // NEXT ROUTER
    const router = useRouter();

    // EFFECT TO SET MAIN IMAGE
    useEffect(() => {
        if (listing) {
            setMainImage(listing.listingImages[0]);
        }
    }, [listing]);

    // HANDLE MAIN IMAGE CHANGE
    const handleMainImageChange = (image) => {
        setMainImage(image);
    };

    return (
        <header className={classes.MainHeader}>
            <div className={`${classes.swipersContainer} mb-8`}>
                <div className={classes.mainImageContainer}>
                    <Image
                        className={classes.mainImage}
                        src={mainImage}
                        alt="Main Image"
                        width={600}
                        height={400}
                        style={{
                            borderRadius: '10px',
                            userSelect: 'none',
                        }}
                    />
                </div>

                {/*  VERTICAL SWIPER AS A THUMBS  */}
                <div className={classes.thumbsContainer}>
                    <div className={classes.thumbs}>
                        {listing?.listingImages.map((image, index) => (
                            <div
                                key={index}
                                className={classes.thumb}
                                onClick={() => handleMainImageChange(image)}
                                onMouseEnter={() => handleMainImageChange(image)}
                                style={{
                                    userSelect: 'none',
                                }}
                            >
                                <Image
                                    src={image}
                                    alt="Thumb Image"
                                    width={100}
                                    height={100}
                                    style={{
                                        borderRadius: '10px',
                                        userSelect: 'none',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    {/*  ARROWS TO NAVIGATE  */}
                    <div className={classes.arrows}>
                        <div
                            className={classes.arrowUp}
                            // ON CLICK CHANGE THE MAIN IMAGE TO THE PREVIOUS ONE
                            onClick={() => {
                                const currentIndex = listing.listingImages.indexOf(mainImage);
                                if (currentIndex > 0) {
                                    setMainImage(listing.listingImages[currentIndex - 1]);
                                } else {
                                    setMainImage(listing.listingImages[listing.listingImages.length - 1]);
                                }
                            }}
                        >
                            <Image
                                src="/assets/listings/upArrow.svg"
                                alt="Arrow Up"
                                width={15}
                                height={15}
                            />
                        </div>
                        <div
                            className={classes.arrowDown}
                            // ON CLICK CHANGE THE MAIN IMAGE TO THE NEXT ONE
                            onClick={() => {
                                const currentIndex = listing.listingImages.indexOf(mainImage);
                                if (currentIndex < listing.listingImages.length - 1) {
                                    setMainImage(listing.listingImages[currentIndex + 1]);
                                } else {
                                    setMainImage(listing.listingImages[0]);
                                }
                            }}
                        >
                            <Image
                                src="/assets/listings/downArrow.svg"
                                alt="Arrow Down"
                                width={15}
                                height={15}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*  PRICE && HINTS && WHATSAPP && CHAT && TWITTER  */}
            <div className={classes.rightContainer}>
                <div className={classes.priceContainer}>
                    <div className={classes.price}>
                    <span className={classes.priceText}>
                        {listing?.listingPrice} {listing?.listingCurrency}
                    </span>
                    </div>

                    <div className={classes.hints}>
                        <h2 className={classes.title}>
                            {locale === "en" ? "NoOptions Tips:" : "نصائح عامة:"}
                        </h2>
                        <ol className={classes.hintsList}>
                            <li className={classes.hint}>
                                {locale === "en" ? "Only meet in public places" : "التقي فقط في الأماكن العامة"}
                            </li>
                            <li className={classes.hint}>
                                {locale === "en" ? "Never pay or transfer money in advance" : "لا تدفع أو تحول الأموال مقدمًا"}
                            </li>
                            <li className={classes.hint}>
                                {locale === "en" ? "Inspect the product before you buy it" : "افحص المنتج قبل شرائه"}
                            </li>
                        </ol>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <button
                        className={"button--effect"}
                        onClick={() => {
                            window.open(`https://wa.me/${listing?.contactPhone}`);
                        }}
                    >
                        <Image
                            src="/assets/home/whatsapp.svg"
                            alt="Whatsapp"
                            width={20}
                            height={20}
                        />
                        {listing?.contactPhone}
                    </button>
                    <button
                        className={"button--effect"}
                        onClick={() => {
                            dispatch(updateCreatorId(creatorId));
                            router.push(`/${locale}/profile/messages?creatorId=${creatorId}`);
                        }}
                    >
                        <Image
                            src="/assets/listings/ChatCircleDots.svg"
                            alt="Chat"
                            width={20}
                            height={20}
                        />
                        {locale === "en" ? "Chat" : "دردشة"}
                    </button>
                    <button
                        className={"button--effect"}
                        onClick={() => {
                            window.open(`https://twitter.com/intent/tweet?text=${listing?.listingTitle}&url=${window.location.href}&hashtags=retweet,ريتويت&via=Retweet___com`);
                        }}
                    >
                        <Image
                            src="/assets/listings/twitter.png"
                            alt="Twitter"
                            width={20}
                            height={20}
                        />
                        {locale === "en" ? "Share" : "شارك"}
                    </button>
                </div>
            </div>
        </header>
    );
}
