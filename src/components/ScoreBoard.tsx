import { useEffect, useState } from "react";
import { useGameStorage } from "../hooks/useGameStorage";

export const ScoreBoard = () => {
  const { getTopScores } = useGameStorage();
  const [topScores, setTopScores] = useState<number[]>([]);

  useEffect(() => {
    getTopScores().then(setTopScores);
  }, [getTopScores]);

  return (
    <div className="w-full max-w-xs sm:max-w-sm bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-bold mb-3">🏆 Top 5 Puntajes</h3>
      {topScores.length === 0 ? (
        <p>Aún no hay puntajes.</p>
      ) : (
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-1">#</th>
              <th className="text-right py-1">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {topScores.map((score, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="text-left py-1">#{index + 1}</td>
                <td className="text-right py-1 font-semibold">{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
