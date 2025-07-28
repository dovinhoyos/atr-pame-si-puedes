interface Props {
  score: number;
  onRestart: () => void;
}

const getMessage = (score: number): string => {
  if (score <= 4) return "Bueno... al menos lo intentaste 😅";
  if (score <= 14) return "¡Nada mal! Tenés buen pulso 👏";
  if (score <= 24) return "¡Excelente reflejo! Sos un ninja ⚡";
  return "¿Sos humano o una IA? Esto es trampa 🤖";
};

export const GameOverScreen = ({ score, onRestart }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        🎉 Juego terminado
      </h2>
      <p className="text-xl mb-2">
        Puntaje: <strong>{score}</strong>
      </p>
      <p className="text-lg mb-6">{getMessage(score)}</p>
      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
      >
        Jugar de nuevo
      </button>
    </div>
  );
};
