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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum."
        },
        {
            title: "Personalized Consultation",
            icon: <FaUserAlt />,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum"
        },
        {
            title: "Customization Expertise",
            icon: <VscSettings />,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum."
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

                </div>
            </section>
        </>
    )
}
export default BestProduct