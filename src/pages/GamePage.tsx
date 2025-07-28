import { useGameState } from "../hooks/useGameState";
import StartButton from "../components/StartButton";

export const GamePage = () => {
  const { isPlaying, startGame } = useGameState();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {!isPlaying ? (
        <StartButton onStart={startGame} />
      ) : (
        <p className="text-xl">¡El juego está en marcha!</p>
      )}
    </div>
  );
};
