"use client";
import classes from "./AccountSettingsContent.module.scss";
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useSearchParams} from "next/navigation";

export default function AccountSettingsContent({locale, user}) {

    // SEARCH PARAMS
    const searchParams = useSearchParams();

    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    // FORM STATE
    const [form, setForm] = useState({
        name: '',
        country: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        confirmPassword: '',
    })

    useEffect(() => {
        setForm({
            name: user?.fullName,
            country: user?.country,
            email: user?.email,
            phone: user?.phoneNumber,
            gender: user?.gender,
        })
    }, [user]);

    useEffect(() => {
        const redirected = searchParams.get('redirected');
        if (redirected === 'true') {
            window.location.href = '/profile/settings';
        }
    }, [searchParams])


    // HANDLE THE IMAGE WHEN IT'S SELECTED TO PREVIEW IT IN THE IMAGE
    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        // READ THE IMAGE AND CONVERT IT TO BASE64
        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result);
        };

        // Missing line to actually read the file
        reader.readAsDataURL(file);
    };

    // ON SUBMIT OF EDITING PROFILE FORM
    const onEditProfileSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        if (file) {
            formData.append('files', file);
        }
        formData.append('fullName', form.name);
        formData.append('email', form.email);
        formData.append('phoneNumber', form.phone);
        formData.append('country', form.country);
        formData.append('gender', form.gender);

        if (form.password && form.confirmPassword) {
            formData.append('password', form.password);
            formData.append('confirmPassword', form.confirmPassword);
        }

        // SUBMIT FORM
        axios.put(`${process.env.BASE_URL}/update/profile`, formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('retweet-token')}`
                }
            })
            .then(response => {
                // Handle the response here
                const {data} = response;
                toast.success(data?.message || 'Profile updated successfully');
            })
            .catch(error => {
                // Handle the error here
                toast.error(error?.response?.data?.message || 'Failed to update profile. Please try again.');
            })
    }


    return (
        <form className={classes.AccountSettingsContent} onSubmit={onEditProfileSubmit}>
            <div className={classes.ProfileImage}>
                <Image
                    src={imagePreviewUrl || user?.userImage || `/assets/home/userAccount.png`}
                    alt="Account Image"
                    width={400}
                    height={400}
                    className={classes.ProfileImage__Image}
                />
                <label className={classes.ProfileImage__Edit} htmlFor={'ProfileImage'}>
                    <Image
                        src="/assets/profile/Pen.svg"
                        alt="Edit"
                        width={20}
                        height={20}
                        className={classes.ProfileImage__Edit__Image}
                    />
                    <input type="file" id={'ProfileImage'} onChange={handleImageChange}/>
                </label>
            </div>

            <h2 className={classes.PersonalData__Title}>Personal Data</h2>

            <div className={classes.PersonalData__InputsContainer}>
                <div className={classes.PersonalData__InputGroup}>
                    <label className={classes.PersonalData__Label}>Full Name</label>
                    <input
                        className={classes.PersonalData__Input}
                        type="text"
                        placeholder="Full Name"
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        value={form.name}
                    />
                </div>
                <div className={classes.PersonalData__InputGroup}>
                    <label className={classes.PersonalData__Label}>Country</label>
                    <input
                        className={classes.PersonalData__Input}
                        type="text"
                        placeholder="Country"
                        onChange={(e) => setForm({...form, country: e.target.value})}
                        value={form.country}
                    />
                </div>
                <div className={classes.PersonalData__InputGroup}>
                    <label className={classes.PersonalData__Label}>Email</label>
                    <input
                        className={classes.PersonalData__Input}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        value={form.email}
                    />
                </div>
                <div className={classes.PersonalData__InputGroup}>
                    <label className={classes.PersonalData__Label}>Phone Number</label>
                    <input
                        className={classes.PersonalData__Input}
                        type="tel"
                        placeholder="Phone Number"
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        value={form.phone}
                    />
                </div>
                <div className={classes.PersonalData__CheckboxesContainer}>
                    <h3 className={classes.PersonalData__CheckboxesContainer__Title}>Sex</h3>
                    <div className={classes.PersonalData__CheckboxesContainer__Checkboxes}>
                        <div className={classes.PersonalData__CheckboxGroup}>
                            <label className={classes.PersonalData__Checkbox} htmlFor={'Male'}>
                                <input
                                    type="radio"
                                    id={'Male'}
                                    value={'Male'}
                                    name={'gender'}
                                    onChange={(e) => setForm({...form, gender: e.target.value})}
                                    checked={form.gender === 'Male'}
                                />
                                <div className={classes.PersonalData__Checkbox_CheckMark}></div>
                                <span className={classes.PersonalData__Checkbox__Text}>Male</span>
                            </label>
                        </div>
                        <div className={classes.PersonalData__CheckboxGroup}>
                            <label className={classes.PersonalData__Checkbox} htmlFor={'Female'}>
                                <input
                                    type="radio"
                                    id={'Female'}
                                    value={'Female'}
                                    name={'gender'}
                                    onChange={(e) => setForm({...form, gender: e.target.value})}
                                    checked={form.gender === 'Female'}
                                />
                                <div className={classes.PersonalData__Checkbox_CheckMark}></div>
                                <span className={classes.PersonalData__Checkbox__Text}>Female</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className={classes.PersonalData__Title}>Account Details</h2>

            <div className={classes.PersonalData__InputsContainer}>
                <div className={classes.PersonalData__InputGroup}>
                    <label className={classes.PersonalData__Label}>Password</label>
                    <input
                        className={classes.PersonalData__Input}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        value={form.password}
                    />
                </div>
                <div className={classes.PersonalData__InputGroup}>
                    <label className={classes.PersonalData__Label}>Confirm Password</label>
                    <input
                        className={classes.PersonalData__Input}
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                        value={form.confirmPassword}
                    />
                </div>
            </div>

            <button className={classes.PersonalData__Button}>Update Data</button>
        </form>
    );
}