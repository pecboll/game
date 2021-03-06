import '../styles/componets.css'
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection, HEAD_SIZE, HEAD_OFFSET } from '../settings/constants'
import useDemonMoviment from '../hooks/enemyMoviment'
import { ECanvas } from '../contexts/helpers'

interface Props {initialPosition:{x:number, y:number}}

export function Demon(props:Props) {
 const {enemyPosition, direction} = useDemonMoviment(props.initialPosition, ECanvas.DEMON)
    return(
    
     <div  style={{
      position: 'absolute',
      top:  TILE_SIZE * enemyPosition.y ,
      left: TILE_SIZE * enemyPosition.x,

      width: TILE_SIZE * 2, 
      height: TILE_SIZE * 2,
      backgroundImage:'url(./Assets/DEMON.png)',
      backgroundRepeat: "no-repeat",
      backgroundPosition: `0 -0px `,
      animation: 'Demon-animation 0.7s steps(4) infinite',
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`,
      zIndex: 1,
  }}/>
    )
}