import '../styles/componets.css'
import useEventListener from '@use-it/event-listener'
import { HEAD_SIZE, TILE_SIZE, HEAD_OFFSET } from '../settings/constants'
import { useState } from 'react'

export function Hero() {

    const [heroPosition, setHeroPosition] = useState({x: 15, y: 14});
    const [direction, setDirection] = useState('RIGHT');

    useEventListener('keydown', (event:{key: string}) => {
        if (event.key === 'ArrowLeft' ){
        setHeroPosition({
            x: heroPosition.x - 1,
            y: heroPosition.y
        });  setDirection('LEFT'); 
    }

        if (event.key === 'ArrowRight' ){
            setHeroPosition({
                x: heroPosition.x + 1,
                y: heroPosition.y
            }); setDirection('RIGHT');  
        }

        if (event.key === 'ArrowDown' ){
            setHeroPosition({
                x: heroPosition.x ,
                y: heroPosition.y- 1
            })  
        }

        if (event.key === 'ArrowUp' ){
            setHeroPosition({
                x: heroPosition.x ,
                y: heroPosition.y + 1
            })  
        }
});

    return(
    
        <div  style={{
            position: 'absolute',
            bottom:  TILE_SIZE * heroPosition.y,
            left: TILE_SIZE * heroPosition.x,

            width: TILE_SIZE, 
            height: HEAD_SIZE,
            backgroundImage:'url(./assets/hero.png)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${HEAD_OFFSET}px `,
            transition:' 0.2s',
            animation: 'hero-animation 0.4s steps(4) infinite',
            transform: `scaleX(${direction === 'RIGHT' ? 1 : -1 })`
        }}/>
    )
}