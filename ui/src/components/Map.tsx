import React, { useEffect } from "react";
import Loader from "./Loader";
import { useGetMap } from "../api/map";

function RenderMap({ data: { map_data } }: { data: MAP }) {
  return (
    <ul>
      {map_data.map(({ revealedTerrain }, index) => (
        <li key={index}>{revealedTerrain}</li>
      ))}
    </ul>
  );
}

export default function HexMap() {
  const { getMap, ...props } = useGetMap();

  useEffect(() => {
    getMap(2);
  }, []);

  return <Loader<MAP> {...props} Component={RenderMap} />;
}
