import React from 'react';
import Image from 'next/image';
import classes from './ContactPage.module.scss';

const ContactInfo = ({imgSrc, imgAlt, children}) => {
    return (

        <div className="flex items-center flex-col text-sm font-medium leading-5 text-white whitespace-nowrap max-md:mt-10">
            <div className="self-center aspect-square w-[63px]">
                <Image loading="lazy" src={imgSrc} alt={imgAlt} width={63} height={63}/>
            </div>
            <div className="mt-4">{children}</div>
        </div>
    )
}

const ContactPage = () => {
    return (
        <section className="flex justify-center items-center py-12 bg-transparent">
            <section
                className="flex flex-col items-center md:px-20 py-12 my-12 w-full bg-sky-500 rounded-md max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <header className="flex gap-0 mt-12 text-sm text-white max-md:mt-10">
                    <div className="w-1 h-[23px]"/>
                    <div className="justify-center px-2.5 py-1 aspect-[3.09] bg-gray-200 bg-opacity-10">Contact</div>
                </header>

                <h1 className="mt-3.5 text-4xl font-semibold text-center text-white">Get in touch with us</h1>

                <div className="py-px mt-10 max-w-full w-[681px] mb-8">
                    <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0 max-md: m-auto">
                        <ContactInfo
                            imgSrc={"/assets/contact/01.svg"} imgAlt="Email icon"
                        >
                            Contact@retweet.com
                        </ContactInfo>

                        <ContactInfo
                            imgSrc="/assets/contact/02.svg" imgAlt="Phone icon"
                        >
                            (00) 112 365 489
                        </ContactInfo>

                        <ContactInfo
                            imgSrc="/assets/contact/03.svg" imgAlt="Clock icon"
                        >
                            Mon - Sat 9.00 - 18.00 <br/> Sunday Closed
                        </ContactInfo>
                    </div>
                </div>
                <form className="flex flex-row justify-between flex-wrap gap-4 md:p-8 rounded-md max-w-[750px] mx-auto w-full bg-transparent border-0">
                    <div className="flex flex-col w-[100%] md:w-[48%]">
                        <input type="text" id="yourName" name="yourName" required placeholder="Your name*"
                               className="form-input px-4 py-4 border border-white bg-transparent rounded-md focus:outline-none text-white caret-white placeholder-white"/>
                    </div>
                    <div className="flex flex-col w-[100%] md:w-[48%]">
                        <input type="email" id="yourEmail" name="yourEmail" required placeholder="Email*"
                               className="form-input px-4 py-4 border border-white bg-transparent rounded-md focus:outline-none text-white caret-white placeholder-white"/>
                    </div>
                    {/*PHONE NUMBER*/}
                    <div className="flex flex-col w-[100%] md:w-[48%]">
                        <input type="tel" id="yourPhone" name="yourPhone" placeholder="Phone number*"
                               className="form-input px-4 py-4 border border-white bg-transparent rounded-md focus:outline-none text-white caret-white placeholder-white"/>
                    </div>
                    {/*CITY*/}
                    <div className="flex flex-col w-[100%] md:w-[48%]">
                        <input type="text" id="yourCity" name="yourCity" placeholder="City*"
                               className="form-input px-4 py-4 border border-white bg-transparent rounded-md focus:outline-none text-white caret-white placeholder-white"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea id="yourMessage"
                                  name="yourMessage"
                                  required
                                  placeholder="Your message"
                                  className="form-input px-4 py-4 border border-white bg-transparent rounded-md focus:outline-none text-white caret-white placeholder-white"
                                  rows="4">

                        </textarea>
                    </div>
                    <button type="submit"
                            className={`self-end px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md ${classes.Submit}`}>
                        Submit Message
                    </button>
                </form>
            </section>
        </section>
    );
};

export default ContactPage;