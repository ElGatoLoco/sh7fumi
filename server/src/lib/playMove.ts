import { clients } from './db';
import { getOpponentId } from './getOpponentId';
import type { Move } from './types';

export const playMove = (userId: string, move: Move) => {
  const player = clients[userId];
  const opponent = clients[getOpponentId(userId)];
  if (opponent.activeMove !== null) {
    player.connection.send(
      JSON.stringify({ type: 'opponent-played', payload: { move: opponent.activeMove } }),
    );
    opponent.connection.send(JSON.stringify({ type: 'opponent-played', payload: { move } }));
    player.activeMove = null;
    opponent.activeMove = null;
  } else {
    player.activeMove = move;
  }
};
