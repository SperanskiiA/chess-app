import { ChessmenNames, Figure } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackIcon from '../../assets/chessmen/black-rook.png';
import whiteIcon from '../../assets/chessmen/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = ChessmenNames.ROOK;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyX(target)) return true;
    if (this.cell.isEmptyY(target)) return true;
    return false;
  }
}
