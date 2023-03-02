import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { ChessmenNames, Figure } from './Figure';
import blackIcon from '../../assets/chessmen/black-knight.png';
import whiteIcon from '../../assets/chessmen/white-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = ChessmenNames.KNIGHT;
  }
}
