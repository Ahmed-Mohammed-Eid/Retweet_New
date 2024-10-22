"use client"
import classes from './VerifyEmail.module.scss';
import {useRef} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function VerifyEmail({locale}) {

    // INITIALIZE THE ROUTER
    const router = useRouter();

    // REFERENCES
    const verifyCodeRef = useRef();


    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();

        // GET THE STATUS OF USER WHICH WE WILL BEHAVE BASED ON IT IF TRUE (THE USER IS SIGNING UP) OR FALSE (THE USER IS RESETTING THE PASSWORD)
        const redirectStatus = localStorage.getItem('retweet-verify-email');

        // GET THE EMAIL FROM THE LOCAL STORAGE
        const email = localStorage.getItem("retweet-sign-up-email");

        // GET THE RESEND EMAIL
        const resetEmail = localStorage.getItem("retweet-reset-email");


        if (!email && redirectStatus === 'true') {
            toast.error('Failed to resend verification code. Please try again.');
            return;
        }

        if (!resetEmail && redirectStatus === 'false') {
            toast.error('Failed to reset password. Please try again.');
            return;
        }

        // GET VALUES
        const verifyCode = verifyCodeRef.current?.value;

        // VALIDATE
        if (!verifyCode) {
            toast.error('Please enter your verification code.');
            return;
        }

        // SUBMIT FORM
        axios.post(`${process.env.BASE_URL}/verify/email`, {
            // Add the form data here
            email: redirectStatus === 'true' ? email : resetEmail,
            code: verifyCode,
        })
            .then(response => {
                // Handle the response here
                const {data} = response;

                if(data?.success) {
                    if(data?.message){
                        toast.success(data?.message);
                    }else{
                        toast.success('Form submitted successfully.');
                    }
                }

                if(redirectStatus === 'true'){
                    router.push(`/${locale}/auth/login`);
                }else{
                    router.push(`/${locale}/auth/reset-password?code=${verifyCode}`);
                }
            })
            .catch(error => {
                console.log(error);
                // Handle the error here
                toast.error(error?.response?.data?.message || 'Failed to submit the form.');
            });

    }

    // ON CLICK ON RESEND CODE BUTTON
    const onResendCodeClick = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();

        // GET THE STATUS OF USER WHICH WE WILL BEHAVE BASED ON IT IF TRUE (THE USER IS SIGNING UP) OR FALSE (THE USER IS RESETTING THE PASSWORD)
        const redirectStatus = localStorage.getItem("retweet-verify-email");

        // GET THE EMAIL FROM THE LOCAL STORAGE
        const email = localStorage.getItem("retweet-sign-up-email");

        // GET THE RESEND EMAIL
        const resetEmail = localStorage.getItem("retweet-reset-email");


        if (!email && redirectStatus === "true") {
            toast.error(
                "Failed to resend verification code. Please try again."
            );
            return;
        }

        if (!resetEmail && redirectStatus === "false") {
            toast.error(
                "Failed to resend verification code. Please try again."
            );
            return;
        }

        // Add your code here to handle the resend code functionality
        axios.get(`${process.env.BASE_URL}/resend/code?email=${redirectStatus === "true" ? email : resetEmail}`)
            .then(response => {
                // Handle the response here
                // For example, you can show a success message or update the UI
                toast.success('Verification code has been resent.');
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
                    <h1>Verify Your Email Address</h1>
                    <p>We have sent you an email with a verification code. Please enter it below to verify your email
                        address.</p>
                </div>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <div className={`${classes.SameLineBetween}`}>
                            <label htmlFor={'VerificationCode'}>Verification Code</label>
                            <button
                                className={`${classes.SameLineBetween__Button}`}
                                onClick={onResendCodeClick}
                            >
                                Resend Code
                            </button>
                        </div>
                        <input type={'text'} id={'VerificationCode'} ref={verifyCodeRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Verify
                        me &rarr;</button>
                </form>
            </div>
        </div>
    )
}