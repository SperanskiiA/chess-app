import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { BoardComponent } from './components/BoardComponent/BoardComponent';
import { CellComponent } from './components/CellComponent/CellComponent';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    handleRestart();
  }, []);

  function handleRestart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className={styles.app}>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
