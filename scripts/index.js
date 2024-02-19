import HexMap from "./components/HexMap.js";
import State from "./lib/State.js";
import { getMap } from "./api/maps.js";

// INIT STATE
const AppState = new State();

// INIT LOCAL CODE
const CurrentHexMap = new HexMap(AppState);
AppState.addObserver(CurrentHexMap);

// MAKE THE SERVER REQUEST
document.addEventListener("DOMContentLoaded", () =>
  getMap(2)
    .then((data) => {
      AppState.setHexMap({
        loading: false,
        error: null,
        data,
      });
    })
    .catch((error) => {
      AppState.setHexMap({
        loading: false,
        error,
        data: {},
      });
    })
);
