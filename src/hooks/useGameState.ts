import { useState, useEffect } from "react";

const GAME_DURATION = 30;

export const useGameState = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(GAME_DURATION);
  };

  const resetGame = () => {
    setIsPlaying(false);
  };

  const handleHit = () => {
    if (!isPlaying) return;
    setScore((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return {
    isPlaying,
    score,
    timeLeft,

    handleHit,
    startGame,
    resetGame,
  };
};
