"use client"; // <===== REQUIRED
import Image from "next/image";
// import Gift1 from "images/gift1.jpg";
// import Gift2 from "images/gift2.jpg";
// import Gift3 from "../Images/gift3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "./home.css"
export default function AvoHome() {
    return (

        <div>
            <Swiper
                centeredSlides={true}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="homeImageContainer">
                        <Image src="/images/Gift Wrap _ Add-On.jpeg" width={1000} height={100} alt="Product 1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="homeImageContainer">
                        <Image src="/images/Loved and Found _ Custom and Curated Gift Boxes.jpeg" width={1000} height={100} alt="Product 2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="homeImageContainer">
                        <Image src="/images/gift6.png" width={1000} height={100} alt="Product 4" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="homeImageContainer">
                        <Image src="/images/gift11.png" width={1000} height={100} alt="Product 3" />
                    </div>
                </SwiperSlide>

            </Swiper>
            <div>
                <h1>Welcome To Avo Curations.</h1>
                <p>Unwrap Joy, Share Moments – Perfect Gift Hampers for Every Occasion!</p>
            </div>
        </div>


    );
}