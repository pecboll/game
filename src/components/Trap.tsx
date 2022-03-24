import '../styles/componets.css'
import { TILE_SIZE, DEMON_TILE_SIZE } from '../settings/constants'

export function Trap() {
    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  TILE_SIZE * 2,
            left: TILE_SIZE * 11,

            width: TILE_SIZE, 
            height: TILE_SIZE,
            backgroundImage:'url(./assets/TRAP.png)',
            backgroundRepeat: "no-repeat",
            animation: 'trap-animation 0.6s steps(8) infinite'
        }}/>
    )
}