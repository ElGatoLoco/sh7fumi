import { clients, games } from './db';

export const getOpponentId = (userId: string) => {
  const { activeGameId } = clients[userId];
  const { player1Id, player2Id } = games[activeGameId];

  return player1Id === userId ? player2Id : player1Id;
};
