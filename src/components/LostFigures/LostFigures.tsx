import { FC } from 'react';
import { Figure } from '../../models/figures/Figure';
import styles from './LostFigures.module.scss';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

export const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className={styles.wrap}>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}
          {figure.icon && <img src={figure.icon} alt={figure.name} />}
        </div>
      ))}
    </div>
  );
};
