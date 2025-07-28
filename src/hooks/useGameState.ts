import { useState } from "react";

export const useGameState = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
  };

  const stopGame = () => {
    setIsPlaying(false);
  };

  return {
    isPlaying,
    startGame,
    stopGame,
  };
};
