import '../styles/componets.css'
import { HEAD_SIZE, TILE_SIZE, HEAD_OFFSET } from '../settings/constants'

export function Hero() {
    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  TILE_SIZE * 2,
            left: TILE_SIZE * 2,

            width: TILE_SIZE, 
            height: HEAD_SIZE,
            backgroundImage:'url(./assets/hero.png)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${HEAD_OFFSET}px `,
            animation: 'hero-animation 0.4s steps(4) infinite'
        }}/>
    )
}