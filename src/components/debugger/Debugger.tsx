import { useContext, useState } from "react";
import { CanvasContext } from "../../contexts/canvas";
import { Hdb } from "../../hooks/heroMoviment";
import { Tile } from "./Tile";


function getCavasMap(canvas) {
 const tilesArreys = [];

 for (let y = 0; y < canvas.length; y++) {
  const canvasY = canvas[y];

  for (let x = 0; x < canvasY.length; x++) {
   const canvasYX = canvasY[x];

   const position = {x: x, y: y};
   const text = canvas[y][x] || canvasYX;
   const key = `${x}-${y}`

   tilesArreys.push(
    <Tile key={key} position={position} text={text} />)
  }
 }

 return tilesArreys
}
export function Debuger() {

 const {canvas} = useContext(CanvasContext);

 const tiles = getCavasMap(canvas);
 const dd = Hdb()

 return(
  <div style={{display: dd.db}}>
   {tiles}
  </div>
 )
}