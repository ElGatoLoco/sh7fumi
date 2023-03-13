import { clients, games } from './db';

export const handleDisconnect = (userId: string) => {
  const userGameId = clients[userId].activeGameId;
  delete clients[userId];

  const userGame = games[userGameId];

  if (!(userGame?.player1Id in clients) && !(userGame?.player2Id in clients)) {
    delete games[userGameId];
  }
};
