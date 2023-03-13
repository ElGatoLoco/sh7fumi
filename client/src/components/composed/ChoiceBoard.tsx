import { ScissorsIcon } from '@heroicons/react/24/solid';

import { ChoiceOption, Move } from '../../common/types';
import { ChoiceButton } from '../base/ChoiceButton';
import { ReactComponent as DiamondIcon } from '../../icons/diamond.svg';
import { ReactComponent as PaperIcon } from '../../icons/paper.svg';

type Props = {
  isStarted: boolean;
  onPlayerMove: (player1Move: Move) => () => void;
  isChoiceActive: (choice: Move) => ChoiceOption;
  disabled: boolean;
};
export const ChoiceBoard = ({ isStarted, onPlayerMove, isChoiceActive, disabled }: Props) => {
  return (
    <div className="flex h-24 landscape:h-auto lg:h-auto flex-col landscape:flex-row lg:flex-row w-full justify-center">
      <ChoiceButton
        label="Rock"
        isStarted={isStarted}
        loadTime={500}
        onClick={onPlayerMove('rock')}
        active={isChoiceActive('rock')}
        disabled={disabled}
        Icon={<DiamondIcon className="h-20 w-20 2xl:h-60 2xl:w-60" />}
      />
      <ChoiceButton
        label="Paper"
        isStarted={isStarted}
        loadTime={700}
        onClick={onPlayerMove('paper')}
        active={isChoiceActive('paper')}
        disabled={disabled}
        Icon={<PaperIcon className="h-20 w-20 2xl:h-60 2xl:w-60" />}
      />
      <ChoiceButton
        label="Scissors"
        isStarted={isStarted}
        loadTime={1000}
        onClick={onPlayerMove('scissors')}
        active={isChoiceActive('scissors')}
        disabled={disabled}
        Icon={<ScissorsIcon className="h-20 w-20 2xl:h-60 2xl:w-60 fill-white -rotate-90" />}
      />
    </div>
  );
};
