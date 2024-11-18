import React from "react";
import "./ProcessContainer.css"
import { Row, Col } from "antd";
const ProcessContainer = () => {
    const ProcessData = [
        {
            title: "Occasion-Based Hampers",
            image: "https://webtesting-upload.vercel.app/assets/37-DE5JFIEx.png",
            descriptions: "Our occasion-based hampers are thoughtfully designed to elevate life’s special moments, from celebrations of love to expressions of comfort and appreciation."
        },
        {
            title: "Personalized Consultation",
            image: "https://webtesting-upload.vercel.app/assets/38-CaHD2Qag.png",
            descriptions: "We start with a conversation to understand your unique needs, budget preferences, and the essence of the occasion."
        },
        {
            title: "Customization Expertise",
            image: "https://webtesting-upload.vercel.app/assets/39-BnNHZYpt.png",
            descriptions: "Personalization is at the heart of what we do. Tailor every detail, from products & packaging selection to personalized monograms and branding."
        },
        {
            title: "Artful Packaging",
            image: "https://webtesting-upload.vercel.app/assets/40-BSs4MjQ6.png",
            descriptions: "Stunning packaging that enhances the overall experience and aesthetics."
        },
        {
            title: "Budget-Friendly & Size Options",
            image: "https://webtesting-upload.vercel.app/assets/41-wEAJtS35.png",
            descriptions: "Luxurious hampers in a range of sizes and budgets, from compact to grand, to suit any occasion."
        },
        {
            title: "Quality Assurance",
            image: "https://webtesting-upload.vercel.app/assets/42-BusbXBcU.png",
            descriptions: "Only the finest, meticulously curated products make it into your hampers."
        },
        {
            title: "Themed & Seasonal Collections",
            image: "https://webtesting-upload.vercel.app/assets/43-BjSbvVnR.png",
            descriptions: "Discover specialty hampers, from gourmet delights to spa indulgences, in exclusive collections inspired by each season’s latest trends."
        },
        {
            title: "Local & International Products",
            image: "https://webtesting-upload.vercel.app/assets/44-szIO0HPr.png",
            descriptions: "A blend of local artisanal treats and exotic global delicacies."
        },
        {
            title: "Timely Delivery",
            image: "https://webtesting-upload.vercel.app/assets/45-BndAtf1c.png",
            descriptions: "Reliable, punctual delivery for any occasion."
        },
        {
            title: "Sustainability",
            image: "https://webtesting-upload.vercel.app/assets/46-C5ngrqKI.png",
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
                            <Col key={index} lg={24}
                            // data-aos="fade-up"
                            // data-aos-delay={index * 100} 
                            >
                                <div className="OveryImage">
                                    <div className="BackImageContainer">
                                        <div>
                                            <img src={item.image} alt="" style={{ width: "200px", margin: "20px 0px", opacity: "0.5",aspectRatio:"3/2",objectFit:"contain" }} />
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
                </div><br /><br /><br />
            </section>
        </>
    )
}
export default ProcessContainer