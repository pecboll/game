import { createContext, ReactNode, useState } from "react";

interface Props{
 children: ReactNode,
}
export const ChestsContext = createContext({
 totalChest: 2,
 openedChets: {
   total: 0,
   position: []
 },
 updateOpenedChests: (position) => null
});

function ChestProvider(props: Props) {
 const [chestState, updateChestState] = useState({
  totalChest: 2,
  openedChets: {
    total: 0,
    position: []
  },
  updateOpenedChests: (position) => {
   updateChestState((prevState) => {
    return {
     totalChest: prevState.totalChest,
     openedChets: {
      total: prevState.openedChets.total +1,
      position: prevState.openedChets.position.concat(position),
     },
     updateOpenedChests: prevState.updateOpenedChests,
    }
   })
 }
});
 return (
  <ChestsContext.Provider value={chestState}>
   {props.children}
  </ChestsContext.Provider>
 )
  }
export default ChestProvider;