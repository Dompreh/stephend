import React, { useEffect, useState } from "react";

const Splash = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onFinish, 1000); // Match this duration with the CSS transition duration
    }, 1500); // Adjust the duration to match your splash screen display time

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`brand ${isExiting ? 'exit' : 'enter'}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">Stephen</div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
