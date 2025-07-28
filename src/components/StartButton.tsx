interface Props {
    onStart: () => void;
}

export const StartButton = ({onStart}: Props) => {
  return (
    <button
      className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={onStart}
    >
      Iniciar juego
    </button>
  );
};