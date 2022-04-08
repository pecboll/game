import { useContext, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection, EWalker } from '../settings/constants';
import { CanvasContext } from '../contexts/canvas';
import { ChestsContext } from '../contexts/chest';

function useHeroMoviment(initialPosition:{x:number,y:number}, type) {

const canvasContext = useContext(CanvasContext);
const chestsContext = useContext(ChestsContext);

const [positionState, setpositionState] = useState(initialPosition);
const [direction, setDirection] = useState(EDirection.RIGHT);

const [counter, setCounter] = useState(50)

useEventListener('keydown', (event:{key: string}) => {
 const direction = event.key as EDirection

 const moviment = canvasContext.updateCanvas(direction, positionState, EWalker.HERO, type);

if (moviment.nextMove.valid) {
setpositionState(moviment.nextPosition);
setDirection(direction);
setCounter(counter - 1)
} 

if (moviment.nextMove.dead || counter <= 1) {
setTimeout(() =>{ alert('Você morreu')});
 window.location.reload()
}
if (moviment.nextMove.chest) {
 chestsContext.updateOpenedChests(moviment.nextPosition)
}

if (chestsContext.totalChest === chestsContext.openedChets.total && moviment.nextMove.door) {
 alert( 'Você venceu')
 window.location.reload()
}
    });



return {heroPosition: positionState, direction, counter}
} 

export function Hdb(){    
const [ db, setDb] = useState('none')
useEventListener('keydown', (event:{key: string}) => {
 if(event.key === EDirection.D) {
  if(db === 'none')
  setDb('')
  else setDb('none')
 }
 }); return {db}
}  

export default useHeroMoviment;