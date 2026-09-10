import React, { useEffect, useState } from 'react';

const SpotlightBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'background 0.15s ease-out',
        background: `radial-gradient(
          650px circle at ${position.x}px ${position.y}px,
          rgba(139, 92, 246, 0.18),
          rgba(99, 102, 241, 0.08) 40%,
          transparent 80%
        )`,
      }}
    />
  );
};

export default SpotlightBackground;