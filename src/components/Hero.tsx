import '../styles/hero.css'
import { TILE_SIZE } from '../settings/constants'

export function Hero() {
    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  48 * 2,
            left: 48 * 2,

            width: TILE_SIZE, 
            height: 100,
            backgroundImage:'url(./assets/hero.png)',
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 0.4s steps(4) infinite'
        }}/>
    )
}