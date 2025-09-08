import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Add trail point
      const newTrail = { x: newPosition.x, y: newPosition.y, id: trailId++ };
      setTrails(prev => [...prev.slice(-8), newTrail]);
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor"
        style={{
          left: `${mousePosition.x - 4}px`,
          top: `${mousePosition.y - 4}px`,
        }}
      />
      
      {/* Trail cursors */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x - 2}px`,
            top: `${trail.y - 2}px`,
            opacity: (index + 1) / trails.length * 0.5,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;