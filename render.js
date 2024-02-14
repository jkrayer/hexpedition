(function (win) {
  win.hexplorer = win.hexplorer || {};

  /**
   *
   * @param { HEX } hex
   * @returns { string }
   */
  const terrain = (hex) =>
    hex.traversed
      ? hex.traversedTerrain
      : hex.revealed
      ? hex.revealedTerrain
      : "unexplored";

  /**
   *
   * @param { number } hex
   * @param { number } index
   * @returns { HTMLDivElement }
   */
  const renderHex = (hex, index) => {
    const className = hex.occupied
      ? "start"
      : hex.adjacent
      ? "adjacent"
      : "unexplored"; // exists so classList.add doesn't error
    const data = terrain(hex);

    const d = document.createElement("div");
    d.setAttribute("data-key", index);
    d.classList.add(className);
    d.append(`${data}-${index}`);

    return d;
  };

  /**
   *
   * @param { HTMLDivElement } map
   * @param { [HEX] } mapData
   * @param { number } mapHeight
   * @returns { undefined }
   */
  const renderAll = (mapEl, mapData, mapHeight) => {
    for (let i = 0, ii = mapData.length; i < ii; i) {
      let d = document.createElement("div");

      let j = i;
      let jj = Math.min(i + mapHeight, mapData.length);

      for (; j < jj; j++) {
        d.appendChild(renderHex(mapData[j], j));
      }

      i = j;
      mapEl.appendChild(d);
    }
  };

  win.hexplorer.render = {
    renderAll,
  };
})(window);

// RE-RENDER CODE
// document
//   .querySelector(".start")
//   .classList.replace("start", "adjacent");
// document
//   .querySelectorAll(".adjacent")
//   .forEach((el) => el.classList.remove("adjacent"));
// e.target.classList.add("start");
// getSiblings(
//   HEX_MAP.viewRadius,
//   HEX_MAP.mapHeight,
//   parseInt(e.target.dataset.key, 10),
//   HEX_MAP.mapData.length
// ).forEach((key) => {
//   document
//     .querySelector(`[data-key='${key}']`)
//     .classList.add("adjacent");
// });
