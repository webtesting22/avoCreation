"use client";
import React from "react";
import "./AvoHome.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
// Import required Swiper modules
import { Autoplay, Pagination, Navigation,EffectFade } from "swiper/modules";

const mediaItems = [
    {
        type: "video",
        src: "https://webtesting-upload.vercel.app/assets/GiftVideo-CERbDDvN.mp4",
    },
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1480632563560-30f503c09195?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1608755727748-dfa2e44f255b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1513507544439-d2cd3d79b274?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


export default function AvoHome() {
    return (
        <div id="AvoHomeHeroMainContainer">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation,EffectFade]}
                className="mySwiper"
            >
                {mediaItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        {item.type === "video" ? (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        ) : (
                            <img
                                src={item.src}
                                alt={`Media ${index}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Bottom container (optional, uncomment if needed)
            <div id="BottomContainer">
                <div id="LeftSideBottomContainer">
                    <div></div>
                    <div></div>
                </div>
            </div> */}
        </div>
    );
}
