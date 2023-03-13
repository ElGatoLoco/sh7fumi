import { ChoiceBoard } from '../../components/composed/ChoiceBoard';
import { ScoreBoard } from '../../components/composed/ScoreBoard';
import { useSinglePlayerContext } from './SinglePlayerContext';

export const SinglePlayerGame = () => {
  const { isStarted, startGame, score, onPlayerMove, isChoiceActive, disabled } =
    useSinglePlayerContext();

  return (
    <>
      <ScoreBoard isStarted={isStarted} score={score} isMultiPlayer={false} />
      <button
        className={`box-content border-0 mt-36 md:landscape:mt-0 landscape:mt-36 lg:landscape:mt-0 z-10 block p-[10px] [background-color:rgba(220,220,220,0.1)] hover:[background-color:rgba(220,220,220,0.2)] active:[background-color:transparent] [background-repeat:repeat-x,repeat-x,repeat-y,repeat-y] [background-size:15px_4px,15px_4px,4px_15px,4px_15px] bg-[linear-gradient(90deg,white_50%,transparent_50%),linear-gradient(90deg,white_50%,transparent_50%),linear-gradient(0deg,white_50%,transparent_50%),linear-gradient(0deg,white_50%,transparent_50%)] animated-border animate-small-border-rotate lg:animate-border-rotate w-[150px] min-h-[75px] lg:min-h-[100px] bg-top-[0 0] bg-right-[75px 150px] bg-bottom-[0 75px] bg-left-[150px 0] lg:w-[200px] lg:h-[100px] lg:bg-top-[0 0] lg:bg-right-[100px 200px] lg:bg-bottom-[0 100px] lg:bg-left-[200px 0] text-gray-200 hover:text-white active:text-gray-300 font-bold md:text-3xl transition duration-[.1s] ease-in-out ${
          isStarted ? 'translate-y-[100vh] lg:translate-y-120' : ''
        }`}
        onClick={startGame}
      >
        START
      </button>
      <ChoiceBoard
        isStarted={isStarted}
        onPlayerMove={onPlayerMove}
        isChoiceActive={isChoiceActive}
        disabled={disabled}
      />
    </>
  );
};
