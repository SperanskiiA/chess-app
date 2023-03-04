import { FC } from 'react';
import { Cell } from '../../models/Cell';
import styles from './CellComponent.module.scss';

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  const cellColor =
    cell.color === 'black' ? styles.cell_black : styles.cell_white;
  const cellSelected = selected ? styles.cell_selected : '';
  const cellAim = cell.available && cell.figure && styles.cell_aim;
  return (
    <div
      className={[styles.cell, cellColor, cellSelected, cellAim].join(' ')}
      onClick={() => click(cell)}
    >
      {!cell.figure && cell.available && <div className={styles.available} />}
      {cell.figure?.icon && <img src={cell.figure.icon} />}
    </div>
  );
};
