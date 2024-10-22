import classes from "./Description.module.scss";
import Hint from "../../Hint/Hint";
import toast from "react-hot-toast";

export default function Description({
	locale,
	title,
	setTitle = () => {},
	description,
	setDescription = () => {},
}) {
	return (
		<div className={`${classes.DescriptionPart} p-12 rounded bg-white`}>
			<h2>{locale === "en" ? "Description" : "وصف"}</h2>
			<Hint
				texts={
					locale === "en"
						? [
								"Describe the listing in more details you want people to know",
								"Details increase your chance of getting the right buyer",
						  ]
						: [
								"صف القائمة بمزيد من التفاصيل التي تريد أن يعرفها الناس",
								"التفاصيل تزيد من فرصتك في الحصول على المشتري المناسب",
						  ]
				}
				locale={locale}
			/>

			<div className={"flex flex-col gap-2 mt-8"}>
				<div className={"flex flex-col gap-2"}>
					<label htmlFor={"title"}>
						{locale === "en" ? "Listing Title" : "عنوان القائمة"}
					</label>
					<input
						type="text"
						id={"title"}
						placeholder={
							locale === "en" ? "Listing Title" : "عنوان القائمة"
						}
						min={0}
						max={100}
						value={title}
						onChange={(e) => {
							// VALIDATION NEEDED FOR TITLE TO BE LESS THAN 100 CHARACTERS
							const value = e.target.value;
							if (value.length > 100) {
								return toast.error(locale === "en" ? "Title must be less than 100 characters" : "يجب أن يكون العنوان أقل من 100 حرف")
							}

							setTitle(e.target.value)
						}}
						autoComplete={"off"}
					/>
					<span className={"hint"}>{title?.length || 0}-100</span>
				</div>
				<div className={"flex flex-col gap-2"}>
					<label htmlFor={"description"}>
						{locale === "en" ? "Listing Description" : "وصف القائمة"}
					</label>
					<textarea
						id={"description"}
						placeholder={
							locale === "en"
								? "Listing Description"
								: "وصف القائمة"
						}
						value={description}
						onChange={(e) => {
							// VALIDATION NEEDED FOR DESCRIPTION TO BE LESS THAN 5000 CHARACTERS
							const value = e.target.value;
							if (value.length > 5000) {
								return toast.error(locale === "en" ? "Description must be less than 5000 characters" : "يجب أن يكون الوصف أقل من 5000 حرف")
							}

							setDescription(e.target.value)
						}}
						autoComplete={"off"}
					/>
					<span className={"hint"}>{description?.length || 0}-5000</span>
				</div>
			</div>
		</div>
	);
}
