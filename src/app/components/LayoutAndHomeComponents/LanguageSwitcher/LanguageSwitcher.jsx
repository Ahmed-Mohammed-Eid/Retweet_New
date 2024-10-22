"use client";

import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { ChevronDownIcon } from "primereact/icons/chevrondown";
import { ChevronRightIcon } from "primereact/icons/chevronright";
import { usePathname, useSelectedLayoutSegments, useRouter } from "next/navigation";
import Image from "next/image";

function LanguageSwitcher({ className, locale }) {
    const pathname = usePathname();
    const router = useRouter();
    const urlSegments = useSelectedLayoutSegments();

    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const localeLanguages = [
        { name: "عربي", nameEn: "Arabic", code: "ar" },
        { name: "إنجليزي", nameEn: "English", code: "en" },
    ];

    const selectedLanguageTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Image src={`/assets/home/${option.code}.svg`} alt={option.name} width={18} height={18} />
                    <div>{locale === "ar" ? option.name : option.nameEn}</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Image src={`/assets/home/${option.code}.svg`} alt={option.name} width={18} height={18} />
                <div>{locale === "ar" ? option.name : option.nameEn}</div>
            </div>
        );
    };

    const onLanguageChange = (e) => {
        // ADD DATA-LOADING TO THE BODY
        document.body.setAttribute("data-loading", "true");

        const selectedLang = e.value;
        setSelectedLanguage(selectedLang);

        // Replace the first segment of the URL with the selected language
        let newUrlSegments = [...urlSegments];
        newUrlSegments = [selectedLang.code, ...newUrlSegments];
        
        // Navigate to the new URL
        router.push(`/${newUrlSegments.join("/")}`);
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={localeLanguages.find((lang) => lang.code === locale)}
                onChange={onLanguageChange}
                options={localeLanguages}
                optionLabel="name"
                placeholder="Select a Language"
                valueTemplate={selectedLanguageTemplate}
                itemTemplate={countryOptionTemplate}
                className={className}
                dropdownIcon={(opts) => {
                    return opts.iconProps["data-pr-overlay-visible"] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                }}
            />
        </div>
    );
}

export default LanguageSwitcher;
