import { useGameState } from "../hooks/useGameState";
import { StartButton } from "../components/StartButton";
import { useMovingBox } from "../hooks/useMovingBox";
import { MovingBox } from "../components/MovingBox";
import { GameHUD } from "../components/GameHUD";

export const GamePage = () => {
  const { isPlaying, startGame, handleHit, score, timeLeft } = useGameState();
  const { position, color, size, boxRef } = useMovingBox(isPlaying);

  return (
    <div className="w-full h-screen relative bg-gray-100 overflow-hidden">
      {!isPlaying ? (
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
