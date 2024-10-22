"use client";
import {useId, useState} from "react";
import Image from "next/image";
import classes from './uploadFileCamera.module.scss';
import readImage from "../../../../../helpers/readImage";

export default function UploadMedia({label, multiple = false, accept = 'image/*', onFileChange = () => {}} ) {
    const uniqueId = useId();
    // STATES
    const [file, setFile] = useState(null);

    // EVENT HANDLERS
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const dataUrl = await readImage(file);
        setFile(dataUrl);
        onFileChange(file);
    }

    // REMOVE IMAGE HANDLER
    const removeImage = () => {
        setFile(null);
        onFileChange(null);
    }

    return (
        <div className={classes.uploadFileCamera}>
            {label && (<h3>{label}</h3>)}
            <label htmlFor={`image${uniqueId}`}>
                {!file && (<Image src={'/assets/listings/uploadFileCamera.svg'} alt={'/'} width={50} height={50} />)}
                {file && (<Image src={file} alt={'/'} width={250} height={250} className={classes.SelectedImage} />)}
                <input
                    type="file"
                    accept={accept}
                    id={`image${uniqueId}`}
                    multiple={multiple}
                    onChange={handleFileChange}
                />
            </label>
            {file && (<button
                className={classes.removeImage}
                onClick={removeImage}
            >
                <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.6 408.9"
                >
                    <defs>
                        <style>{`.cls-1 { strokeWidth: 0px; }`}</style>
                    </defs>
                    <path
                        className="cls-1"
                        d="M0,28.83C0,25.64,0,22.44,0,19.25c.53-1.17,1.13-2.31,1.59-3.5C3.65,10.33,7.15,6.14,12.23,3.31c10.51-5.85,21.14-3.92,30.7,5.62,52.77,52.65,105.54,105.3,158.27,157.99,1.11,1.11,1.79,2.63,2.68,3.96.61-.01,1.23-.03,1.84-.04.89-1.32,1.6-2.83,2.71-3.94,52.35-52.32,104.73-104.6,157.11-156.88,1.41-1.41,2.84-2.81,4.35-4.11,12.75-10.87,32.18-5.86,38.14,9.8.46,1.21,1.04,2.36,1.57,3.55v9.58c-2.26,7.7-7.72,13.06-13.2,18.52-51.39,51.2-102.72,102.46-154.06,153.71-1.1,1.09-2.14,2.24-3.79,3.97,1.56,1.22,2.94,2.08,4.07,3.2,50.98,50.85,101.93,101.75,152.93,152.58,5.74,5.73,11.62,11.26,14.05,19.34v9.58c-1.51,3.02-2.81,6.17-4.58,9.02-3.38,5.42-8.98,7.85-14.62,10.14h-9.6c-7.95-2.39-13.45-8.09-19.1-13.74-51.11-51.1-102.29-102.14-153.46-153.19-1.1-1.09-2.24-2.14-3.99-3.8-1.21,1.56-2.07,2.94-3.19,4.06-51.05,50.98-102.14,101.92-153.15,152.93-5.65,5.65-11.15,11.35-19.1,13.74h-9.6c-3.02-1.51-6.18-2.8-9.04-4.58C4.73,400.95,2.29,395.36,0,389.74v-9.58c2.4-7.93,8.11-13.43,13.77-19.07,51.2-51.01,102.34-102.1,153.49-153.16,1.1-1.1,2.14-2.24,3.81-3.98-1.56-1.21-2.95-2.07-4.07-3.19C115.91,149.81,64.87,98.82,13.77,47.9,8.11,42.26,2.4,36.76,0,28.83Z"
                    />
                </svg>
            </button>)}
        </div>
    )
}