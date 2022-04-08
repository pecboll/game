import '../styles/componets.css'
import { TILE_SIZE } from '../settings/constants'
import { useContext } from 'react'
import { ChestsContext } from '../contexts/chest'

interface Props {initialPosition:{x:number, y:number}}

export function Chest(props:Props) {
 const chestsContext = useContext(ChestsContext);

 const shouldAnimate = chestsContext.openedChets.position.find((position) => {
const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

return match;
 })
    return(
        <div  style={{
            position: 'absolute',
            top:  TILE_SIZE * props.initialPosition.y,
            left: TILE_SIZE * props.initialPosition.x,

            width: TILE_SIZE, 
            height: TILE_SIZE,
            backgroundImage:'url(./assets/CHEST.png)',
            backgroundRepeat: "no-repeat",
            animation: shouldAnimate && 'chest-animation 0.7s steps(3) forwards'
        }}/>
    )
}