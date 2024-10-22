"use client"
import classes from './ResetPassword.module.scss';
import {useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useRouter, useSearchParams} from "next/navigation";

export default function ResetPassword({locale}) {

    // ROUTER
    const router = useRouter();
    const searchParams = useSearchParams();

    // STATE
    const [code, setCode] = useState('');

    // REFERENCES
    const PasswordRef = useRef();
    const ConfirmPasswordRef = useRef();


    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();

        // GET THE EMAIL FROM THE LOCAL STORAGE
        const email = localStorage.getItem('retweet-reset-email');

        if (!email) {
            toast.error('Failed to reset password. Please try again.');
            return;
        }

        // VALIDATE
        if(!code) return toast.error('Please go back and enter the verification code.');

        // GET VALUES
        const password = PasswordRef.current?.value;
        const confirmPassword = ConfirmPasswordRef.current?.value;

        // VALIDATE
        if(!password || !confirmPassword) return toast.error('Please fill out all fields.');

        if (password.length < 8) {
            return toast.error('Password must be at least 8 characters long.');
        }
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match.');
        }

        // SUBMIT FORM
        axios.post(`${process.env.BASE_URL}/reset/password`, {
            email: email,
            password: password,
            code: code,
        })
            .then(response => {
                // Handle the response here
                const {data} = response;
                // CHECK IF THE RESPONSE IS SUCCESS
                if(data?.success) {
                    if(data?.message){
                        toast.success(data?.message);
                    }else{
                        toast.success('Password Changed Successfully.');
                    }
                    router.push(`/${locale}/auth/login`);
                }
            })
            .catch(error => {
                // Handle the error here
                toast.error(error?.response?.data?.message || 'Failed to submit the form.');
            })
    }

    // EFFECT TO SET THE CODE
    useEffect(() => {
        // GET THE CODE FROM THE URL
        const code = searchParams.get('code');
        if(code) {
            setCode(code);
        }
    }, [searchParams]);

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__FormContainer}`}>
                <div className={`${classes.ContentContainer__FormContainer__Header}`}>
                    <h1>Reset Password</h1>
                    <p>Enter your new password below to reset your password.</p>
                </div>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor={'password'}>Password</label>
                        <input type={'password'} id={'password'} ref={PasswordRef} placeholder={'8+ characters'}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor={'confirm-password'}>Confirm Password</label>
                        <input type={'password'} id={'confirm-password'} ref={ConfirmPasswordRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Reset Password &rarr;</button>
                </form>
            </div>
        </div>
    )
}