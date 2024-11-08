"use client"; // <===== REQUIRED
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./AvoHome.css";

export default function AvoHome() {
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

    return (
        <div id="AvoHomeHeroMainContainer">
            <div
                id="TopNavContainerSet"
                style={{ height: `${navHeight}px` }} // Dynamic height based on scroll
            >
            </div>
            <div id="BottomContainer">
                <div id="LeftSideBottomContainer">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
