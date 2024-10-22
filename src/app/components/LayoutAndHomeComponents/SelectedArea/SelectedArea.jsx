"use client";
import Image from "next/image";
import React from "react";

export default function SelectedArea({className, country}) {
    return (
        <>
            {country && (
                <div className={`flex justify-start items-center gap-2`}>
                    <Image src={'/assets/home/Location.svg'} alt={'location'} width={18} height={18}/>
                    <div className={`${className} flex justify-start items-center gap-2 ml-2`}>
                        {/*{country && (<Image src={country?.flag} alt={'country flag'} width={18} height={18}/>)}*/}
                        <span>{country?.country}</span>
                    </div>
                </div>
            )}
        </>
    )
}