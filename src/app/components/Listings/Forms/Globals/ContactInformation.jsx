import classes from "./ContactInformation.module.scss";
import Hint from "../../Hint/Hint";
import { Dropdown } from "primereact/dropdown";

// IMPORT COUNTRY CODES JSON
import countryCodes from "../../../../../../Json_Data/CountryCode/CountryCode.json";

export default function ContactInformation({
	locale,
	cuntryCode,
	setCountryCode = () => {},
	phoneNumber,
	setPhoneNumber = () => {},
}) {
	return (
		<div
			className={`${classes.ContactInformationPart} p-12 rounded bg-white`}
		>
			<h2>{locale === "en" ? "Contact Information" : "معلومات الاتصال"}</h2>
			<Hint
				texts={
					locale === "en"
						? [
								"Set the contact information for your listing",
								"Contact information should be accurate",
						  ]
						: [
								"قم بتعيين معلومات الاتصال لقائمتك",
								"يجب أن تكون معلومات الاتصال دقيقة",
						  ]
				}
				locale={locale}
			/>

			<div className={"grid grid-cols-8 items-end gap-2 mt-8"}>
				<div className={"flex col-span-2 flex-col"}>
					<label htmlFor={"country_code"}>
						{locale === "en" ? "Country Code" : "كود الدولة"}
					</label>
					{/*<input*/}
					{/*    type="text"*/}
					{/*    id={'country_code'}*/}
					{/*    value={cuntryCode}*/}
					{/*    onChange={(e) => {*/}
					{/*        setCountryCode(e.target.value);*/}
					{/*    }}*/}
					{/*    autoComplete={'off'}*/}
					{/*/>*/}
					<Dropdown
						id={"country_code"}
						value={cuntryCode}
						options={countryCodes}
						onChange={(e) => {
							setCountryCode(e.value);
						}}
						optionLabel="name"
						optionValue={"dial_code"}
						placeholder={
							locale === "en" ? "Country Code" : "كود الدولة"
						}
						filter
						filterBy="name"
						style={{
							width: "100%",
							border: "1px solid #e5e7eb",
						}}
					/>
				</div>
				<div className={"flex flex-col col-span-6"}>
					<label htmlFor={"phone"}>
						{locale === "en" ? "Mobile number" : "رقم الهاتف"}
					</label>
					<input
						type="text"
						id={"phone"}
						placeholder={
							locale === "en" ? "Mobile number" : "رقم الهاتف"
						}
						value={phoneNumber || ""}
						onChange={(e) => {
							setPhoneNumber(e.target.value);
						}}
						autoComplete={"off"}
					/>
				</div>
			</div>
		</div>
	);
}
