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
}
