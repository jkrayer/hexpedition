const MAP_ENDPOINT = "http://localhost:3000/maps/";

export async function getMap(id) {
  const response = await fetch(`${MAP_ENDPOINT}${id}`, {
    method: "GET",
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
