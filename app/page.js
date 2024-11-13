"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import About from "./about/page"
import AvoHome from "./avoHome/page";
import BestProduct from "./BestProducts/page";
import ShowProductsHomepage from "./showProductsHome/page";

export default function Home() {
  const [stars, setStars] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  // Define a set of colors for the stars
  const colors = ['#FFD700', '#FF69B4', '#7FFFD4', '#FF6347', '#1E90FF', '#ADFF2F'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsMoving(true);
      const { clientX: x, clientY: y } = e;

      // Pick a random color from the array
      const color = colors[Math.floor(Math.random() * colors.length)];
      const newStar = { x, y, color, id: Math.random() };

      // Add a new star and limit the number of stars
      setStars((prevStars) => [...prevStars.slice(-20), newStar]);

      // Set a timeout to reset the movement status when the cursor stops
      clearTimeout(window.starTimeout);
      window.starTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div>

      <AvoHome />
      <BestProduct />
      <ShowProductsHomepage />
    </div>
  );
}
