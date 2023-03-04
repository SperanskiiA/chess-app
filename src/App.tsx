import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { BoardComponent } from './components/BoardComponent/BoardComponent';
import { CellComponent } from './components/CellComponent/CellComponent';
import { LostFigures } from './components/LostFigures/LostFigures';
import { Timer } from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState<Player>(
    new Player(Colors.WHITE)
  );
  const [blackPlayer, setBlackPlayer] = useState<Player>(
    new Player(Colors.BLACK)
  );

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    handleRestart();
  }, []);

  function handleRestart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }
  function swapPlayer(): void {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className={styles.app}>
      <Timer currentPlayer={currentPlayer} restart={handleRestart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Black" figures={board.lostBlackFigures} />
        <LostFigures title="White" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};

export default App;
