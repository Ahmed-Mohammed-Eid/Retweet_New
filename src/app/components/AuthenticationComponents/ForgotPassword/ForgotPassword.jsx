"use client"
import classes from './ForgotPassword.module.scss';
import Link from "next/link";
import {useRef} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {document} from "postcss";
import {useRouter} from "next/navigation";

export default function ForgotPassword({locale}) {

    // INITIALIZE THE ROUTER
    const router = useRouter();

    // REFERENCES
    const EmailRef = useRef();


    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();

        // GET VALUES
        const email = EmailRef.current.value;

        // VALIDATE VALUES
        if (!email) {
            return toast.error('Please enter your email address');
        }
        // VALIDATE EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            return toast.error('Please enter a valid email address');
        }

        // Add your code here to handle the resend code functionality
        axios.get(`${process.env.BASE_URL}/resend/code?email=${email}`)
            .then(response => {
                // Handle the response here
                const data = response?.data;
                // SAVE THE EMAIL IN THE LOCAL STORAGE TO REUSE
                localStorage.setItem('retweet-reset-email', email);
                document.cookie = `retweet-reset-email=${email}; path=/;`;
                // SET THE S OF THE VERIFY EMAIL PAGE WILL BEHAVE BASED ON IT
                localStorage.setItem('retweet-verify-email', 'false');

                // SHOW A SUCCESS MESSAGE
                if(data?.success) {
                    if(data?.message){
                        toast.success(data?.message);
                    }else{
                        toast.success('Verification code has been sent to your email.');
                    }
                }

                // REDIRECT TO THE VERIFY EMAIL PAGE
                router.push(`/${locale}/auth/verify`);
            })
            .catch(error => {
                // Handle the error here
                // For example, you can show an error message or handle the error in a different way
                toast.error('Failed to resend verification code.');
            });
    }

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__FormContainer}`}>
                <div className={`${classes.ContentContainer__FormContainer__Header}`}>
                    <h1>Forgot Password</h1>
                    <p>Enter your email address below and we&apos;ll send you a code to reset your password.</p>
                </div>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={EmailRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Send Code &rarr;</button>
                </form>
                <div className={`${classes.ContentContainer__FormContainer__Footer}`}>
                    <p>Already have an account? <Link locale={locale} href={`/${locale}/auth/login`}>Sign In</Link></p>
                    <p>Don’t have account? <Link locale={locale} href={`/${locale}/auth/login`}>Sign Up</Link></p>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__Or}`}>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__CustomerService}`}>
                    <p>You may contact <span>Customer Service</span> for help restoring access to your account.</p>
                </div>
            </div>
        </div>
    )
}