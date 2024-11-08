"use client"
import React, { useState } from "react";
import "./CommonTagline.css"
import { Row, Col } from "antd";
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
            title: "Space Planning",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum."
        },
        {
            title: "Custom Furniture",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum"
        },
        {
            title: "Furniture Layouts",
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
                            Hellooooo
                        </button>
                    </div>
                </div>
                <div className="BestCategoriesShowContainer">
                    <Row>
                        {CardContentData.map((item, index) => (
                            <Col lg={8} key={index}>
                                <div style={{ backgroundColor: "red", height: "50vh", width: "100%" }}>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
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