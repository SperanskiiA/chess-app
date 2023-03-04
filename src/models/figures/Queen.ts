import { ChessmenNames, Figure } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackIcon from '../../assets/chessmen/black-queen.png';
import whiteIcon from '../../assets/chessmen/white-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = ChessmenNames.QUEEN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyY(target)) return true;
    if (this.cell.isEmptyX(target)) return true;
    if (this.cell.isEmptyDiogonal(target)) return true;
    return false;
  }
}
