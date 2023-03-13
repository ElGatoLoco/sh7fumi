import { useCallback, useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { Move } from '../../common/types';
import { environment } from '../../environment';

type GameCreated = { type: 'game-created'; payload: { gameId: string } };
type GameJoined = { type: 'game-joined'; payload: { userId: string } };
type OpponentPlayed = { type: 'opponent-played'; payload: { move: Move } };
type Msg = GameCreated | GameJoined | OpponentPlayed;

export const useMessageServer = () => {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [opponentJoined, setOpponentJoined] = useState(false);
  const [opponentPlayed, setOpponentPlayed] = useState<Move | null>(null);

  const handleGameCreated = useCallback((payload: GameCreated['payload']) => {
    setActiveGameId(payload.gameId);
  }, []);

  const handleGameJoined = useCallback(() => {
    setOpponentJoined(true);
  }, []);

  const handleOpponentPlayed = useCallback((payload: OpponentPlayed['payload']) => {
    setOpponentPlayed(payload.move);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (opponentPlayed) {
        setOpponentPlayed(null);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [opponentPlayed]);

  const { sendJsonMessage, readyState } = useWebSocket(environment.socketUrl, {
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true,
    onMessage: ({ data: msg }) => {
      const data = JSON.parse(msg) as Msg;

      switch (data.type) {
        case 'game-created':
          return handleGameCreated(data.payload);
        case 'game-joined':
          return handleGameJoined();
        case 'opponent-played':
          return handleOpponentPlayed(data.payload);
      }
    },
  });
  const sendCreateMessage = async () => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({ type: 'create-game', payload: null });
    }
  };

  const sendJoinMessage = useCallback(
    (gameId: string) => {
      sendJsonMessage({ type: 'join-game', payload: { gameId } });
    },
    [sendJsonMessage],
  );

  const sendMove = useCallback(
    (move: string) => {
      sendJsonMessage({ type: 'play-move', payload: { move } });
    },
    [sendJsonMessage],
  );

  return {
    sendCreateMessage,
    sendJoinMessage,
    activeGameId,
    opponentJoined,
    opponentPlayed,
    sendMove,
  };
};
