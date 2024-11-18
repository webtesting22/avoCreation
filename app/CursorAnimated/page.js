"use client"
import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Cursor.css"
const CursorAnimated = () => {
    const [stars, setStars] = useState([]);
    const [isMoving, setIsMoving] = useState(false);

    // Define a set of colors for the stars
    const colors = ["#000000","#000000","#000000","#000000","#000000","#000000","#000000"];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setIsMoving(true);
            const { clientX: x, clientY: y } = e;

            // Pick a random color from the array
            const color = colors[Math.floor(Math.random() * colors.length)];
            const newStar = { x, y, color, id: Math.random() };

            // Add a new star and limit the number of stars
            setStars((prevStars) => [...prevStars.slice(-10), newStar]);

            // Set a timeout to reset the movement status when the cursor stops
            clearTimeout(window.starTimeout);
            window.starTimeout = setTimeout(() => setIsMoving(false), 100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <>
            <div className="star-cursor-overlay">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className={`star ${isMoving ? 'moving' : ''}`}
                        style={{
                            left: star.x,
                            top: star.y,
                            backgroundColor: star.color, // Set the background color dynamically
                            opacity: isMoving ? 1 : 0,
                        }}
                    ></div>
                ))}
            </div>
        </>
    )
}
export default CursorAnimated