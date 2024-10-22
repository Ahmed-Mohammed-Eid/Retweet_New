"use client";

import Link from "next/link";
import Image from "next/image";
import classes from './SecondaryNavigation.module.scss';

export default function SecondaryNavigation({arrayOfLinks, locale}) {
    return (
        <div className={`flex flex-col items-center justify-center w-full ${classes.SecondaryNavigation} py-3 px-5`}>
            <div className={'flex justify-items-start items-center gap-2 w-full flex-wrap'}>
                {
                    arrayOfLinks.map((link, index) => {
                        return (
                            <>
                                <Link
                                    href={link.href}
                                    onClick={(e) => {
                                        !link.arrow ? e.preventDefault() : '';
                                    }}
                                    key={index}
                                    className={'flex justify-items-start items-center gap-1'}>
                                    {link.icon ? <Image src={link.icon} width={18} height={18} alt={'home'}/> : ''} {link.text || ''}
                                </Link>
                                {link.arrow ? <Image src={'/assets/home/CaretRight.svg'} width={12} height={12} alt={'arrow'}/> : ''}
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
}