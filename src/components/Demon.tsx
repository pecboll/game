import '../styles/componets.css'
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from '../settings/constants'
import useDemonMoviment from '../hooks/enemyMoviment'
import { ECanvas } from '../contexts/helpers'

interface Props {initialPosition:{x:number, y:number}}

export function Demon(props:Props) {
 const {enemyPosition, direction} = useDemonMoviment(props.initialPosition, ECanvas.DEMON)
    return(
    
        <div  style={{
            position: 'absolute',
            top: TILE_SIZE * enemyPosition.y,
            left: TILE_SIZE * enemyPosition.x,

            width: DEMON_TILE_SIZE, 
            height: DEMON_TILE_SIZE,
            backgroundImage:'url(./assets/DEMON.png)',
            backgroundRepeat: "no-repeat",
            animation: 'Demon-animation 0.5s steps(4) infinite',
            zIndex: 1,
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`
        }}/>
    )
}