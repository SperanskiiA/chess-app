import icon from '../../assets/chessmen/black-bishop.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum ChessmenNames {
  ICON = '',
  KING = 'king',
  KNIGHT = 'knight',
  PAWN = 'pawn',
  QUEEN = 'queen',
  BISHOP = 'bishop',
  ROOK = 'rook',
}

export class Figure {
  color: Colors;
  icon: typeof icon | null;
  cell: Cell;
  name: ChessmenNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.icon = null;
    this.id = Math.random();
    this.name = ChessmenNames.ICON;
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === ChessmenNames.KING) return false;
    return true;
  }

  moveFigure(target: Cell) {}
}
