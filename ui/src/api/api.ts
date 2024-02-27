const API = "http://localhost:3000/";

type ENDPOINTS = "maps" | `maps/${number}`;

export function get(endpoint: ENDPOINTS) {
  return fetch(`${API}${endpoint}`).then((x) => {
    console.log("fetch", x);
    if (x.status === 200) {
      return x.json();
    }

    throw new Error(`${x.status} ${x.statusText}`);
  });
}
