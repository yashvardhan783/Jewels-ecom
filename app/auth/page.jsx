'use client'
import './auth.css';
import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation'

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const { data: session } = useSession();
    // const pathname = usePathname()
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const navigate = useRouter();
    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);
    
    useEffect(() => {
        (async () => {
            if (session?.user) {
                navigate.push('/')
            }
        })();
    }, []);


    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className='login-form'>

            <main class="main">
                {/* <div class="container"> */}
                <section class="wrapper">
                    <div class="heading">
                        <h1 class="text text-large">Sign In</h1>
                        <p class="text text-normal">New user? <span><a href="#" class="text text-links">Create an account</a></span>
                        </p>
                    </div>
                    <form name="signin" class="form">
                        <div class="input-control">
                            <label for="email" class="input-label" hidden>Email Address</label>
                            <input type="email" name="email" id="email" class="input-field" placeholder="Email Address" />
                        </div>
                        <div class="input-control">
                            <label for="password" class="input-label" hidden>Password</label>
                            <input type="password" name="password" id="password" class="input-field" placeholder="Password" />
                        </div>
                        <div class="input-control ">
                            <a href="#" class="text text-links">Forgot Password</a>
                            <input type="submit" name="submit" class="login-button" value="Sign In" disabled />
                        </div>
                    </form>
                    <div class="striped">
                        <span class="striped-line"></span>
                        <span class="striped-text">Or</span>
                        <span class="striped-line"></span>
                    </div>
                    <div class="method">
                        <div class="method-control ">
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <div
                                        type='button'
                                        class="method-action"
                                        key={provider.name}
                                        onClick={async () => {
                                            await signIn(provider.id);
                                        }}>

                                        <i class="ion ion-logo-google"></i>
                                        <span><i class="fa-brands fa-google"></i> Sign in with Google</span>
                                    </div>
                                ))}
                            <a href="#" >

                            </a>
                        </div>

                    </div>
                </section>
                {/* </div> */}
            </main>

        </div>
    );
};

export default Login;
