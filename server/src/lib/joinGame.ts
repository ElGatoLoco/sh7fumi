import { clients, games } from './db';
import { getOpponentId } from './getOpponentId';

export const joinGame = (userId: string, gameId: string) => {
  games[gameId].player2Id = userId;
  clients[userId].activeGameId = gameId;
  const opponentId = getOpponentId(userId);
  clients[userId].connection.send(JSON.stringify({ type: 'game-joined', payload: { userId } }));
  clients[opponentId].connection.send(JSON.stringify({ type: 'game-joined', payload: { userId } }));
};
