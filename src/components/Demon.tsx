import '../styles/componets.css'
import { TILE_SIZE, DEMON_TILE_SIZE } from '../settings/constants'

export function Demon() {
    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  TILE_SIZE * 8,
            left: TILE_SIZE * 8,

            width: DEMON_TILE_SIZE, 
            height: DEMON_TILE_SIZE,
            backgroundImage:'url(./assets/DEMON.png)',
            backgroundRepeat: "no-repeat",
            animation: 'Demon-animation 0.5s steps(4) infinite'
        }}/>
    )
}