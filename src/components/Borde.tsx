import { GAME_SIZE } from "../settings/constants";
import { Hero } from "./Hero";


export function Borde() {
    return(
        <div>
        <Hero />
<img src='./assets/tileset.gif' alt='map' width={GAME_SIZE} height={GAME_SIZE} />
        </div>

    );
}