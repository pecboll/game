import '../styles/componets.css'

import { HEAD_SIZE, TILE_SIZE, HEAD_OFFSET, EDirection } from '../settings/constants'
import useHeroMoviment from '../hooks/heroMoviment'
import { ECanvas } from '../contexts/helpers'

interface Props {initialPosition:{x:number, y:number}}

export function Hero(props:Props) {
 const {heroPosition, direction, counter} = useHeroMoviment(props.initialPosition, ECanvas.HERO)
    return(
    <>
    <div  style={{

position: 'absolute',
top:  TILE_SIZE * heroPosition.y - 12 ,
left: TILE_SIZE * heroPosition.x,

width: TILE_SIZE, 
height: HEAD_SIZE,
backgroundImage:'url(./Assets/HERO.png)',
backgroundRepeat: "no-repeat",
backgroundPosition: `0 -${HEAD_OFFSET}px `,
animation: 'hero-animation 0.4s steps(4) infinite',
transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`
/*
            position: 'absolute',
            top:  TILE_SIZE * heroPosition.y - 12 ,
            left: TILE_SIZE * heroPosition.x,

            width: TILE_SIZE, 
            height: HEAD_SIZE,
            backgroundImage:'url(./Assets/hero.png)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${HEAD_OFFSET}px `,
            animation: 'hero-animation 0.4s steps(4) infinite' ,
            transform: `scaleX(${ (direction === EDirection.LEFT) ? -1 : 1 }) `,
            zIndex: 1,
            color: 'yellow',
            fontSize: '15px'
*/            
        }}>
         {counter}passos
        </div>
    </>
        
    )
}