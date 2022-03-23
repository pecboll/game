import '../styles/componets.css'
import { TILE_SIZE, DEMON_TILE_SIZE } from '../settings/constants'

export function Chest() {
    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  TILE_SIZE * 8,
            left: TILE_SIZE * 16,

            width: TILE_SIZE, 
            height: TILE_SIZE,
            backgroundImage:'url(./assets/CHEST.png)',
            backgroundRepeat: "no-repeat",
            animation: 'chest-animation 1s steps(4) infinite'
        }}/>
    )
}