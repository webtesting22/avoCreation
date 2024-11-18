import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {

    const SocialIconsdata = [
        {
            icon: <FaFacebook />,
            link: "Facebook",
            title: "@Demo"
        },
        {
            icon: <AiFillInstagram />,
            link: "Instagram",
            title: "@Demo"
        },
        {
            icon: <FaTwitter />,
            link: "Twitter",
            title: "@Demo"
        }
        ,
        {
            icon: <FaLinkedin />,
            link: "Linkedin",
            title: "@Demo"
        }
    ]
    const NavigationsLinks = [
        {
            path: "/about",
            Links: "About"
        },

    ];
    return (
        <>
            <section id="FooterContainer">
                <Row>
                    <Col lg={8} md={24}>
                        <div className="LogoAndBioContainer">
                            <img src="https://webtesting-upload.vercel.app/assets/hindilogo-DyEuu-Wo.jpg" className="Footer-Logo"></img>
                        </div>
                    </Col>
                    <Col lg={8} md={24}>
                        <div className="ShortNavigationLinksContainer">
                            <div className="ContainerHeading">
                                Navigate
                            </div>

                            {NavigationsLinks.map((item, index) => (
                                <Link key={index} href={item.path}>
                                    <div key={index} className="SocialContainer">
                                        <p>{item.Links}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col lg={8} md={24}>
                        <div className="SocialIconsContainer">
                            <div className="ContainerHeading">
                                Follow us
                            </div>
                            {SocialIconsdata.map((item, index) => (
                                <div key={index} className="SocialContainer">
                                    {item.icon}<p>@{item.link}</p>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", padding: "20px 0px" }}>
                    <p style={{ textAlign: "center" }}>@2024 <Link href="https://www.outleadsolutions.com/" target="_blank"><b>OutLead Solutions.</b></Link> All rights reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer