import React from "react";
import Image from 'next/image';

// Reusable Components
const HighlightFeature = ({iconSrc, description, alt}) => {
    return (
        <div className="flex gap-3 mt-4 whitespace-nowrap">
            <Image src={iconSrc} alt={alt} width={24} height={24} />
            <div className="grow">{description}</div>
        </div>
    );
}

const AboutUsPage = () => {
    // Features could ideally come from a CMS or static file in real applications
    const features = [
        {
            iconSrc: "/assets/about/01.svg",
            description: "Great 24/7 customer services.",
            alt: "Customer Service"
        },
        {
            iconSrc: "/assets/about/01.svg",
            description: "Over 1 Million Electronics Products",
            alt: "Electronics"
        },
        {
            iconSrc: "/assets/about/01.svg",
            description: "600+ Dedicated employees.",
            alt: "Employees"
        }
    ];

    return (
        <main className="flex justify-center items-center py-12 bg-white max-md:px-5">
            <section className="flex flex-col mt-9 w-full max-w-[1206px] max-md:max-w-full">
                <header className="px-0.5 max-md:max-w-full mb-16">
                    <article className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <aside className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-start self-stretch my-auto text-base leading-6 text-zinc-900 max-md:mt-10 max-md:max-w-full">
                                <header className="flex gap-4 text-2xl font-bold leading-5 text-amber-500">
                                    <div className="w-5 h-10 bg-amber-500 rounded"></div>
                                    <h2 className="flex-auto my-auto">About Us</h2>
                                </header>
                                <h3 className="mt-5 text-4xl font-bold tracking-widest leading-10 text-black whitespace-nowrap">WHO WE ARE</h3>
                                <p className="self-stretch mt-7 text-xl font-medium capitalize text-neutral-600 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.
                                </p>
                                <p className="self-stretch mt-5 text-xl font-medium capitalize text-neutral-600 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.
                                </p>
                                {features.map((feature, index) => (
                                    <HighlightFeature key={index} iconSrc={feature.iconSrc} altText={feature.alt} description={feature.description} />
                                ))}
                            </div>
                        </aside>
                        <aside className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                            <Image src="/assets/about/01.png" alt="" width={500} height={462} layout="responsive" />
                        </aside>
                    </article>
                </header>
                <Image src="/assets/about/02.png" alt="" width={1206} height={458} layout="responsive" />
                <footer className="mt-16 max-md:mt-10 max-md:max-w-full">
                    <nav className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                            <Image src="/assets/about/03.png" alt="" width={300} height={440} layout="responsive" />
                        </aside>
                        <aside className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow mt-11 max-md:mt-10">
                                <Image src="/assets/about/04.png" alt="" width={262} height={328} layout="responsive" className={'mb-4'} />
                                <Image src="/assets/about/05.png" alt="" width={262} height={286} layout="responsive" />
                            </div>
                        </aside>
                        <aside className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
                                <h3 className="text-4xl tracking-widest leading-10 text-black max-md:max-w-full">WHO WE ARE</h3>
                                <p className="mt-16 text-2xl leading-8 text-neutral-600 max-md:mt-10 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                                </p>
                                <div className="flex gap-2.5 justify-center self-start px-9 py-4 mt-11 text-xl leading-6 whitespace-nowrap bg-amber-400 rounded-md text-neutral-50 max-md:px-5 max-md:mt-10">
                                    <Image src="/assets/about/02.svg" alt="Contact Icon" width={24} height={24} />
                                    <div className="grow">Contact Us</div>
                                </div>
                            </div>
                        </aside>
                    </nav>
                </footer>
            </section>
        </main>
    );
}

export default AboutUsPage;