import { useContext, useState } from 'react'
import { EDirection, EWalker } from '../settings/constants';
import useInterval from '@use-it/interval';
import { CanvasContext } from '../contexts/canvas';

function useDemonMoviment(initialPosition:{x:number,y:number, }, type) {
 const canvasContext = useContext(CanvasContext);
const [enemyPosition, setpositionState] = useState(initialPosition);
const [direction, setDirection] = useState(EDirection.RIGHT);

useInterval(function move() {
 const random = Math.floor(Math.random()* 4) ;
 var directionArray = Object.values(EDirection);
 const randomDirection = directionArray[random]

 const moviment = canvasContext.updateCanvas(randomDirection, enemyPosition, EWalker.ENEMY, type)
 
 if (moviment.nextMove.valid) {
  setpositionState(moviment.nextPosition);
  setDirection(direction);
  }

  if (moviment.nextMove.dead){
   setTimeout(() =>{ alert('Você morreu')});
   window.location.reload()
  }
}, 300);

return {enemyPosition, direction}
}   export default useDemonMoviment;