import React from "react";
import "./ProcessContainer.css"
import { Row, Col } from "antd";
const ProcessContainer = () => {
    const ProcessData = [
        {
            title: "Occasion-Based Hampers",
            image:"https://images.unsplash.com/photo-1480632563560-30f503c09195?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descriptions: "Our occasion-based hampers are thoughtfully designed to elevate life’s special moments, from celebrations of love to expressions of comfort and appreciation."
        },
        {
            title: " Personalized Consultation",
            descriptions: "We start with a conversation to understand your unique needs, budget preferences, and the essence of the occasion"
        },
        {
            title: "Customization Expertise",
            descriptions: "Personalization is at the heart of what we do. Tailor every detail, from products & packaging selection to personalized monograms and branding."
        },
        {
            title: "Artful Packaging",
            descriptions: "Stunning packaging that enhances the overall experience and aesthetics."
        },
        {
            title: "Budget-Friendly & Size Options",
            descriptions: "Luxurious hampers in a range of sizes and budgets, from compact to grand, to suit any occasion."
        },
        {
            title: "Quality Assurance",
            descriptions: "Only the finest, meticulously curated products make it into your hampers."
        },
        {
            title: "Themed & Seasonal Collections",
            descriptions: "Discover specialty hampers, from gourmet delights to spa indulgences, in exclusive collections inspired by each season’s latest trends."
        },
        {
            title: "Local & International Products",
            descriptions: "A blend of local artisanal treats and exotic global delicacies."
        },
        {
            title: "Timely Delivery",
            descriptions: "Reliable, punctual delivery for any occasion."
        },
        {
            title: "Sustainability",
            descriptions: "Eco-friendly packaging and locally sourced products for a sustainable choice."
        }
    ]
    return (
        <>
            <section>
                <div id="TopContainer" style={{ paddingTop: "0rem" }}>
                    <img src="https://webtesting-upload.vercel.app/assets/giftIcons-B0MnY66R.png" alt="" className="Icon" />
                    <div>
                        <h1 className="CommonTagline">About AVO</h1>
                        <h2 className="CommonHeading">The AVO Experience</h2>
                        <p>At AVO, we take immense pride in curating a diverse and opulent range of hampers that epitomize luxury and personalization. Explore our exquisite offerings</p>
                    </div>

                </div>
                <div className="ProcessPoints">
                    <Row>
                        {ProcessData.map((item, index) => (
                            <Col key={index} lg={24} data-aos="fade-up"
                            data-aos-delay={index * 100} >
                                <div className="OveryImage">
                                    <div className="BackImageContainer">
                                        <div>
                                        <img src="https://webtesting-upload.vercel.app/assets/leaficon1-CuZO3KGV.png" alt="" style={{width:"70px",margin:"20px 0px",opacity:"0.5"}}/>
                                            <h3>{item.title}</h3>
                                            <p>{item.descriptions}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default ProcessContainer