"use client"
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";  // Add close icon
import { Row, Col } from 'antd';
import "./Navigation.css";
import hampersProducts from '../showProductsHome/ProductsData';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';  // This is Next.js' Link

const AvoNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0); // Initialize with 0 for hidden
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        // Calculate position relative to the button center
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        // Reset position when the mouse leaves the button
        setPosition({ x: 0, y: 0 });
    };
    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll-based height, maxing out at 8vh
            const newHeight = Math.min(window.scrollY / 3, window.innerHeight * 0.08);
            setNavHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const NavigationsLinks = [
        {
            path: "/about",
            Links: "About_AVO"
        },
       
       
    ];

    const SocialIconsdata = [
        {
            icon: <FaFacebook />,
            link: "Facebook",
            title: "@Demo"
        },
        {
            icon: <AiFillInstagram />,
            link: "Instagram",
            title: "@Demo"
        },
        {
            icon: <FaTwitter />,
            link: "Twitter",
            title: "@Demo"
        }
        ,
        {
            icon: <FaLinkedin />,
            link: "Linkedin",
            title: "@Demo"
        }
    ]
    return (
        <>
            <section id="AnimatedAvoNavigationContainer">
                <div id="NavigationContainer">
                    <div id="FirstContainer">
                        <div id="LogoContainer">
                            <Link href='/'>
                                <img src="https://webtesting-upload.vercel.app/assets/Newlogo-DarJ6KI3.png" alt="Avo Logo" />
                            </Link>
                        </div>
                        <div onClick={toggleMenu} className="MenuButton">
                            {isMenuOpen ? (
                                <IoIosClose style={{ color: "white" }} />
                            ) : (
                                <IoIosMenu style={{ color: "white" }} />
                            )}
                        </div>
                    </div>
                    <div id="SecondContainer">
                        <ul>
                            {NavigationsLinks.map((item, index) => (
                                <Link key={index} href={item.path}>
                                    <li>
                                        {item.Links}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div
                        id="TopNavContainerSet"
                        style={{ height: `${navHeight}px` }} // Dynamic height based on scroll
                    >
                    </div>
                </div>
                <div
                    id="NavigationMegamenupanel"
                    className={isMenuOpen ? "show" : "hide"}
                >
                    <div id="NavigationMegapanelContainer">
                        <div className='navigationpanel'>
                            <div className='SocialIcons'>
                                {SocialIconsdata.map((item, index) => (
                                    <div key={index}>
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                            <Row style={{ height: "100%" }}>
                                <Col lg={8}>
                                    <div className='InsideNavigationContainer'>
                                        <div>
                                            <h2 > Our Categories</h2>
                                            <button
                                                className="AnimatedCommonBtn"
                                                onMouseMove={handleMouseMove}
                                                onMouseLeave={handleMouseLeave}
                                                style={{
                                                    transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                                                }}
                                            >
                                                view All
                                            </button>
                                        </div>
                                        <div className='MegaLinksContainer'>
                                            {hampersProducts.slice(0, 3).map((item, index) => (
                                                <div key={index}>
                                                    <h3>{item.name}</h3>
                                                    <p>{item.category}</p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className='InsideNavigationContainer'>
                                        <div>
                                            <h2> Our Categories</h2>
                                            <button
                                                className="AnimatedCommonBtn"
                                                onMouseMove={handleMouseMove}
                                                onMouseLeave={handleMouseLeave}
                                                style={{
                                                    transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                                                }}
                                            >
                                                view All
                                            </button>
                                        </div>
                                        <div className='MegaLinksContainer'>
                                            {hampersProducts.slice(3, 6).map((item, index) => (
                                                <div key={index}>
                                                    <h3>{item.name}</h3>
                                                    <p>{item.category}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className='InsideNavigationContainer'>
                                        <div>
                                            <h2> Our Categories</h2>
                                            <button
                                                className="AnimatedCommonBtn"
                                                onMouseMove={handleMouseMove}
                                                onMouseLeave={handleMouseLeave}
                                                style={{
                                                    transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                                                }}
                                            >
                                                view All
                                            </button>
                                        </div>
                                        <div className='MegaLinksContainer'>
                                            {hampersProducts.slice(6, 7).map((item, index) => (
                                                <div key={index}>
                                                    <h3>{item.name}</h3>
                                                    <p>{item.category}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AvoNavigation;
