import useEventListener from "@use-it/event-listener";
import { useContext } from "react";
import { ChestsContext } from "../contexts/chest";
import { canvas, ECanvas } from "../contexts/helpers";
import { GAME_SIZE } from "../settings/constants";
import { Chest } from "./Chest";
import { Demon } from "./Demon";
import { Hero } from "./Hero";
import { MineDemon } from "./MineDemon";
import { Trap } from "./Trap";

function getCavasMap() {
 const array = [];

 for (let y = 0; y < canvas.length; y++) {
  const canvasY = canvas[y];

  for (let x = 0; x < canvasY.length; x++) {
   const canvasYX = canvasY[x];

   const position = {x: x, y: y};
   const text = canvas[y][x] || canvasYX;
   const key = `${x}-${y}`

   
   if (text === ECanvas.HERO) { 
    array.push(<Hero key={key} initialPosition={position}/>) }
   
    if (text === ECanvas.MINI_DEMON) { 
     array.push(<MineDemon key={key} initialPosition={position}/>) }
   
     if (text === ECanvas.DEMON) { 
      array.push(<Demon key={key} initialPosition={position}/>) }
   
      if (text === ECanvas.CHEST) { 
       array.push(<Chest key={key} initialPosition={position}/>) }
   
       if (text === ECanvas.TRAP) { 
        array.push(<Trap key={key} initialPosition={position}/>) }
  }
 }

 return array
}
const elements = getCavasMap();

export function Borde() {
 const chestsContext = useContext(ChestsContext)
 
    return(
        <div>
        {elements}
        {chestsContext.totalChest === chestsContext.openedChets.total && (
         <img src="./Assets/DOOR-OPEN.png" alt="door open" style={{
         position: 'absolute',
         left: 578
        }} /> 
        )}
{ <img src='./Assets/TILESET.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} /> }
        </div>

    );
}