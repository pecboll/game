export const TILE_SIZE = 48;
export const GAME_SIZE = 20 * TILE_SIZE;
export const DEMON_TILE_SIZE = TILE_SIZE * 2;
export const HEAD_OFFSET = TILE_SIZE/1.3;
export const HEAD_SIZE = TILE_SIZE*1.3;
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