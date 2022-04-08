import '../styles/componets.css'
import { TILE_SIZE, DEMON_TILE_SIZE } from '../settings/constants'


interface Props {initialPosition:{x:number, y:number}}

export function Trap(props:Props) {
    return(
    
        <div  style={{
            position: 'absolute',
            top:  TILE_SIZE * props.initialPosition.y,
            left: TILE_SIZE * props.initialPosition.x,

            width: TILE_SIZE, 
            height: TILE_SIZE,
            backgroundImage:'url(./assets/TRAP.png)',
            backgroundRepeat: "no-repeat",
            animation: 'trap-animation 0.6s steps(8) infinite'
        }}/>
    )
}