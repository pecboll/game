import { GAME_SIZE } from "../settings/constants";
import { Chest } from "./Chest";
import { Demon } from "./Demon";
import { Hero } from "./Hero";
import { MineDemon } from "./MineDemon";
import { Trap } from "./Trap";


export function Borde() {
    return(
        <div>
        <Hero />
        <MineDemon />
        <Demon />
        <Chest />
        <Trap />
<img src='./assets/tileset.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} />
        </div>

    );
}