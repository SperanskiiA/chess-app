import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { ChessmenNames, Figure } from './Figure';
import blackIcon from '../../assets/chessmen/black-pawn.png';
import whiteIcon from '../../assets/chessmen/white-pawn.png';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = ChessmenNames.PAWN;
  }
}
