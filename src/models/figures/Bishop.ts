import { ChessmenNames, Figure } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackIcon from '../../assets/chessmen/black-bishop.png';
import whiteIcon from '../../assets/chessmen/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = ChessmenNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiogonal(target)) return true;
    return false;
  }
}
