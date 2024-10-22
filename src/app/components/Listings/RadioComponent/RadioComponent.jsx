"use client";
import React, {useId} from 'react';

import classes from './RadioComponent.module.scss';

export default function RadioComponent({
                                           locale, value, onChange = () => {
    }, checked, disabled = false, name, textAr, textEn
                                       }) {
    // ID
    const id = useId();


    return (
        <label className={`${classes.RadioContainer}`} htmlFor={id}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            <span className={classes.RadioCircle}>
                <span className={classes.RadioOutsideCircle}>
                    <span className={classes.RadioInsideCircle}> </span>
                </span>
            </span>
            <span className={classes.RadioText}>{locale === 'en' ? textEn : textAr}</span>
        </label>
    )
}