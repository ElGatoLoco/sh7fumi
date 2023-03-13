import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getWinner } from '../../common/getWinner';
import { ActiveMoves, ChoiceOption, Move, Score } from '../../common/types';
import { getRandomMove } from './getRandomMove';

type SinglePlayerContext = {
  isStarted: boolean;
  startGame: () => void;
  onPlayerMove: (player1Move: Move) => () => void;
  isChoiceActive: (choice: Move) => ChoiceOption;
  score: Score;
  disabled: boolean;
};
const SinglePlayerContext = createContext({} as SinglePlayerContext);

const initialActiveMoves: ActiveMoves = {
  player1: null,
  player2: null,
};

type Props = {
  children: ReactNode;
};
export const SinglePlayerContextProvider = ({ children }: Props) => {
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState({
    player1: 0,
    player2: 0,
  });
  const [activeMoves, setActiveMoves] = useState<ActiveMoves>(initialActiveMoves);
  const disabled = useMemo(() => Object.values(activeMoves).every(Boolean), [activeMoves]);

  const startGame = useCallback(() => {
    setIsStarted(true);
  }, []);

  const playMove = useCallback((player1Move: Move, player2Move: Move) => {
    setActiveMoves({
      player1: player1Move,
      player2: player2Move,
    });

    const winner = getWinner(player1Move, player2Move);
    if (winner !== 'draw') {
      setScore((score) => ({ ...score, [winner]: score[winner] + 1 }));
    }
  }, []);

  const onPlayerMoveSingle = useCallback(
    (player1Move: Move) => () => {
      const computerMove = getRandomMove();
      playMove(player1Move, computerMove);
    },
    [playMove],
  );

  const isChoiceActive = useCallback(
    (choice: Move) => {
      if (activeMoves.player1 === choice && activeMoves.player2 === choice) {
        return 'both';
      }
      if (activeMoves.player1 === choice) {
        return 'player1';
      }
      if (activeMoves.player2 === choice) {
        return 'player2';
      }

      return 'neither';
    },
    [activeMoves.player1, activeMoves.player2],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeMoves.player1 && activeMoves.player2) {
        setActiveMoves(initialActiveMoves);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [activeMoves]);

  return (
    <SinglePlayerContext.Provider
      value={{
        isStarted,
        startGame,
        onPlayerMove: onPlayerMoveSingle,
        isChoiceActive,
        score,
        disabled,
      }}
    >
      {children}
    </SinglePlayerContext.Provider>
  );
};

export const useSinglePlayerContext = () => {
  return useContext(SinglePlayerContext);
};
