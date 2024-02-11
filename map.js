/**
 * @typedef { "capital" | "town" | "village" | "fort" | "ruin" | "lair" | "ruin-lair" | "forest" | "plains" | "swamp" | "hills" | "mountain" | "forest-hills" | "plains-hills" } Terrain
 */

/**
 * @typedef { Object } HEX
 * @property { number } id - The default number of players.
 * @property { boolean } revealed - Hex has been viewed
 * @property { boolean } traversed - Hex has been travelled
 * @property { Terrain } revealedTerrain - Hex to show when revealed is true
 * @property { Terrain } traversedTerrain - Hex to show when traversed is true
 */

/**
 * @type {Array<HEX>}
 */
const hex = [
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "forest",
    traversedTerrain: "forest",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: true,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    adjacent: true,
  },
  {
    revealed: true,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    adjacent: true,
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: true,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    adjacent: true,
  },
  {
    revealed: true,
    traversed: true,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    occupied: true,
  },
  {
    revealed: true,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    adjacent: true,
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: true,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    adjacent: true,
  },
  {
    revealed: true,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
    adjacent: true,
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
  {
    revealed: false,
    traversed: false,
    revealedTerrain: "swamp",
    traversedTerrain: "swamp",
  },
];
