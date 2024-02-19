/**
 * @typedef { "capital" | "town" | "village" | "fort" | "ruin" | "lair" | "ruin-lair" | "forest" | "plains" | "swamp" | "hills" | "mountain" | "forest-hills" | "plains-hills" } Terrain
 */

/**
 * @typedef { Object } HEX
 * @property { number } id - The default number of players.
 * @property { boolean } hex.revealed - Hex has been viewed
 * @property { boolean } hex.traversed - Hex has been travelled
 * @property { Terrain } hex.revealedTerrain - Hex to show when revealed is true
 * @property { Terrain } hex.traversedTerrain - Hex to show when traversed is true
 * @property { boolean } [hex.adjacent] - Hex is adjacent to the current player position
 * @property { boolean } [hex.occupied] - Current player occupied space
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
