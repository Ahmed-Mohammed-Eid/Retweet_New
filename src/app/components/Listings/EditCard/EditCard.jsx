"use client";

import Image from "next/image";
import Link from "next/link";

// Helpers
import { formatePrice } from "../../../../../helpers/formatePrice";

// ROUTER
import {useRouter} from "next/navigation";


function EditCard({ product, locale, authenticated, onDelete }) {

    // ROUTER
    const router = useRouter();


    return (
        <div className="">
            <article className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link locale={locale} href={`/${locale}/listings/${product?._id}`} passHref>
                    <Image
                        src={product?.listingImages[0] || "/assets/listings/no-image.jpeg"}
                        alt={product?.listingDescription || product?.listingTitle}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                    />
                </Link>
                <div className="p-4">
                    <h2 className="text-xl font-bold uppercase">
                        <Link locale={locale} href={`/${locale}/listings/${product?._id}`} passHref>
                            {product?.listingTitle}
                        </Link>
                    </h2>
                    {/*<p className="mt-2 text-gray-600">{product?.listingDescription}</p>*/}
                    <p className="mt-2 text-gray-500">
                        {(product?.neighbourhood ? product?.neighbourhood + " - " : "") + product?.listingCity}
                    </p>
                    <div className="flex flex-col-reverse mt-4">
                        <div className="flex flex-col gap-1">
                            <ContactButton phone={product?.contactPhone} />
                        </div>
                        <div className="text-xl font-bold">
                            {product?.listingCurrency} {formatePrice(product?.listingPrice || 0)}
                        </div>
                    </div>
                    {authenticated && (
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={() => {
                                    router.push(`/${locale}/listings/select-images?category=${product?.categoryId}&subCategory=${product?.subCategoryId}&formType=${product?.formType}&imagesId=${product?.imagesId}&listingId=${product?._id}&flag=edit`)
                                }}
                                className="px-4 py-2 bg-blue-500 transition-transform text-white rounded hover:bg-blue-600 w-[50%] active:scale-95">
                                {locale === 'en' ? 'Edit' : 'تعديل'}
                            </button>
                            <button
                                onClick={onDelete}
                                className="px-4 py-2 bg-red-500 transition-transform text-white rounded hover:bg-red-600 w-[50%] active:scale-95">
                                {locale === 'en' ? 'Delete' : 'حذف'}
                            </button>
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
}

function ContactButton({ phone }) {
    return (
        <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-transform active:scale-95"
        >
            <Image
                src="/assets/listings/logos_whatsapp-icon.svg"
                alt="Phone icon"
                width={24}
                height={24}
                className="mr-2"
            />
            <span>{phone}</span>
        </a>
    );
}

export default EditCard;
