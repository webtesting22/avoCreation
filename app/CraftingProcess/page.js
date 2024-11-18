"use client"
import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import "./Crafting.css";
import ProcessContainer from "../ProcessContaienr/ProcessContainer";

const CraftingProcess = () => {
    const containerRefs = useRef([]); // Array of container refs
    const imageRefs = useRef([]); // Array of image refs

    // Parallax effect function
    const parallaxEffect = () => {
        // Disable parallax on screens smaller than 768px
        if (window.innerWidth <= 768) return;

        containerRefs.current.forEach((container, index) => {
            if (container && (index === 1 || index === 4)) { // Apply parallax only to container 2 (index 1) and container 5 (index 4)
                const rect = container.getBoundingClientRect();
                const offset = window.scrollY - rect.top;
                const parallaxSpeed = 0.1; // Adjust for faster or slower effect

                if (imageRefs.current[index]) {
                    const directionMultiplier = index % 2 === 0 ? 1 : -1; // Alternate direction
                    imageRefs.current[index].style.transform = `translate(0%, ${offset * parallaxSpeed * directionMultiplier}px)`;
                }
            }
        });
    };

    useEffect(() => {
        const handleResize = () => {
            // Reapply the effect when the window is resized
            if (window.innerWidth > 768) {
                parallaxEffect();
            } else {
                // Reset image transform for mobile
                imageRefs.current.forEach((img) => {
                    if (img) {
                        img.style.transform = "translate(0%, 0%)";
                    }
                });
            }
        };

        const handleLoad = () => {
            setTimeout(() => {
                parallaxEffect(); // Trigger after slight delay to ensure page load
            }, 100);
        };

        // Add event listeners for image load and resize
        window.addEventListener("resize", handleResize);
        imageRefs.current.forEach((img) => {
            if (img) {
                img.addEventListener("load", handleLoad);
            }
        });

        // Trigger parallax effect once after mount to ensure initial position is correct
        parallaxEffect();

        const observers = containerRefs.current.map((container) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && window.innerWidth > 768) {
                        window.addEventListener("scroll", parallaxEffect);
                    } else {
                        window.removeEventListener("scroll", parallaxEffect);
                    }
                },
                { threshold: 0.1 }
            );

            if (container) {
                observer.observe(container);
            }

            return observer;
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
            window.removeEventListener("scroll", parallaxEffect);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const images = [
        "https://images.unsplash.com/photo-1510828325835-5940110b482a?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90byw1db8fGVufDB8fHx8fA%3D%3D",
        "https://webtesting-upload.vercel.app/assets/%E2%94%98%C3%A7%E2%95%AA%C2%BB%E2%95%AA%C2%BA%E2%94%98%C3%A8%E2%95%AA%C2%BA%20%E2%94%98%C3%A5%E2%95%AA%E2%94%82%E2%95%AA%C2%BA%E2%94%98%C3%A8%E2%94%98%C3%B6%E2%94%98%C3%A8%E2%95%AA%E2%8C%90%20_%20gift%20boxes-BhRS_buy.jpeg",
        "https://webtesting-upload.vercel.app/assets/6-cBAnwhQA.jpeg",
        "https://webtesting-upload.vercel.app/assets/LEBARAN%20GIFT%20GUIDE_%202019%20-%20LIVING%20LOVING%202-ClhDlkyz.jpeg",
        "https://webtesting-upload.vercel.app/assets/92bf1f57-c134-4c3d-82fc-b26499e2e4ac-BeGD9Dzc.jpeg",
        "https://webtesting-upload.vercel.app/assets/f2060d25-1655-406c-9773-4a9577e33a45-3WKaObN8.jpeg"
    ];

    return (
        <>
            <section style={{ position: "relative" }}>
                <div className="imageContainer">
                    <img src="https://webtesting-upload.vercel.app/assets/hindilogo-DyEuu-Wo.jpg" alt="" id="logo-image" />
                </div>
                <div className="CraftingProcessImages">
                    <Row gutter={16}>
                        {images.map((image, index) => (
                            <Col lg={8} key={index}>
                                <div id="OverlayContainer">
                                    <div
                                        className="parallax-container"
                                        ref={(el) => (containerRefs.current[index] = el)}
                                    >
                                        <img
                                            src={image}
                                            alt={`Parallax ${index}`}
                                            className="parallax-image"
                                            ref={(el) => (imageRefs.current[index] = el)}
                                        />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            <ProcessContainer />
        </>
    );
};

export default CraftingProcess;
