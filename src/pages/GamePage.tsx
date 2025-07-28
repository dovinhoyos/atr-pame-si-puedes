import { useGameState } from "../hooks/useGameState";
import { StartButton } from "../components/StartButton";
import { useMovingBox } from "../hooks/useMovingBox";
import { MovingBox } from "../components/MovingBox";

export const GamePage = () => {
  const { isPlaying, startGame } = useGameState();
  const { position, color, size, boxRef } = useMovingBox(isPlaying);

  const handleBoxClick = () => {
    console.log("¡Le pegaste al box!");
  };

  return (
    <div className="w-full h-screen relative bg-gray-100 overflow-hidden">
      {!isPlaying ? (
        <div className="flex items-center justify-center h-full">
          <StartButton onStart={startGame} />
        </div>
      ) : (
        <MovingBox
          onClick={handleBoxClick}
          position={position}
          color={color}
          size={size}
          boxRef={boxRef}
        />
      )}
    </div>
  );
};
