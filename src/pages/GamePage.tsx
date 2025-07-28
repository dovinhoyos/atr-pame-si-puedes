import { useGameState } from "../hooks/useGameState";
import { useGameStorage } from "../hooks/useGameStorage";
import { useMovingBox } from "../hooks/useMovingBox";

import { StartButton } from "../components/StartButton";
import { MovingBox } from "../components/MovingBox";
import { GameHUD } from "../components/GameHUD";
import { GameOverScreen } from "../components/GameOverScreen";

export const GamePage = () => {
  const { isPlaying, startGame, handleHit, resetGame, score, timeLeft } =
    useGameState();
  const { position, color, size, boxRef } = useMovingBox(isPlaying);
  const { saveScore } = useGameStorage();

  const isGameOver = !isPlaying && timeLeft === 0;

  const handleRestart = () => {
    resetGame();
  };

  if (isGameOver) {
    saveScore(score);
  }

  return (
    <div className="w-full h-screen relative bg-gray-100 overflow-hidden">
      {isGameOver ? (
        <GameOverScreen score={score} onRestart={handleRestart} />
      ) : !isPlaying ? (
        <div className="flex items-center justify-center h-full">
          <StartButton onStart={startGame} />
        </div>
      ) : (
        <>
          <MovingBox
            onClick={handleHit}
            position={position}
            color={color}
            size={size}
            boxRef={boxRef}
          />

          <GameHUD score={score} timeLeft={timeLeft} />
        </>
      )}
    </div>
  );
};
