interface Props {
  score: number;
  timeLeft: number;
}

export const GameHUD = ({ score, timeLeft }: Props) => {
  return (
    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md text-gray-800 flex flex-col items-end text-sm sm:text-base">
      <div>
        ⏱ Tiempo: <strong>{timeLeft}s</strong>
      </div>
      <div>
        🎯 Puntaje: <strong>{score}</strong>
      </div>
    </div>
  );
};
