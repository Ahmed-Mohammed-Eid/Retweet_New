"use client";
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import classes from './MegaMenu.module.scss';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// REDUX
import {useDispatch} from 'react-redux';
import {updateFilterStates, clearSpecificFields} from "../../../../../redux/Slices/filterSlice";

export default function MegaMenuComponent({ locale }) {

    // REDUX
    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.BASE_URL}/home/categories`);
                setCategories(response.data?.categories || []);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const router = useRouter();

    const getMenuItems = (category) => {
        return category.subCategories.map((subCategory) => ({
            label: locale === 'en' ? subCategory.subCategoryNameEn : subCategory.subCategoryName,
            items: (locale === 'en' ? subCategory.itemsEn : subCategory.items).map((item) => ({
                label: item,
                command: () => {
                    dispatch(updateFilterStates({
                        categoryId: category._id,
                        subCategoryId: subCategory._id,
                        item,
                    }));
                    dispatch(clearSpecificFields(['item']))
                    router.push(`/${locale}/listings/ads/${category.formType}`);
                },
            })),
            command: () => {
                dispatch(updateFilterStates({
                    categoryId: category._id,
                    subCategoryId: subCategory._id,
                }));
                router.push(`/${locale}/listings/ads/${category.formType}`);
            },
        }));
    };

    const parentCategories = categories.slice(0, 4);
    const otherCategories = categories.slice(4);

    const items = parentCategories.map((category) => ({
        label: locale === 'en' ? category.categoryNameEn : category.categoryName,
        items: getMenuItems(category),
        command: () => {
            dispatch(updateFilterStates({
                categoryId: category._id,
            }));
            dispatch(clearSpecificFields(['subCategoryId', 'item']));
            router.push(`/${locale}/listings/ads/${category.formType}`);
        },
    }));

    if (otherCategories.length > 0) {
        items.push({
            label: locale === 'en' ? 'More' : 'المزيد',
            items: otherCategories.map((category) => ({
                label: locale === 'en' ? category.categoryNameEn : category.categoryName,
                items: getMenuItems(category),
                command: () => {
                    dispatch(updateFilterStates({
                        categoryId: category._id,
                    }));
                    dispatch(clearSpecificFields(['subCategoryId', 'item']));
                    router.push(`/${locale}/listings/ads/${category.formType}`);
                },
            }))
        });
    }

    return <Menubar model={items} className={classes.MegaMenu} />;
}
