import { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

export const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(180);
  const [whiteTime, setWhiteTime] = useState(180);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(180);
    setBlackTime(180);
    restart();
  };
  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <div>
        <h2>
          {currentPlayer?.color === Colors.WHITE
            ? `${currentPlayer?.color}: ${whiteTime}`
            : `${currentPlayer?.color}: ${blackTime}`}
        </h2>
      </div>
    </div>
  );
};
