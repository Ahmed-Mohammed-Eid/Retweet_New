import classes from "./CategoryInfo.module.scss";
import {useRouter} from "next/navigation";

export default function CategoryInfo({
                                         locale,
                                         categoryName,
                                         subCategoryName,
                                     }) {


    // ROUTER
    const router = useRouter();


    return (
        <div className={`${classes.CategoryPart} p-12 rounded`}>
            <h2>
                {locale === 'en' ? 'Category' : 'الفئة'}
            </h2>
            <p>
                <span>{locale === 'en' ? `You are adding a ${categoryName} in the ${subCategoryName} category` : `أنت تضيف ${categoryName} في فئة ${subCategoryName}`}</span>
                <span
                    onClick={() => router.push(`/${locale}/listings/select-category`)}
                >
                        {locale === 'en' ? 'Change' : 'تغيير'}
                    </span>
            </p>
        </div>
    )
}