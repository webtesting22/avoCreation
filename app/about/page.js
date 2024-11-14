"use client"
import { useState, useRef } from "react";
import "./AboutUs.css"
import { FaArrowDownLong } from "react-icons/fa6";
import { Row, Col } from "antd";
import { IoGiftSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { FaGift } from "react-icons/fa";
import { RiGift2Fill } from "react-icons/ri";
import Marquee from 'react-fast-marquee';
const giftPoints = [
  "Elegant Packaging",
  "Premium Quality",
  "Personalized Messages",
  "Eco-Friendly",
  "Locally Sourced Products",
  "Unique Selections",
  "Customizable Hampers",
  "Fast Delivery",
  "Holiday Specials",
  "Corporate Gifts",
  "Birthday Surprises",
  "Anniversary Specials",
  "Wellness Hampers",
  "Luxury Treats",
  "Artisan Products",
  "Family Hampers",
  "Gift for Every Occasion",
  "Thoughtful Selections",
  "Delicious Treats",
  "Beautiful Presentation",
  "Quality Guaranteed",
  "Customer Favorites",
  "Handpicked Items",
  "Exquisite Taste"
];
export default function page() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const topContainerRef = useRef(null);
  const handleMouseMove = (e) => {
    // Calculate position relative to the button center
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };
  const handleScrollToTopContainer = () => {
    if (topContainerRef.current) {
      topContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleMouseLeave = () => {
    // Reset position when the mouse leaves the button
    setPosition({ x: 0, y: 0 });
  };
  const CardContentData = [
    {
      title: "Occasion-Based Hampers",
      icon: <IoGiftSharp />,
      description: "Our occasion-based hampers are thoughtfully designed to elevate life’s special moments, from celebrations of love to expressions of comfort and appreciation."
    },
    {
      title: "Personalized Consultation",
      icon: <IoGiftSharp />,
      description: "We start with a conversation to understand your unique needs, budget preferences, and the essence of the occasion."
    },
    {
      title: "Customization Expertise",
      icon: <IoGiftSharp />,
      description: "Personalization is at the heart of what we do. Tailor every detail, from products & packaging selection to personalized monograms and branding."
    },
    {
      title: "Artful Packaging",
      icon: <IoGiftSharp />,
      description: "Stunning packaging that enhances the overall experience and aesthetics."
    },
    {
      title: "Budget-Friendly & Size Options",
      icon: <IoGiftSharp />,
      description: "Luxurious hampers in a range of sizes and budgets, from compact to grand, to suit any occasion."
    },
    {
      title: "Quality Assurance",
      icon: <IoGiftSharp />,
      description: "Only the finest, meticulously curated products make it into your hampers."
    },
    {
      title: "Themed & Seasonal Collections",
      icon: <IoGiftSharp />,
      description: "Discover specialty hampers, from gourmet delights to spa indulgences, in exclusive collections inspired by each season’s latest trends."
    },
    {
      title: "Local & International Products",
      icon: <IoGiftSharp />,
      description: "A blend of local artisanal treats and exotic global delicacies."
    },
    {
      title: "Timely Delivery",
      icon: <IoGiftSharp />,
      description: "Reliable, punctual delivery for any occasion."
    },
    {
      title: "Sustainability",
      icon: <IoGiftSharp />,
      description: "Eco-friendly packaging and locally sourced products for a sustainable choice."
    }

  ]

  return (
    <>
      <div id="AboutUsSection">
        <div className="AboutUsContentContainer">
          <div id="AboutBlackOvelay">

          </div>
          <div className="AdjustBothContainer">
            {/* <div className="TopContainerAbout">
              <p>About Avo Curation</p>
            </div> */}
            <div className="BottomContainerAbout">
              <div>
                <h1>Gift <br /> Excellence</h1>
                <br /><br />
                <p>About Avo Curation</p>
                {/* <p>Unwrap Joy, Share Love</p> */}
              </div>
              <div>
                <button
                  className="AnimatedCommonBtn"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleScrollToTopContainer} // Add the onClick event here
                  style={{
                    transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)`,
                  }}
                >
                  <FaArrowDownLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-tag-container">
        <img src="https://webtesting-upload.vercel.app/assets/Animated-OXhW_vJ0.gif" alt="" />
        <Marquee gradient={false} speed={40}>
          {giftPoints.map((point, index) => (
            <div key={index} className="marquee-item">
              <span className="green-dot"><RiGift2Fill /></span>
              <span className={`gift-point ${index % 2 !== 0 ? 'odd' : ''}`}>
                {point}
              </span>
            </div>
          ))}
        </Marquee>

      </div>

      <section ref={topContainerRef}>
        <div id="TopContainer" >
          <img src="https://webtesting-upload.vercel.app/assets/giftIcons-B0MnY66R.png" alt="" className="Icon" />
          <div>
            <h1 className="CommonTagline">Show Family</h1>
            <h2 className="CommonHeading">AVO Experience</h2>
          </div>
          {/* <div>
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
          </div> */}
        </div>

        <div className="BestCategoriesShowContainer">


        </div>
        <br /><br /><br />
      </section>
    </>
  );
}
