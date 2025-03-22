import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starElements = [];
    const numStars = 300; // Increase number of stars

    for (let i = 0; i < numStars; i++) {
      const size =
        Math.random() < 0.85 ? Math.random() * 2 + 1 : Math.random() * 4 + 2; // 85% small, 15% big
      const twinkleSpeed = Math.random() * 3 + 2 + "s"; // Different twinkle speeds
      const top = Math.random() * 100 + "vh";
      const left = Math.random() * 100 + "vw";

      starElements.push({ id: i, top, left, size: size + "px", animationDuration: twinkleSpeed });
    }

    setStars(starElements);
  }, []);

  return (
    <div>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
