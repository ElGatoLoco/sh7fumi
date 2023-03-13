export type Move = 'rock' | 'paper' | 'scissors';
export type Winner = 'player1' | 'player2' | 'draw';

export type Score = {
  player1: number;
  player2: number;
};
export type ActiveMoves = {
  player1: Move | null;
  player2: Move | null;
};
export type ChoiceOption = 'both' | 'player1' | 'player2' | 'neither';
