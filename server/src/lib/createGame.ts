import { clients, games } from './db';
import { getNewRoomId } from './getNewRoomId';

export const createGame = (userId: string) => {
  const gameId = getNewRoomId();
  games[gameId] = {
    player1Id: userId,
    player2Id: null,
  };
  clients[userId].activeGameId = gameId;
  clients[userId].connection.send(JSON.stringify({ type: 'game-created', payload: { gameId } }));
};
