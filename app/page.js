"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import About from "./about/page"
import AvoHome from "./avoHome/page";
import BestProduct from "./BestProducts/page";
import ShowProductsHomepage from "./showProductsHome/page";
import AboutContent from "./AboutContent/page";


export default function Home() {
  
  return (
    <div>
      
      <AvoHome />
      <AboutContent/>
      {/* <BestProduct /> */}
      <ShowProductsHomepage />
    </div>
  );
}
