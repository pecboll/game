import '../styles/componets.css'
import { EDirection, HEAD_OFFSET, HEAD_SIZE, TILE_SIZE } from '../settings/constants'
import useDemonMoviment from '../hooks/enemyMoviment'
import { useState } from 'react'
import { ECanvas } from '../contexts/helpers'

interface props {initialPosition:{x:number, y:number}}

export function MineDemon(props:props) {
  const {enemyPosition, direction} = useDemonMoviment(props.initialPosition, ECanvas.MINI_DEMON)
    return(
    
        <div  style={{
            position: 'absolute',
            top:  TILE_SIZE * enemyPosition.y - 12,
            left: TILE_SIZE * enemyPosition.x,

            width: TILE_SIZE, 
            height: HEAD_SIZE,
            backgroundImage:'url(./Assets/MINI-DEMON.png)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${HEAD_OFFSET}px `,
            animation: 'mineDemon-animation 0.7s steps(4) infinite',
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1 })`
        }}/>
    )
}