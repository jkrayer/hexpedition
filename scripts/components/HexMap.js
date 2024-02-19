import { Observer } from "../lib/Observer.js";

export default class HexMap extends Observer {
  constructor(appState) {
    super();
    this.appState = appState;
    this.render(appState.getHexMap());
  }

  render(hexMap) {
    if (hexMap.loading) {
      console.log("Loading...");
    } else if (hexMap.error !== null) {
      console.log("Has error:", error);
    } else {
      console.log("Will render:", hexMap);
    }
  }

  update(state) {
    this.render(state.hexmap);
  }
}
