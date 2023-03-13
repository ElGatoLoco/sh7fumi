import { Move, Winner } from './types';

export const getWinner = (p1Move: Move, p2Move: Move): Winner => {
  switch (true) {
    case p1Move === 'rock' && p2Move === 'scissors':
    case p1Move === 'paper' && p2Move === 'rock':
    case p1Move === 'scissors' && p2Move === 'paper':
      return 'player1';
    case p1Move === 'scissors' && p2Move === 'rock':
    case p1Move === 'rock' && p2Move === 'paper':
    case p1Move === 'paper' && p2Move === 'scissors':
      return 'player2';
    default:
      return 'draw';
  }
};
