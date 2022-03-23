import '../styles/componets.css'
import { HEAD_OFFSET, HEAD_SIZE, TILE_SIZE } from '../settings/constants'

export function MineDemon() {
    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  TILE_SIZE * 10,
            left: TILE_SIZE * 5,

            width: TILE_SIZE, 
            height: HEAD_SIZE,
            backgroundImage:'url(./Assets/MINI-DEMON.png)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${HEAD_OFFSET}px `,
            animation: 'mineDemon-animation 0.7s steps(4) infinite'
        }}/>
    )
}