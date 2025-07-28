import { useCallback } from "react";
import { get, keys, set } from "idb-keyval";

export const useGameStorage = () => {
  const saveScore = async (score: number) => {
    const timestamp = new Date().toISOString();
    await set(`score-${timestamp}`, score);
  };

  const getTopScores = useCallback(async (limit = 5): Promise<number[]> => {
    const allKeys = await keys();
    const scoreKeys = allKeys.filter(
      (k) => typeof k === "string" && k.startsWith("score-")
    );

    const scores = await Promise.all(scoreKeys.map((k) => get(k)));
    const sorted = scores
      .filter((s): s is number => typeof s === "number")
      .sort((a, b) => b - a)
      .slice(0, limit);

    return sorted;
  }, []);

  return { saveScore, getTopScores };
};
