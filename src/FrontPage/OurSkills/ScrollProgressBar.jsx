import React, { useState, useEffect } from 'react';
import "./ScrollProgressBar.css";

function ScrollProgressBar({ targetPercentage, sectionRef }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const scrollPercentage = Math.max(0, Math.min(100, (1 - sectionTop / windowHeight) * 100));
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRef]);

  return (
    <div className="mb-3 relative h-10">
      <div id="progress-bar" className="absolute top-0 left-0 " style={{ width: `${Math.min(scrollProgress, targetPercentage)}%`, borderRadius: '30px', border: '5px solid #474747' }}></div>
      <div className="relative w-full h-full flex justify-center items-center bg-[#778899] " style={{ borderRadius: '30px', border: '5px solid #474747' }}>
        <p className="text-black font-bold z-10">{`${Math.min(scrollProgress, targetPercentage).toFixed(0)}%`}</p>
      </div>
    </div>
  );
}

export default ScrollProgressBar;
