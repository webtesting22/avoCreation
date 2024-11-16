"use client"
import React, { useState } from "react";
import "./CommonTagline.css"
import { Row, Col } from "antd";
import { IoGiftSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

const BestProduct = () => {
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

    const CardContentData = [
        {
            title: "Occasion-Based Hampers",
            icon: <IoGiftSharp />,
            description: "Curated hampers crafted with care, perfect for every occasion. Thoughtfully chosen, beautifully presented, and ready to delight."
        },
        {
            title: "Personalized Consultation",
            icon: <IoGiftSharp />,
            description: "Expert guidance tailored just for you, every step of the way. Your goals, our insights – achieving success together."
        },
        {
            title: "Customization Expertise",
            icon: <IoGiftSharp />,
            description: "Bringing your unique vision to life with precision and creativity. Customized solutions crafted to fit your style and needs."
        }
    ]
    return (
        <>
            <section>
                <div id="TopContainer">
                    <div>
                        <h1 className="CommonTagline">Show popular</h1>
                        <h2 className="CommonHeading">We do it best.</h2>
                    </div>
                    <img src="https://webtesting-upload.vercel.app/assets/AvoAccessoriesOverlay-CBCd2_8N.png" alt="" className="OverlayLeafImage" />
                    <div>
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
                </div>
                <div className="BestCategoriesShowContainer">
                    <div className="AdjustImages">
                        <Row>
                            <Col lg={12} md={24}>
                                <div className="BannerContainer">
                                    <img src="https://images.unsplash.com/photo-1513726214296-1f2e95e452d8?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <div className="BannerContainer">
                                    <img src="https://images.unsplash.com/photo-1513726214296-1f2e95e452d8?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* 
                    <Row>
                        {CardContentData.map((item, index) => (
                            <Col
                                lg={8}
                                md={12}
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 200} // Delay increases by 1 second for each item
                                data-aos-duration="1000" // Animation duration (optional)
                            >
                                <div id="BestCategoriesCard">
                                    <div id="FillColorAnimation">
                                    </div>
                                    <div style={{ position: "sticky" }}>
                                        <div id="IconContainer">
                                            {item.icon}
                                        </div>
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <br /><br />
                                        <button
                                            className="AnimatedCommonBtn"
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                            style={{
                                                transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                                            }}
                                        >
                                            Schedule a call
                                        </button>
                                        <br /><br />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
 */}
                </div>
            </section>
        </>
    )
}
export default BestProduct