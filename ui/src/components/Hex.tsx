import React from "react";

const terrain = (hex: HEX) =>
  hex.traversed
    ? hex.traversedTerrain
    : hex.revealed
    ? hex.revealedTerrain
    : "unexplored";

const className = (hex: HEX): string =>
  hex.occupied ? "start" : hex.adjacent ? "adjacent" : "unexplored"; // exists so classList.add doesn't error

export default function Hex({ hex, index }: { hex: HEX; index: number }) {
  return (
    <div className={className(hex)} data-key={index}>
      {terrain(hex)}
    </div>
  );
}
