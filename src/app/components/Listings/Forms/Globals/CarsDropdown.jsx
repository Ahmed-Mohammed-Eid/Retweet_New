import React from "react";
import {Dropdown} from 'primereact/dropdown';
import Image from 'next/image';

// import cars from '@/public/assets/cars/data.json';
import cars from '../../../../../../public/assets/cars/data.json';

export default function CarsDropdown({
                                         locale,
                                         selectedCar,
                                         setSelectedCar = (car) => {
                                         }
                                     }) {

    const selectedCarTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <Image alt={option.name}
                           src={option.image?.localOriginal || option.image?.localOptimized || option.image?.localThumb}
                           className={`mr-2 flag`}
                           style={{width: '20px', height: '20px'}}
                           width={20}
                           height={20}
                    />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <Image
                    alt={option.name}
                    src={option.image?.localOriginal || option.image?.localOptimized || option.image?.localThumb}
                    className={`mr-2 flag`}
                    width={20}
                    height={20}
                    style={{width: '20px', height: '20px'}}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.value)}
                options={cars}
                filter={true}
                optionLabel={'name'}
                optionValue={'name'}
                placeholder="Select a Car Type"
                valueTemplate={selectedCarTemplate}
                itemTemplate={countryOptionTemplate}
                className="w-full border"
            />
        </div>
    )
}
