import { games } from './db';
import { getRandomPin } from './getRandomPin';

export const getNewRoomId = () => {
  const randomPin = getRandomPin(4);
  if (randomPin in games) {
    getNewRoomId();
  }

  return randomPin;
};
