import Image from "next/image";

export default function Footer({locale}) {
    return (
        <div className="text-white mt-auto px-4 py-4" style={{backgroundColor: "rgba(25, 49, 62, 1)"}}>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between gap-2">
                    <div className="w-full md:w-1/5 text-center md:text-left py-6">
                        <div className="font-bold text-xl text-white">
                            <Image src="/assets/home/logo-white.png" alt="logo" width={178} height={32}/>
                        </div>
                        <ul className="list-reset text-gray-500 text-sm pt-3 flex flex-col">
                            <li className="inline-block py-2 px-1">
                                <a href={`${locale}/profile/account`} className="text-gray-500 no-underline hover:underline">Account</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`${locale}/profile/ads`} className="text-gray-500 no-underline hover:underline">My Account</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`${locale}/auth/login`} className="text-gray-500 no-underline hover:underline">Login/Register</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`${locale}/profile/favourites`} className="text-gray-500 no-underline hover:underline">Favourites</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5 text-center md:text-left py-6">
                        <h2 className="font-bold text-xl text-white uppercase">Quick links</h2>
                        <ul className="list-reset text-gray-500 text-sm pt-3 flex flex-col">
                            <li className="inline-block py-2 px-1">
                                <a href="/" className="text-gray-500 no-underline hover:underline">Home</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`/${locale}/about`} className="text-gray-500 no-underline hover:underline">About Us</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`/${locale}/contact`} className="text-gray-500 no-underline hover:underline">Contact Us</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`/${locale}/profile/notifications`} className="text-gray-500 no-underline hover:underline">Notification</a>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <a href={`/${locale}/profile/messages`} className="text-gray-500 no-underline hover:underline">Chats</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/5 text-center md:text-left py-6">
                        <h2 className="font-bold text-xl text-white uppercase">Contact US</h2>
                        <ul className="list-reset text-gray-500 text-sm pt-3 flex flex-col">
                            <li className="inline-block py-2 px-1">
                                <div className={'flex justify-start align-top gap-2'}>
                                    {/*  ICON  */}
                                    <div className={"w-auto py-1"}>
                                        <Image src={'/assets/home/whatsapp.svg'} alt={'icon'} width={20} height={20}/>
                                    </div>
                                    {/*  TEXT  */}
                                    <div className={"grow flex flex-col text-white"}>
                                        <span>Whats App</span>
                                        <a href="https://wa.me/96550563399" target={"_blank"}>+965 505 63399</a>
                                    </div>
                                </div>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <div className={'flex justify-start align-top gap-2'}>
                                    {/*  ICON  */}
                                    <div className={"w-auto py-1"}>
                                        <Image src={'/assets/home/Call.svg'} alt={'icon'} width={20} height={20}/>
                                    </div>
                                    {/*  TEXT  */}
                                    <div className={"grow flex flex-col text-white"}>
                                        <span>Call Us</span>
                                        <a href="tel:+96550563399">+965 505 63399</a>
                                    </div>
                                </div>
                            </li>
                            <li className="inline-block py-2 px-1">
                                <div className={'flex justify-start align-top gap-2'}>
                                    {/*  ICON  */}
                                    <div className={"w-auto py-1"}>
                                        <Image src={'/assets/home/email.svg'} alt={'icon'} width={20} height={20}/>
                                    </div>
                                    {/*  TEXT  */}
                                    <div className={"grow flex flex-col text-white"}>
                                        <span>Email</span>
                                        <a href="mailto:like50563399@gmail.com">like50563399@gmail.com</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}