export {};

declare global {
  // see ../map.js
  type TERRAIN =
    | "capital"
    | "town"
    | "village"
    | "fort"
    | "ruin"
    | "lair"
    | "ruin-lair"
    | "forest"
    | "plains"
    | "swamp"
    | "hills"
    | "mountain"
    | "forest-hills"
    | "plains-hills";

  type HEX = {
    revealed: boolean;
    traversed: boolean;
    revealedTerrain: TERRAIN;
    traversedTerrain: TERRAIN;
    occupied?: true;
    adjacent?: true;
  };

  type MAP = {
    id: number;
    type: "map" | "instance";
    name: string;
    map_height: number;
    view_radius: number;
    start_hex: number;
    map_data: HEX[];
  };
}
