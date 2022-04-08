import { createContext, ReactNode, useState } from "react";
import { canvas, checkValidMoviment, ECanvas, handleNextMoviment } from "./helpers";

 interface Props{
  children: ReactNode;
 
 }

 export const CanvasContext = createContext({
  canvas: [],
 updateCanvas: (direction, currentPosition, walker, type) => null
 });

 function Canvasprovider(props: Props) {
  const [canvasState, updateCanvasState] = useState({
   canvas: canvas,
   updateCanvas: (direction, currentPosition, walker, type) => {
const nextPosition = handleNextMoviment(direction, currentPosition);
const nextMove =checkValidMoviment(nextPosition, walker, type);

if(nextMove.valid) {
 updateCanvasState((prevState) => {
  const newCanvas = Object.assign([], prevState.canvas);
  const currentValue = newCanvas[currentPosition.y][currentPosition.x];

  newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
  newCanvas[nextPosition.y][nextPosition.x] = currentValue;

  return {
   canvas: newCanvas,
   updateCanvas: prevState.updateCanvas,
  }
 });
}

return {
 nextPosition,
 nextMove
}
   }
  });

  return(
   <CanvasContext.Provider value={canvasState}>
    {props.children}
   </CanvasContext.Provider>
  )
 }

 export default Canvasprovider;