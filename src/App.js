import React, { useEffect, useState, useRef } from "react";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpringboot } from "react-icons/si";
import "./App.css";

const App = () => {
  const [stars, setStars] = useState([]);
  const backgroundOffset = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const numStars = 350;
    const starElements = Array.from({ length: numStars }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1, // More variation in size
      animationDuration: (Math.random() * 1.5 + 1) + "s", // Faster blinking
    }));
    setStars(starElements);
  }, []);
  
  useEffect(() => {
    const updateBackground = () => {
      document.documentElement.style.setProperty("--bg-move-x", `${backgroundOffset.current.x}px`);
      document.documentElement.style.setProperty("--bg-move-y", `${backgroundOffset.current.y}px`);
      requestRef.current = requestAnimationFrame(updateBackground);
    };
    requestRef.current = requestAnimationFrame(updateBackground);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    backgroundOffset.current.x = (e.clientX - centerX) / 25;
    backgroundOffset.current.y = (e.clientY - centerY) / 25;
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      {/* Background Stars */}
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.animationDuration,
            }}
          ></div>
        ))}
      </div>

      {/* Profile Picture */}
      <div className="profile-container">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />

        {/* Orbiting Icons */}
        <div className="orbit-container">
          {/* Outer Orbit */}
          <div className="orbit">
            <FaReact className="orbit-icon icon1" />
            <FaNodeJs className="orbit-icon icon2" />
            <FaJava className="orbit-icon icon3" />
            <FaJs className="orbit-icon icon4" />
          </div>

          {/* Inner Orbit */}
          <div className="orbit inner">
            <SiMongodb className="orbit-icon icon5" />
            <SiMysql className="orbit-icon icon6" />
            <FaGitAlt className="orbit-icon icon7" />
            <FaGithub className="orbit-icon icon8" />
            <SiSpringboot className="orbit-icon icon9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
