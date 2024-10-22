import Image from 'next/image';
import classes from './CategoryItem.module.scss';

export default function CategoryItem({image, category, icon, clicked, hasNoImage}) {
    return (
        <div className={`${classes.CategoryItem}`} onClick={clicked}>
            {!hasNoImage && (<Image src={image} alt={category} width={20} height={20} className={classes.CategoryImage}/>)}
            <p className={`${classes.CategoryText}`}>{category}</p>
            {/*  ARROW ICON  */}
            <Image src={icon} alt={'Arrow Icon'} width={20} height={20}/>
        </div>
    )
}