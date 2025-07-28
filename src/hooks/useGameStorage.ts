import { set } from "idb-keyval";

export const useGameStorage = () => {
  const saveScore = async (score: number) => {
    const timestamp = new Date().toISOString();
    await set(`score-${timestamp}`, score);
  };

  return { saveScore };
};
