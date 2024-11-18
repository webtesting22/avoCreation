"use client"
import React, { useState, useRef, useEffect } from "react";
import "./ProductHome.css"
import hampersProducts from "./ProductsData";
import { Row, Col } from "antd";
import Masonry from "react-masonry-css";
const ShowProductsHomepage = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseMove = (e) => {
        // Calculate position relative to the button center
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 1;
        const y = e.clientY - rect.top - rect.height / 1;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        // Reset position when the mouse leaves the button
        setPosition({ x: 0, y: 0 });
    };

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    // Parallax effect function
    const parallaxEffect = () => {
        const rect = containerRef.current.getBoundingClientRect();
        const offset = window.scrollY - rect.top;
        const parallaxSpeed = 0.1; // Adjust for faster or slower effect

        imageRef.current.style.transform = `translate(0%, ${offset * parallaxSpeed}px)`;
    };

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', parallaxEffect);
                } else {
                    window.removeEventListener('scroll', parallaxEffect);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the container is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    const breakpointColumnsObj = {
        default: 3, // Three columns by default
        1100: 2,    // Two columns for medium screens
        700: 1      // One column for small screens
    };
    return (

        <>
            <section>
                <div id="OverlayContainer">
                    <div  ref={containerRef} style={{height:"100vh"}}>
                        <img
                            src="https://images.unsplash.com/photo-1510828325835-5940110b482a?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90byw1db8fGVufDB8fHx8fA%3D%3D"
                            alt="Parallax"
                            className="parallax-image-home"
                            ref={imageRef}
                        />
                    </div>
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
                    {/* <Row>
                        {hampersProducts.map((item, index) => (
                            <Col lg={8} key={index}>
                                <div
                                    id="AnimatedHoverCardContainer"
                                    style={{
                                        marginTop: index % 2 === 0 ? '0px' : '0',  // Apply marginTop to every even item (0, 2, 4, etc.)
                                        marginBottom: index % 2 === 0 ? '0px' : '0'  // Apply marginBottom to every even item
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}  // Delay increases by 200ms for each item
                                    data-aos-duration="1000"
                                    onMouseEnter={() => setHoveredIndex(index)}  // Set hoveredIndex on mouse enter
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="Heloos">
                                        <div>
                                            <img
                                                className="primary-image"
                                                src={hoveredIndex === index ? item.alterNameImage : item.imageUrl} // Conditionally render based on hover
                                                alt="Product Image"
                                            />
                                        </div>
                                        <div className="NormalOverlay"></div>
                                        <div className="HoverOverlay"></div>
                                        <div className="CardContentContainer">
                                            <div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <h2>{item.category}</h2>
                                                    <h2>{item.name}</h2>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        
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
                    </Row> */}
                    {/* <Row>
                        {hampersProducts.map((item, index) => (
                            <Col lg={8} key={index}>
                                <div className="CardWrapper"> 
                                    <div
                                        id="AnimatedHoverCardContainer"
                                        className="AnimatedHoverCardContainer"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                        data-aos-duration="1000"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="Heloos">
                                            <div>
                                                <img
                                                    className="primary-image"
                                                    src={item.imageUrl}
                                                    alt="avo curation image"
                                                />
                                            </div>
                                            <div className="NormalOverlay"></div>
                                            <div className="HoverOverlay"></div>
                                            <div className="CardContentContainer">
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <h2>{item.category}</h2>
                                                    <h2>{item.name}</h2>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                    </Row> */}
                     <div id="TopContainer">
                    <img src="https://webtesting-upload.vercel.app/assets/giftIcons-B0MnY66R.png" alt="" className="Icon" />
                    <div>
                        <h1 className="CommonTagline">AVO Best</h1>
                        <h2 className="CommonHeading">Occasion Based Hampers</h2>
                    </div>

                </div>

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {hampersProducts.map((item, index) => (
                            // <div className="gallery-item" key={index}>
                            //     <img src={item.imageUrl} alt="" />
                            // </div>
                            <div className="gallery-item" key={index}>
                                <div className="CardWrapper">
                                    <div
                                        id="AnimatedHoverCardContainer"
                                        className="AnimatedHoverCardContainer"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                        data-aos-duration="1000"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="Heloos">
                                            <div>
                                            <img
                                        className="primary-image"
                                        src={hoveredIndex === index ? item.alterNameImage : item.imageUrl}
                                        alt="avo curation image"
                                    />
                                            </div>
                                            <div className="NormalOverlay"></div>
                                            <div className="HoverOverlay"></div>
                                            <div className="CardContentContainer">
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    {/* <h2>{item.category}</h2> */}
                                                    <h2>{item.name}</h2>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                            </div>
                        ))}
                    </Masonry>


                </div>
            </section>
        </>
    )
}
export default ShowProductsHomepage