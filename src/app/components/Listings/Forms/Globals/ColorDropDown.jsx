import React from "react";
import {Dropdown} from 'primereact/dropdown';

import {ColorPicker} from "primereact/colorpicker";

export default function ColorDropDown({
                                         locale,
                                         selectedColor,
                                         setSelectedColor = (car) => {
                                         }
                                     }) {

    const selectedColorTemplate = (option, props) => {
        if (option) {
            return (
                <div className={'flex justify-start gap-2 items-center'}>
                    <ColorPicker value={option.hex} disabled={true} style={{width: '30px', height: '30px'}}/>
                    <span>{option.label}</span>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className={'flex justify-start gap-2 items-center'}>
                <ColorPicker value={option.hex} disabled={true} style={{width: '30px', height: "30px"}}/>
                <span>{option.label}</span>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.value)}
                options={[
                    {label: locale === 'en' ? 'White' : 'أبيض', value: 'White', hex: '#ffffff'},
                    {label: locale === 'en' ? 'Black' : 'أسود', value: 'Black', hex: '#000000'},
                    {label: locale === 'en' ? 'Gray' : 'رمادي', value: 'Gray', hex: '#808080'},
                    {label: locale === 'en' ? 'Silver' : 'فضي', value: 'Silver', hex: '#C0C0C0'},
                    {label: locale === 'en' ? 'Red' : 'أحمر', value: 'Red', hex: '#FF0000'},
                    {label: locale === 'en' ? 'Blue' : 'أزرق', value: 'Blue', hex: '#0000FF'},
                    {label: locale === 'en' ? 'Green' : 'أخضر', value: 'Green', hex: '#008000'},
                    {label: locale === 'en' ? 'Yellow' : 'أصفر', value: 'Yellow', hex: '#FFFF00'},
                    {label: locale === 'en' ? 'Brown' : 'بني', value: 'Brown', hex: '#A52A2A'},
                    {label: locale === 'en' ? 'Orange' : 'برتقالي', value: 'Orange', hex: '#FFA500'},
                    {label: locale === 'en' ? 'Purple' : 'أرجواني', value: 'Purple', hex: '#800080'},
                    {label: locale === 'en' ? 'Pink' : 'وردي', value: 'Pink', hex: '#FFC0CB'},
                    {label: locale === 'en' ? 'Gold' : 'ذهبي', value: 'Gold', hex: '#FFD700'},
                    {label: locale === 'en' ? 'Beige' : 'بيج', value: 'Beige', hex: '#F5F5DC'},
                    {label: locale === 'en' ? 'Cream' : 'كريمي', value: 'Cream', hex: '#FFFDD0'},
                    {label: locale === 'en' ? 'Turquoise' : 'تركواز', value: 'Turquoise', hex: '#40E0D0'},
                    {label: locale === 'en' ? 'Maroon' : 'مارون', value: 'Maroon', hex: '#800000'},
                    {label: locale === 'en' ? 'Lime' : 'ليموني', value: 'Lime', hex: '#00FF00'},
                    {label: locale === 'en' ? 'Teal' : 'أزرق مخضر', value: 'Teal', hex: '#008080'},
                    {label: locale === 'en' ? 'Indigo' : 'نيلي', value: 'Indigo', hex: '#4B0082'},
                    {label: locale === 'en' ? 'Magenta' : 'قرمزي', value: 'Magenta', hex: '#FF00FF'},
                    {label: locale === 'en' ? 'Salmon' : 'سلموني', value: 'Salmon', hex: '#FA8072'},
                    {label: locale === 'en' ? 'Coral' : 'مرجاني', value: 'Coral', hex: '#FF7F50'},
                    {label: locale === 'en' ? 'Olive' : 'زيتوني', value: 'Olive', hex: '#808000'},
                    {label: locale === 'en' ? 'Cyan' : 'سماوي', value: 'Cyan', hex: '#00FFFF'},
                    {label: locale === 'en' ? 'Azure' : 'أزرق سماوي', value: 'Azure', hex: '#007FFF'},
                    {label: locale === 'en' ? 'Aquamarine' : 'زمردي', value: 'Aquamarine', hex: '#7FFFD4'},
                    {label: locale === 'en' ? 'Khaki' : 'كاكي', value: 'Khaki', hex: '#F0E68C'},
                    {label: locale === 'en' ? 'Ivory' : 'عاجي', value: 'Ivory', hex: '#FFFFF0'},
                    {label: locale === 'en' ? 'Lavender' : 'لافندر', value: 'Lavender', hex: '#E6E6FA'},
                    {label: locale === 'en' ? 'Peach' : 'خوخي', value: 'Peach', hex: '#FFE5B4'},
                    {label: locale === 'en' ? 'Plum' : 'برقوقي', value: 'Plum', hex: '#DDA0DD'},
                    {label: locale === 'en' ? 'Slate' : 'صواني', value: 'Slate', hex: '#708090'},
                    {label: locale === 'en' ? 'Silver' : 'فضي', value: 'Silver', hex: '#C0C0C0'},
                    {label: locale === 'en' ? 'Tan' : 'بني فاتح', value: 'Tan', hex: '#D2B48C'},
                    {label: locale === 'en' ? 'Wheat' : 'قمحي', value: 'Wheat', hex: '#F5DEB3'},
                    {label: locale === 'en' ? 'Bisque' : 'بيسك', value: 'Bisque', hex: '#FFE4C4'},
                    {label: locale === 'en' ? 'Linen' : 'كتان', value: 'Linen', hex: '#FAF0E6'},
                    {label: locale === 'en' ? 'Periwinkle' : 'أزرق اللون', value: 'Periwinkle', hex: '#CCCCFF'},
                    {label: locale === 'en' ? 'Crimson' : 'قرمزي', value: 'Crimson', hex: '#DC143C'},
                    {label: locale === 'en' ? 'Fuchsia' : 'فوشيا', value: 'Fuchsia', hex: '#FF00FF'},
                    {label: locale === 'en' ? 'Mauve' : 'موف', value: 'Mauve', hex: '#E0B0FF'},
                    {label: locale === 'en' ? 'Puce' : 'بيوس', value: 'Puce', hex: '#CC8899'},
                    {label: locale === 'en' ? 'Buff' : 'بوف', value: 'Buff', hex: '#F0DC82'},
                    {label: locale === 'en' ? 'Celadon' : 'سيلادون', value: 'Celadon', hex: '#ACE1AF'},
                ]}
                optionLabel={'name'}
                placeholder="Select a Car Color"
                valueTemplate={selectedColorTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-full border"
            />
        </div>
    )
}
