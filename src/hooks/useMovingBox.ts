import { useEffect, useState, useRef } from "react";

export const useMovingBox = (isPlaying: boolean) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [color, setColor] = useState("red");
  const [size, setSize] = useState(80); 

  useEffect(() => {
    if (!isPlaying) return;

    const moveBox = () => {
      const box = boxRef.current;
      if (!box) return;

      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;

      const newSize = Math.floor(Math.random() * 40) + 60; // entre 60 y 100
      const newTop = Math.random() * (maxHeight - newSize);
      const newLeft = Math.random() * (maxWidth - newSize);

      const newColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;

      setPosition({ top: newTop, left: newLeft });
      setColor(newColor);
      setSize(newSize);
    };

    const interval = setInterval(moveBox, 800);
    moveBox(); // mover inmediatamente

    return () => clearInterval(interval);
  }, [isPlaying]);

  return { boxRef, position, color, size };
};
