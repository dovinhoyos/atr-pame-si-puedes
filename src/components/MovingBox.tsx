interface Props {
  onClick: () => void;
  position: { top: number; left: number };
  color: string;
  size: number;
  boxRef: React.RefObject<HTMLDivElement | null>;
}

export const MovingBox = ({
  onClick,
  position,
  color,
  size,
  boxRef,
}: Props) => {
  return (
    <div
      ref={boxRef}
      onClick={onClick}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "8px",
        transition:
          "top 0.3s ease, left 0.3s ease, background-color 0.2s, width 0.2s, height 0.2s",
        cursor: "pointer",
      }}
    />
  );
};
