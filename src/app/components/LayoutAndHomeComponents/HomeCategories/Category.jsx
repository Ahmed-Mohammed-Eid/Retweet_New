import Image from "next/image";
import Link from "next/link";
import classes from './HomeCategory.module.scss'

// REDUX
import {useDispatch} from 'react-redux';
import {updateFilterStates} from "../../../../../redux/Slices/filterSlice";

// ROUTER
import {useRouter} from 'next/navigation';


export default function HomeCategory({category, locale}) {

    // ROUTER
    const router = useRouter();

    // REDUX
    const dispatch = useDispatch();


    const handleClick = (e) => {
        e.preventDefault();

        dispatch(updateFilterStates({
            categoryId: category._id,
            subCategoryId: "",
            item: "",
            location: "",
            minPrice: "",
            maxPrice: "",
            page: 1,
        }));

        router.push(`/${locale}/listings/ads/all`);
    }



    return (
        <Link className={classes.HomeCategory} onClick={handleClick} href={`/${locale}/listings`}>
            <div className={classes.HomeCategory__Img}>
                <Image src={category.categoryImage} alt={'category'} width={75} height={75} loading={'eager'}/>
            </div>
            <h2>{locale === 'en'? category.categoryNameEn: category.categoryName}</h2>
        </Link>
    )
}