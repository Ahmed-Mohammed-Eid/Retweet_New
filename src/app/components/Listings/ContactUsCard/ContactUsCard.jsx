import Image from 'next/image';

const CallUsNowButton = ({text, locale, buttonBg}) => (
    <div
        className="flex gap-2 justify-center self-start px-6 mt-6 text-sm tracking-normal leading-10 text-white uppercase whitespace-nowrap  rounded-md max-md:px-5"
        style={{backgroundColor: buttonBg || '#FF6B00'}}
    >
        <button className="grow flex gap-2 button--effect">
            <div className="uppercase">{text}</div>
            <span className={"shrink-0 my-auto w-5 aspect-square"}>{locale === 'en' ? '←' : '→' }</span>
        </button>
    </div>
);

const CallUsNowSection = ({callUsNowData}) => {
    return (
        <div className="p-8 bg-white rounded shadow-2xl max-w-[536px] max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                    <div
                        className="flex justify-center items-center px-6 mx-auto w-24 h-24 rounded max-md:px-5 max-md:mt-10"
                        style={{backgroundColor: callUsNowData.iconBgColor}}
                    >
                        <Image src={callUsNowData.iconSrc} width={48} height={48} alt="Call us now icon"/>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow font-bold leading-[133%] text-zinc-900 max-md:mt-10">
                        <div className="text-lg capitalize whitespace-nowrap">{callUsNowData.title}</div>
                        <div className="mt-2 text-base leading-5 text-gray-500">{callUsNowData.description}</div>
                        <div className="mt-4 text-2xl">{callUsNowData.phoneNumber}</div>
                        <CallUsNowButton text={callUsNowData.buttonText} iconSrc={callUsNowData.buttonIconSrc} buttonBg={callUsNowData.buttonBg}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallUsNowSection;
