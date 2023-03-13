import { PlusIcon } from '@heroicons/react/24/solid';

import { ActionButton } from '../../components/base/ActionButton';
import { ReactComponent as ChainIcon } from '../../icons/chain.svg';
import { useMultiPlayerContext } from './MultiPlayerContext';
import { MultiPlayerGame } from './MultiPlayerGame';

export const MultiPlayerOptions = () => {
  const { startGame, gameState, createGame } = useMultiPlayerContext();

  return gameState === 'initial' ? (
    <div className="flex flex-col justify-evenly h-full md:flex-row md:items-center md:w-full">
      <ActionButton action={createGame} label="Create" Icon={PlusIcon} side="left" />
      <ActionButton action={startGame} label="Join" Icon={ChainIcon} side="right" />
    </div>
  ) : (
    <MultiPlayerGame />
  );
};
