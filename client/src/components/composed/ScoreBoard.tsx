import { UserIcon } from '@heroicons/react/24/solid';

import { Score } from '../../common/types';
import { ReactComponent as RobotIcon } from '../../icons/robot.svg';

type Props = {
  isStarted: boolean;
  score: Score;
  isMultiPlayer: boolean;
};
export const ScoreBoard = ({ isStarted, score, isMultiPlayer }: Props) => {
  const Player2Icon = isMultiPlayer ? UserIcon : RobotIcon;

  return (
    <div className="flex mt-12 landscape:mt-0 md:landscape:mt-auto landscape:h-0 md:landscape:h-auto md:mt-32 2xl:landscape:mt-36">
      <div className="flex h-0 mt-12 landscape:mt-0 md:landscape:mt-auto landscape:h-0 md:landscape:h-auto lg:mt-0 md:h-24 lg:h-80 w-full">
        <UserIcon
          className={`h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-52 xl:w-52 text-gray-200 mb-12 lg:mb-32 transition duration-1000 ease-in-out ${
            isStarted
              ? '-translate-y-36 md:-translate-y-24 lg:landscape:translate-y-0 md:portrait:-translate-x-36 md:landscape:-translate-x-48 xl:landscape:-translate-x-24'
              : ''
          }`}
        />
        <div
          className={`xl:h-52 mx-2 lg:mx-12 xl:mx-36 flex justify-between items-center text-white transition duration-1000 ease-in-out ${
            isStarted
              ? '-translate-y-48 md:-translate-y-36 landscape:-translate-y-48 sm:landscape:-translate-y-24 md:landscape:-translate-y-16 lg:translate-y-0'
              : '-translate-y-[800px]'
          }`}
        >
          <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl w-24 h-8 lg:h-24 xl:w-36 xl:h-52 flex justify-center items-center text-white -translate-x-24 lg:-translate-x-56">
            {score.player1}
          </div>
          <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl w-24 h-8 lg:h-24 xl:w-36 xl:h-52 flex justify-center items-center text-white translate-x-24 lg:translate-x-56">
            {score.player2}
          </div>
        </div>
        <Player2Icon
          className={`h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-52 xl:w-52 stroke-gray-200 hover:text-white active:text-gray-300 mb-12 lg:mb-32 transition duration-1000 ease-in-out ${
            isStarted
              ? '-translate-y-36 md:-translate-y-24 lg:landscape:translate-y-0 md:portrait:translate-x-36 md:landscape:translate-x-48 xl:landscape:translate-x-24'
              : ''
          } ${isMultiPlayer ? 'fill-gray-200' : ''}`}
        />
      </div>
    </div>
  );
};
