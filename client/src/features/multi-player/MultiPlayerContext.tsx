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
import { useMessageServer } from './useMessageServer';

type GameState = 'initial' | 'created' | 'started';

type MultiPlayerContext = {
  gameState: GameState;
  startGame: () => void;
  joinGame: (pin: string) => void;
  createGame: () => void;
  activeGameId: string | null;
  score: Score;
  onPlayerMove: (player1Move: Move) => () => void;
  isChoiceActive: (choice: Move) => ChoiceOption;
  disabled: boolean;
};
const MultiPlayerContext = createContext({} as MultiPlayerContext);

const initialActiveMoves: ActiveMoves = {
  player1: null,
  player2: null,
};

type Props = {
  children: ReactNode;
};
export const MultiPlayerContextProvider = ({ children }: Props) => {
  const {
    sendCreateMessage,
    sendJoinMessage,
    activeGameId,
    opponentJoined,
    opponentPlayed,
    sendMove,
  } = useMessageServer();

  const [gameState, setGameState] = useState<GameState>('initial');
  const [score, setScore] = useState({
    player1: 0,
    player2: 0,
  });
  const [activeMoves, setActiveMoves] = useState<ActiveMoves>(initialActiveMoves);

  const disabled = useMemo(
    () => !!activeMoves.player1 && !activeMoves.player2,
    [activeMoves.player1, activeMoves.player2],
  );

  const startGame = useCallback(() => {
    setGameState('created');
  }, []);

  const joinGame = useCallback(
    (pin: string) => {
      sendJoinMessage(pin);
    },
    [sendJoinMessage],
  );

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

  const onPlayerMove = useCallback(
    (player1Move: Move) => () => {
      setActiveMoves((activeMoves) => ({ ...activeMoves, player1: player1Move }));
      sendMove && sendMove(player1Move);
    },
    [sendMove],
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

  useEffect(() => {
    if (activeMoves.player1 && opponentPlayed) {
      playMove(activeMoves.player1, opponentPlayed);
    }
  }, [activeMoves.player1, opponentPlayed, playMove]);

  useEffect(() => {
    opponentJoined && setGameState('started');
  }, [opponentJoined]);

  useEffect(() => {
    activeGameId && setGameState('created');
  }, [activeGameId])

  return (
    <MultiPlayerContext.Provider
      value={{
        gameState,
        startGame,
        joinGame,
        createGame: sendCreateMessage,
        activeGameId,
        onPlayerMove,
        isChoiceActive,
        score,
        disabled,
      }}
    >
      {children}
    </MultiPlayerContext.Provider>
  );
};

export const useMultiPlayerContext = () => {
  return useContext(MultiPlayerContext);
};
