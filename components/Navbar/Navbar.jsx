'use client'


import './navbar.css'
import Image from 'next/image'
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// import {} from "react-router-dom"

const Navbar = () => {

    const { data: session } = useSession();


    const [isOpen, setIsOpen] = useState(false);
    const [isFade, setIsFade] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsFade(!isFade);
    };

    return (
        <nav>

            <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line3 ${isOpen ? 'open' : ''}`}></div>
            </div>
            <div className="logo">
                <span className="firstsection-text06">

                    <Link href='/'><span style={{ color: "#b07b54" }}>JEWELS</span></Link>
                </span>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li onClick={toggleMenu}><a href="/" >Home</a></li>

                <li onClick={toggleMenu}><a href="/collections">Collections</a></li>

                <li onClick={toggleMenu}><a href="/">Contact Us</a></li>
                <li onClick={toggleMenu}>
                    <div className="firstsection-singicon">
                        <Link href='/MyCart'>
                            <Image
                                src="/vector727-y0up.svg"
                                alt="Vector727"
                                width={20}
                                height={20}
                                style={{ color: "#b07b54" }}
                                className="firstsection-vector1"
                            />
                        </Link>
                    </div>
                </li>

                {/* <div className="firstsection-basketicon"> */}
                <li onClick={toggleMenu} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    {session?.user ?


                        <>
                            <div class="dropdown">

                                <Image
                                    src={session?.user.image}
                                    width={30}
                                    height={30}
                                    className='rounded-full'
                                    alt='profile'
                                />
                                <div class="dropdown-options">
                                    <p onClick={() => {
                                        signOut();
                                        toggleMenu();
                                    }} >Logout</p>
                                </div>
                            </div>


                        </>
                        :
                        // <>

                        <Link href='/auth' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            {/* {providers &&
                                Object.values(providers).map((provider) => ( */}

                            <button type='button' style={{ color: "white" }} className='login-button'>
                                Sign in
                            </button>
                        </Link>

                    }
                </li>
                {/* </div> */}
            </ul >


            {/* 
            <ul className={` navlinks2 ${isOpen ? 'open' : ''}`}>

                <li>

                </li>

            </ul> */}

        </nav >
    );
};

export default Navbar;


{/* <div className="firstsection-header">
<div className="firstsection-main">

    <div className="firstsection-navigation">
        <span className="firstsection-text08">
            <span>Home</span>
        </span>
        <span className="firstsection-text08">
            <span>Collection</span>
        </span>
        <span className="firstsection-text08">
            <span>
                About Us
                <span
                    dangerouslySetInnerHTML={{
                        __html: ' ',
                    }}
                />
            </span>
        </span>
        <span className="firstsection-text08">
            <span>Contact</span>
        </span>
    </div>

    <div className="firstsection-logoname">
        <span className="firstsection-text06">
            <span></span>
        </span>
    </div>
    <div className="firstsection-navigationsecondsection">
        <div className="firstsection-group1">
            <div className="firstsection-searchicon">
                <Image
                    src="/vector723-ynag.svg"
                    width={50}
                    height={50}
                    alt="Vector723"
                    className="firstsection-vector"
                />
            </div>
            <Image
                src="/line2724-34mw.svg"
                alt="Line2724" width={50}
                height={50}
                className="firstsection-line2"
            />
            <div className="firstsection-basketicon">
                <Image
                    src="/vector727-y0up.svg"
                    alt="Vector727" width={50}
                    height={50}
                    className="firstsection-vector1"
                />
            </div>
            <Image
                src="/line3728-6d35.svg"
                alt="Line3728" width={50}
                height={50}
                className="firstsection-line3"
            />
            <div className="firstsection-singicon">
                <Image
                    src="/vector731-zlx2.svg"
                    width={50}
                    height={50}
                    alt="Vector731"
                    className="firstsection-vector2"
                />
            </div>
        </div>
        <span className="firstsection-text16">
            <span>Sing Up</span>
        </span>
    </div>
</div>

</div> */}
