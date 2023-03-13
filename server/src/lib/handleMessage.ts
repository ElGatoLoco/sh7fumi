import { RawData } from 'ws';

import { createGame } from './createGame';
import { joinGame } from './joinGame';
import { playMove } from './playMove';
import { Msg } from './types';

export const handleMessage = (message: RawData, userId: string) => {
  const data = JSON.parse(message.toString()) as Msg;

  switch (data.type) {
    case 'create-game':
      return createGame(userId);
    case 'join-game':
      return joinGame(userId, data.payload.gameId);
    case 'play-move':
      return playMove(userId, data.payload.move);
  }
};
