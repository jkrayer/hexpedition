import React, { useEffect, useMemo } from "react";
import Hex from "./Hex";
import Loader from "./Loader";
import { useGetMap } from "../api/map";

// OR can I do this with css by making the container a certain height and
// allowing for refloew. i'd probab;ly need a top margin on every nth*2 hex
const sliceColumns = (list: HEX[], colHeight: number): Array<HEX[]> => {
  const cols = [];

  for (
    let start = 0, end = colHeight;
    start < list.length;
    start += colHeight, end += colHeight
  ) {
    cols.push(list.slice(start, end));
  }

  return cols;
};

function RenderMap({ data: { map_data, map_height } }: { data: MAP }) {
  const cols = useMemo(
    () => sliceColumns(map_data, map_height),
    [map_data, map_height]
  );

  const handleClick = (e) => console.log(e);

  const hexes = cols.map((col, colIndex) => (
    <div key={`col-${colIndex}`}>
      {col.map((hex, hexIndex) => (
        <Hex
          key={`index=${colIndex + hexIndex}`}
          hex={hex}
          index={hexIndex}
          onClick={handleClick}
        />
      ))}
    </div>
  ));

  map_data.map(({ revealedTerrain }, index) => (
    <div key={index}>{revealedTerrain}</div>
  ));

  return <div id="map">{hexes}</div>;
}

export default function HexMap() {
  const { getMap, ...props } = useGetMap();

  useEffect(() => {
    getMap(2);
  }, []);

  return <Loader<MAP> {...props} Component={RenderMap} />;
}
