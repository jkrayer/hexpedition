import { Observer } from "../lib/Observer.js";

export default class HexMap extends Observer {
  constructor(appState) {
    super();
    this.hexMap = appState.getHexMap();
    this.render();
  }

  terrain(hex) {
    hex.traversed
      ? hex.traversedTerrain
      : hex.revealed
      ? hex.revealedTerrain
      : "unexplored";
  }

  renderHex(hex, index) {
    const className = hex.occupied
      ? "start"
      : hex.adjacent
      ? "adjacent"
      : "unexplored"; // exists so classList.add doesn't error
    const data = this.terrain(hex);

    const d = document.createElement("div");
    d.setAttribute("data-key", index);
    d.classList.add(className);
    d.append(`${data}-${index}`);

    return d;
  }

  renderAll() {
    const mapEl = document.getElementById("map"); // niavely not dealing with null
    const { map_data: mapData, map_height: mapHeight } = this.hexMap.data;

    for (let i = 0, ii = mapData.length; i < ii; i) {
      let d = document.createElement("div");

      let j = i;
      let jj = Math.min(i + mapHeight, mapData.length);

      for (; j < jj; j++) {
        d.appendChild(this.renderHex(mapData[j], j));
      }

      i = j;
      mapEl.appendChild(d);
    }
  }

  render() {
    console.log("render", this.hexMap);
    if (this.hexMap.loading) {
      console.log("Loading...");
    } else if (this.hexMap.error !== null) {
      console.log("Has error:", this.hexMap.error);
    } else {
      this.renderAll();
    }
  }

  update(state) {
    this.hexMap = state.hexmap;
    this.render();
  }
}
