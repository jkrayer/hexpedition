import React, { useCallback } from "react";

const terrain = (hex: HEX) =>
  hex.traversed
    ? hex.traversedTerrain
    : hex.revealed
    ? hex.revealedTerrain
    : "unexplored";

const className = (hex: HEX): string =>
  hex.occupied ? "start" : hex.adjacent ? "adjacent" : "unexplored"; // exists so classList.add doesn't error

export default function Hex({
  hex,
  index,
  onClick,
}: {
  hex: HEX;
  index: number;
  onClick: (arg0: React.MouseEvent<HTMLDivElement>) => void;
}) {
  const click = useCallback<(arg0: React.MouseEvent<HTMLDivElement>) => void>(
    (e) => {
      if (hex.adjacent) {
        onClick(e);
      }
    },
    [onClick, hex]
  );

  return (
    <div className={className(hex)} data-key={index} onClick={click}>
      {terrain(hex)}
    </div>
  );
}
