import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean; //availeabless of cell
  id: number; // for React keys

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }

  isEmpty(): boolean {
    return this.figure === null;
  }

  isEmptyY(target: Cell): boolean {
    if (this.x !== target.x) return false;
    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyX(target: Cell): boolean {
    if (this.y !== target.y) return false;
    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);
    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyDiogonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absX !== absY) return false;

    const directionX = this.x < target.x ? 1 : -1;
    const directionY = this.y < target.y ? 1 : -1;

    for (let i = 1; i < absX; i++) {
      if (
        !this.board
          .getCell(this.x + directionX * i, this.y + directionY * i)
          .isEmpty()
      ) {
        return false;
      }
    }
    return true;
  }

  isEnemy(target: Cell) {
    if (target.figure) {
      return target.figure.color !== this.figure?.color ? true : false;
    }
    return false;
  }

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }
  eatFigure(figure: Figure) {
    figure.color === Colors.BLACK
      ? this.board.lostBlackFigures.push(figure)
      : this.board.lostWhiteFigures.push(figure);
  }

  moveFigure(target: Cell) {
    if (this.figure?.canMove(target)) {
      this.figure?.moveFigure(target);
      if (target.figure) {
        this.eatFigure(target.figure);
      }
      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}
