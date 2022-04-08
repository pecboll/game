export const TILE_SIZE = window.innerHeight / 22 ;
export const GAME_SIZE = TILE_SIZE * 20;
export const DEMON_TILE_SIZE = TILE_SIZE;
export const HEAD_OFFSET = TILE_SIZE;
export const HEAD_SIZE = TILE_SIZE;
export enum EDirection {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  D = "D"
}

export enum EWalker {
 HERO = 'hero',
 ENEMY = 'enemy',
}