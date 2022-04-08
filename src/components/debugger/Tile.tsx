import { ECanvas } from "../../contexts/helpers";
import { TILE_SIZE } from "../../settings/constants";


interface Props {
 position:{x:number, y:number},
 text:number

}

export function Tile(props:Props) {
 function getTileColor(){
  const e = ECanvas
  switch(props.text) { 
   case e.FLOOR: return 'darkgrey'

   case e.WALL: return 'yellow' 

   case e.HERO: return 'magenta' 

   case e.DOOR: return 'white' 

   case e.TRAP: return 'chartreuse' 

   case e.CHEST: return 'cyan'

   case e.DEMON:
    case e.MINI_DEMON: return 'red' 


  
  }

 }

const x = props.position.x
const y = props.position.y

 return(
  <div  style={{
   position: 'absolute',
   left: TILE_SIZE * x ,
   top: TILE_SIZE * y ,
   
   textAlign: 'center',
   width: TILE_SIZE,
    height: TILE_SIZE,
     border: `solid 2px ${getTileColor()}`,
     color: getTileColor(),
     fontSize: TILE_SIZE * 0.8,
     zIndex: 2
    }}
  >
{props.text}
  </div>
 )
}