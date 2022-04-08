import { useState } from "react";
import { EDirection, EWalker } from "../settings/constants";

export function handleNextMoviment(direction, position) {
  
  switch(direction){

    case EDirection.LEFT :
      return{ x: position.x - 1, y: position.y };
      
    case EDirection.RIGHT :
      return{ x: position.x + 1, y: position.y   };
      
    case EDirection.DOWN :
        return{ x: position.x, y: position.y + 1};
      
    case EDirection.UP :
          return{ x: position.x, y: position.y - 1};

    default : return{x: position.x, y: position.y};
  }
 }
export enum ECanvas {
 FLOOR = 0,
 WALL = 1,
 DOOR = 2,
 TRAP = 3,
 MINI_DEMON = 4,
DEMON = 5,
CHEST = 6,
HERO = 7,
}

const FL = ECanvas.FLOOR
const WL = ECanvas.WALL
const DR = ECanvas.DOOR
const TR = ECanvas.TRAP
const MD = ECanvas.MINI_DEMON
const DE = ECanvas.DEMON
const CH = ECanvas.CHEST
const HE = ECanvas.HERO

 // VALOR 1 = PAREDE

 export const canvas = [
[WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL,],
[WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,CH,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,DE,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,DE,FL,FL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,HE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL,],
[WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,],
 ];


export function checkValidMoviment( nextPosition, walker, type) {
const canvasValue = canvas[nextPosition.y][nextPosition.x];
const canvasValue1 = canvas[nextPosition.y -1][nextPosition.x];
const canvasValue2 = canvas[nextPosition.y -1][nextPosition.x -1];
const canvasValue3 = canvas[nextPosition.y][nextPosition.x -1];
const canvasValue4 = canvas[nextPosition.y +1][nextPosition.x];
const canvasValue5 = canvas[nextPosition.y +1][nextPosition.x +1];
const canvasValue6 = canvas[nextPosition.y][nextPosition.x +1];

let result = walker === EWalker.HERO 
?  getHeroValidMoves(canvasValue, canvasValue1, canvasValue2, canvasValue3) 
:  getEnemyValidMoves(canvasValue, canvasValue4, canvasValue5, canvasValue6, type);

return result;
 }

 function getHeroValidMoves(canvasValue, canvasValue1, canvasValue2, canvasValue3) {
  return {
   valid: canvasValue === ECanvas.FLOOR ||           canvasValue === ECanvas.CHEST || canvasValue === ECanvas.TRAP || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
   dead: canvasValue === ECanvas.TRAP || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON || canvasValue1 === ECanvas.DEMON || canvasValue2 === ECanvas.DEMON || canvasValue3 === ECanvas.DEMON,
   chest: canvasValue === ECanvas.CHEST,
   door:  canvasValue === ECanvas.DOOR,
  }
 }
 function getEnemyValidMoves(canvasValue, canvasValue4, canvasValue5, canvasValue6, type) {
  if (type === ECanvas.DEMON) 

  return {
   valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
   dead: canvasValue === ECanvas.HERO || canvasValue4 === ECanvas.HERO  || canvasValue5 === ECanvas.HERO || canvasValue6 === ECanvas.HERO,
   chest: false,
   door: false,
  } 

  else return {
   valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO, 
   dead: canvasValue === ECanvas.HERO ,
   chest: false,
   door: false,
  } 

 }; 

