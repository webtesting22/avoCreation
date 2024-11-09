"use client"
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";  // Add close icon
import { Row, Col } from 'antd';
import "./Navigation.css";

const AvoNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0); // Initialize with 0 for hidden

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
            Links: "About"
        },
        {
            Links: "Projects"
        },
        {
            Links: "Contact"
        },
    ]

    return (
        <>
            <section id="AnimatedAvoNavigationContainer">
                <div id="NavigationContainer">
                    <div id="FirstContainer">
                        <div id="LogoContainer">
                            <img src="./images/AvoLogo-removebg-preview.png" alt="Avo Logo" />
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
                                <li key={index}>
                                    {item.Links}
                                </li>
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
                            <Row style={{height:"100%"}}>
                                <Col lg={8}>
                                    <div className='InsideNavigationContainer'>
                                        <div>
                                            <h2> Our Categories</h2>
                                            <button>heloo</button>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className='InsideNavigationContainer'>
                                        <div>
                                            <h2> Our Categories</h2>
                                            <button>heloo</button>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className='InsideNavigationContainer'>
                                        <div>
                                            <h2> Our Categories</h2>
                                            <button>heloo</button>
                                        </div>
                                        <div>

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
