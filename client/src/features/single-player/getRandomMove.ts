import { Move } from '../../common/types';

export const getRandomMove = (): Move =>
  (['rock', 'paper', 'scissors'] as Move[])[Math.floor(Math.random() * 3)];
