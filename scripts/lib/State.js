import { Subject } from "./Observer.js";

export default class State extends Subject {
  constructor() {
    super();

    this.state = {
      hexmap: {
        loading: true,
        error: null,
        data: {},
      },
    };
  }

  getHexMap() {
    return this.state.hexmap;
  }

  setHexMap(newMapState) {
    this.state.hexmap = newMapState;
    this.notify(this.state);
  }
}
