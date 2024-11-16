"use client"
import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import "./Crafting.css";

const CraftingProcess = () => {
    const containerRefs = useRef([]); // Array of container refs
    const imageRefs = useRef([]); // Array of image refs

    // Parallax effect function using requestAnimationFrame
    const parallaxEffect = () => {
        window.requestAnimationFrame(() => {
            containerRefs.current.forEach((container, index) => {
                if (container && index % 2 !== 0) { // Only apply to odd indices
                    const rect = container.getBoundingClientRect();
                    const offset = window.scrollY - rect.top;
                    const parallaxSpeed = 0.05; // Adjust speed
                    if (imageRefs.current[index]) {
                        const directionMultiplier = 1; // You can adjust direction if needed
                        imageRefs.current[index].style.transform = `translate(0%, ${offset * parallaxSpeed * directionMultiplier
                            }px)`;
                    }
                }
            });
        });
    };
    // Intersection Observer setup
    useEffect(() => {
        const observers = containerRefs.current.map((container) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
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
        };
    }, []);

    const images = [
        "https://images.unsplash.com/photo-1510828325835-5940110b482a?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90byw1db8fGVufDB8fHx8fA%3D%3D",
        "https://webtesting-upload.vercel.app/assets/Gift%20Hamper-B_1RnRnv.jpeg",
        "https://webtesting-upload.vercel.app/assets/8-d_fwD7Dg.jpeg",
        "https://webtesting-upload.vercel.app/assets/Creative%20Bridemaid%20Proposal%20Gifts-FMyqmDZl.jpeg",
        "https://webtesting-upload.vercel.app/assets/591fb91f-01e1-49f1-bda0-e1242b721665-DHvvSQ1P.jpeg",
        "https://webtesting-upload.vercel.app/assets/138bff0d-6cf7-4472-a455-52af6d2d78cd-Cxp7KYtw.jpeg"
    ];

    return (
        <>
            <section>
                <div className="CraftingProcessImages">
                    <Row gutter={[16, 16]}>
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

            <section style={{paddingTop:"10rem"}}>
                <div id="TopContainer">
                    <img
                        src="https://webtesting-upload.vercel.app/assets/giftIcons-B0MnY66R.png"
                        alt=""
                        className="Icon"
                    />
                    <div>
                        <h1 className="CommonTagline">Show Family</h1>
                        <h2 className="CommonHeading">AVO Experience</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CraftingProcess;
