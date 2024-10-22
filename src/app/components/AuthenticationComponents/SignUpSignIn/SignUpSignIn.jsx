"use client"
import classes from './SignUpSignIn.module.scss';
import Image from "next/image";
import Link from "next/link";
import {useState, useRef} from "react";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function SignUpSignIn({locale}) {

    // ROUTER
    const router = useRouter();

    // REFERENCES
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    // SIGNUP REFERENCES
    const signUpNameRef = useRef();
    const signUpEmailRef = useRef();
    const signUpPhoneRef = useRef();
    const signUpPasswordRef = useRef();
    const signUpConfirmPasswordRef = useRef();
    const signUpTermsAndConditionsRef = useRef();


    const [ActiveButton, setActiveButton] = useState('Sign In');

    // ON CLICK OF SIGN IN BUTTON
    const onLoginClick = () => {
        setActiveButton('Sign In');
    }

    // ON CLICK OF SIGN UP BUTTON
    const onSignUpClick = () => {
        setActiveButton('Sign Up');
    }

    // ON SUBMIT OF LOGIN FORM
    const onLoginSubmit = async (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;
        // VALIDATE VALUES
        if (!email || !password) {
            return toast.error('Please fill all the fields');
        }
        // VALIDATE EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            return toast.error('Please enter a valid email address');
        }
        // VALIDATE PASSWORD
        if (password.length < 6) {
            return toast.error('Password must be at least 8 characters long');
        }
        // SUBMIT FORM
        axios.post(`${process.env.BASE_URL}/user/login`, {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async response => {
                // GET THE DATA
                const data = response.data;

                // CHECK IF THE REQUEST IS SUCCESSFUL
                if (data.success && data.token) {
                    await axios.post(`/api/setLoginCookies`, {
                        token: data.token,
                        userId: data.user?._id,
                        userEmail: data.user?.email,
                        userName: data.user?.fullName,
                        userPhone: data.user?.phoneNumber,
                        formType: 'login'
                    })
                        .then(res => {
                            // SAVE THE TOKEN IN LOCAL STORAGE AND COOKIES
                            localStorage.setItem('retweet-token', data.token);
                            // SAVE THE USER ID IN LOCAL STORAGE AND COOKIES
                            localStorage.setItem('retweet-user-id', data.user?._id);
                            // SAVE THE USER EMAIL IN LOCAL STORAGE AND COOKIES
                            localStorage.setItem('retweet-user-email', data.user?.email);
                            // SAVE THE USERNAME IN LOCAL STORAGE AND COOKIES
                            localStorage.setItem('retweet-user-name', data.user?.fullName);
                            // SAVE THE USER PHONE IN LOCAL STORAGE AND COOKIES
                            localStorage.setItem('retweet-user-phone', data.user?.phoneNumber);

                            router.push(`/${locale}/?redirected=true`);
                            // SHOW A SUCCESS MESSAGE
                            toast.success('Logging you in...');

                        })
                        .catch(error => {
                            toast.error(error.response?.data?.message || 'Something went wrong');
                        })
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    // ON SUBMIT OF SIGN UP FORM
    const onSignUpSubmit = (event) => {
        // PREVENT DEFAULT
        event.preventDefault();
        // GET VALUES
        const name = signUpNameRef.current.value;
        const email = signUpEmailRef.current.value;
        const phone = signUpPhoneRef.current.value;
        const password = signUpPasswordRef.current.value;
        const confirmPassword = signUpConfirmPasswordRef.current.value;
        const termsAndConditions = signUpTermsAndConditionsRef.current.checked;
        // VALIDATE VALUES
        if (!name || !email || !phone || !password || !confirmPassword) {
            return toast.error('Please fill all the fields');
        }
        // VALIDATE EMAIL
        if (!email.includes('@') || !email.includes('.')) {
            return toast.error('Please enter a valid email address');
        }
        // VALIDATE PASSWORD
        if (password.length < 8) {
            return toast.error('Password must be at least 8 characters long');
        }
        // VALIDATE CONFIRM PASSWORD
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match');
        }
        // VALIDATE TERMS AND CONDITIONS
        if (!termsAndConditions) {
            return toast.error('Please accept the terms and conditions');
        }
        // SUBMIT FORM
        axios.post(`${process.env.BASE_URL}/create/account`, {
            fullName: name,
            email,
            phoneNumber: phone,
            password
        })
            .then(async response => {
                // GET THE DATA
                const data = response.data;
                if (data?.success) {

                    await axios.post(`/api/setLoginCookies`, {
                        signupEmail: email,
                        statusRedirect: 'true',
                        formType: 'signup'
                    })
                        .then(res => {
                        })
                        .catch(error => {
                            console.log(error);
                        })

                    // SAVE THE SIGN-UP DATA IN LOCAL STORAGE AND COOKIES
                    localStorage.setItem('retweet-sign-up-email', email);
                    // SET THE S OF THE VERIFY EMAIL PAGE WILL BEHAVE BASED ON IT
                    localStorage.setItem('retweet-verify-email', 'true');

                    // SHOW A SUCCESS MESSAGE
                    if (data?.message) {
                        toast.success(data?.message);
                    } else {
                        toast.success('Account created successfully, Please Verify your email');
                    }
                    // REDIRECT TO VERIFICATION PAGE
                    router.push(`/${locale}/auth/verify`);
                }
            })
            .catch(error => {
                // SHOW AN ERROR MESSAGE
                toast.error(error.response?.data?.message || 'Something went wrong');
            })
    }

    // ON GOOGLE SIGN IN
    const onGoogleSignIn = () => {
        // ADD YOUR GOOGLE SIGN IN CODE HERE
        axios.get(`${process.env.BASE_URL}/auth/google`)
            .then(response => {
                // HANDLE THE RESPONSE HERE
                const data = response.data;
                // CHECK IF THE REQUEST IS SUCCESSFUL
                if (data?.success) {
                    // OPEN THE LINK IN
                    window.location.href = data?.authUrl;
                }
            })
            .catch(error => {
                // HANDLE THE ERROR HERE
                toast.error(error.response?.data?.message || 'Something went wrong');
            })
    }

    // ON FACEBOOK SIGN IN
    const onFacebookSignIn = () => {
        // ADD YOUR FACEBOOK SIGN IN CODE HERE
        axios.get(`${process.env.BASE_URL}/auth/facebook`)
            .then(response => {
                // HANDLE THE RESPONSE HERE
                const data = response.data;
                // CHECK IF THE REQUEST IS SUCCESSFUL
                if (data?.success) {
                    // OPEN THE LINK IN
                    window.location.href = data?.url;
                }
            })
            .catch(error => {
                // HANDLE THE ERROR HERE
                toast.error(error.response?.data?.message || 'Something went wrong');
            })
    }

    // ON TWITTER SIGN IN
    const onTwitterSignIn = () => {
        // ADD YOUR TWITTER SIGN IN CODE HERE
        axios.get(`${process.env.BASE_URL}/auth/twitter`)
            .then(response => {
                // HANDLE THE RESPONSE HERE
                const data = response.data;
                // CHECK IF THE REQUEST IS SUCCESSFUL
                if (data?.success) {
                    // OPEN THE LINK IN
                    window.location.href = data?.url;
                }
            })
            .catch(error => {
                // HANDLE THE ERROR HERE
                toast.error(error.response?.data?.message || 'Something went wrong');
            })
    }

    return (
        <div className={`${classes.ContentContainer}`}>
            <div className={`${classes.ContentContainer__Buttons}`}>
                <button
                    className={`${classes.ContentContainer__Buttons__Button} ${ActiveButton === "Sign In" ? classes.ContentContainer__Buttons__Button__Active : ''} ${classes.ContentContainer__Buttons__Button__SignIn}`}
                    onClick={onLoginClick}>
                    Sign In
                </button>
                <button
                    className={`${classes.ContentContainer__Buttons__Button} ${ActiveButton === "Sign Up" ? classes.ContentContainer__Buttons__Button__Active : ''} ${classes.ContentContainer__Buttons__Button__SignUp}`}
                    onClick={onSignUpClick}
                >
                    Sign Up
                </button>
            </div>
            {/*LOGIN FORM*/}
            {ActiveButton === "Sign In" && (<div className={`${classes.ContentContainer__FormContainer}`}>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onLoginSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={loginEmailRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <div className={`${classes.SameLineBetween}`}>
                            <label htmlFor="password">Password</label>
                            <Link locale={locale}
                                href={`/${locale}/auth/forgot-password`}
                                  className={`${classes.InputContainer__ForgotPassword}`}>Forgot Password</Link>
                        </div>
                        <input type="password" ref={loginPasswordRef}/>
                    </div>
                    <button className={`${classes.ContentContainer__FormContainer__Form__Button}`}>Sign
                        In &rarr;</button>
                </form>
                <div className={`${classes.ContentContainer__FormContainer__Or}`}>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Text}`}>or</div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__SocialMedia}`}>
                    <button
                        className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}
                        onClick={onGoogleSignIn}
                    >
                        <Image src="/assets/authentication/Google.png" width={20} height={20} alt="google"/>
                        <span>Login with Google</span>
                    </button>
                    {/*<button*/}
                    {/*    className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}*/}
                    {/*    onClick={onFacebookSignIn}*/}
                    {/*>*/}
                    {/*    <Image src="/assets/authentication/Facebook.png" width={20} height={20} alt="facebook"/>*/}
                    {/*    <span>Login with Facebook</span>*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}*/}
                    {/*    onClick={onTwitterSignIn}*/}
                    {/*>*/}
                    {/*    <Image src="/assets/authentication/twitter.png" width={20} height={20} alt="twitter"/>*/}
                    {/*    <span>Login with Twitter</span>*/}
                    {/*</button>*/}
                </div>
            </div>)}
            {/*SIGN UP FORM*/}
            {ActiveButton === "Sign Up" && (<div className={`${classes.ContentContainer__FormContainer}`}>
                <form className={`${classes.ContentContainer__FormContainer__Form}`} onSubmit={onSignUpSubmit}>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={signUpNameRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" ref={signUpEmailRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" ref={signUpPhoneRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder={'8+ characters'} ref={signUpPasswordRef}/>
                    </div>
                    <div className={`${classes.InputContainer}`}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" ref={signUpConfirmPasswordRef}/>
                    </div>
                    <div className={`${classes.TermsContainer}`}>
                        <input type={'checkbox'} id={'termsAndConditions'} ref={signUpTermsAndConditionsRef}/>
                        <label htmlFor="termsAndConditions">I agree to the <Link
                                                                                    href={`/${locale}/terms-and-conditions`}
                        >Terms
                            and Conditions</Link></label>
                    </div>
                    <button
                        className={`${classes.ContentContainer__FormContainer__Form__Button}`}
                    >
                        Sign Up &rarr;
                    </button>
                </form>
                <div className={`${classes.ContentContainer__FormContainer__Or}`}>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Text}`}>or</div>
                    <div className={`${classes.ContentContainer__FormContainer__Or__Line}`}></div>
                </div>
                <div className={`${classes.ContentContainer__FormContainer__SocialMedia}`}>
                    <button
                        className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}
                        onClick={onGoogleSignIn}
                    >
                        <Image src="/assets/authentication/Google.png" width={20} height={20} alt="google"/>
                        <span>Sign Up with Google</span>
                    </button>
                    {/*<button*/}
                    {/*    className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}*/}
                    {/*    onClick={onFacebookSignIn}*/}
                    {/*>*/}
                    {/*    <Image src="/assets/authentication/Facebook.png" width={20} height={20} alt="facebook"/>*/}
                    {/*    <span>Sign Up with Facebook</span>*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className={`${classes.ContentContainer__FormContainer__SocialMedia__Button}`}*/}
                    {/*    onClick={onTwitterSignIn}*/}
                    {/*>*/}
                    {/*    <Image src="/assets/authentication/twitter.png" width={20} height={20} alt="twitter"/>*/}
                    {/*    <span>Sign Up with Twitter</span>*/}
                    {/*</button>*/}
                </div>
            </div>)}
        </div>
    )
}