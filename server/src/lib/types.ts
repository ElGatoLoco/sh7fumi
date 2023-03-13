import type { WebSocket } from 'ws';

export type Move = 'rock' | 'paper' | 'scissors';

export type Client = {
  connection: WebSocket;
  activeGameId: null | string;
  activeMove: Move | null;
};
export type Clients = { [key: string]: Client };

type Game = {
  player1Id: string;
  player2Id: string | null;
};
export type Games = { [key: string]: Game };

type CreateGame = {
  type: 'create-game';
  payload: null;
};
type JoinGame = {
  type: 'join-game';
  payload: { gameId: string };
};
type PlayMove = {
  type: 'play-move';
  payload: { move: Move };
};
export type Msg = CreateGame | JoinGame | PlayMove;