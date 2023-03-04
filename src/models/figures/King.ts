import { ChessmenNames, Figure } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackIcon from '../../assets/chessmen/black-king.png';
import whiteIcon from '../../assets/chessmen/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = ChessmenNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
