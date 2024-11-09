"use client"
import React, { useState } from "react";
import "./ProductHome.css"
import hampersProducts from "./ProductsData";
import { Row, Col } from "antd";
const ShowProductsHomepage = () => {
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

    return (

        <>
            <section>
                <div id="OverlayContainer">
                    <img src="https://images.unsplash.com/photo-1510828325835-5940110b482a?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div id="InsideOverlayContent">
                        <div className="AnimatedDot">
                            <div className="ProductInfo">
                                <div className="CardContainer">
                                    Product Detail
                                </div>
                            </div>
                        </div>
                        <div className="AnimatedDot">
                            <div className="ProductInfo">
                                <div className="CardContainer">
                                    Product Detail
                                </div>
                            </div>
                        </div>
                        <div className="AnimatedDot">
                            <div className="ProductInfo">
                                <div className="CardContainer">
                                    Product Detail
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ProductsCardsContainer">
                    <Row>
                        {hampersProducts.map((item, index) => (
                            <Col lg={8} key={index}>
                                <div
                                    id="AnimatedHoverCardContainer"
                                    style={{
                                        marginTop: index % 2 === 0 ? '60px' : '0',
                                        marginBottom: index % 2 === 0 ? '80px' : '0'  // Apply marginTop to every odd item (1st, 3rd, 5th, etc.)
                                    }}
                                >
                                    <div className="Heloos">
                                        <div>
                                            <img src="https://images.unsplash.com/photo-1603561128963-5f4d971c4959?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                        <div className="HoverOverlay">
                                        </div>
                                        <div className="CardContentContainer">
                                            <div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <h2>{item.category}</h2><h2>{item.name}</h2>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <h2>{item.stock}</h2>
                                                    {/* <br /> */}
                                                    <button
                                                        className="AnimatedCommonBtn"
                                                        onMouseMove={handleMouseMove}
                                                        onMouseLeave={handleMouseLeave}
                                                        style={{
                                                            transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                                                        }}
                                                    >
                                                        View more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
export default ShowProductsHomepage