"use client"
import Image from 'next/image';
import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";  // Add close icon

import "./Navigation.css";

const AvoNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                </div>
                <div
                    id="NavigationMegamenupanel"
                    className={isMenuOpen ? "show" : "hide"}
                >
                    <div id="NavigationMegapanelContainer"></div>
                </div>
            </section>
        </>
    );
};

export default AvoNavigation;
