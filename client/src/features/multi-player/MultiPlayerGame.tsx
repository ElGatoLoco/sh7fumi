import { useMemo } from 'react';

import { PinDisplay } from '../../components/base/PinDisplay';
import { ChoiceBoard } from '../../components/composed/ChoiceBoard';
import { JoinInput } from './JoinInput';
import { ScoreBoard } from '../../components/composed/ScoreBoard';
import { useMultiPlayerContext } from './MultiPlayerContext';

export const MultiPlayerGame = () => {
  const { gameState, activeGameId, joinGame, score, onPlayerMove, isChoiceActive, disabled } =
    useMultiPlayerContext();
  const isStarted = useMemo(() => gameState === 'started', [gameState]);

  return (
    <>
      <ScoreBoard isStarted={isStarted} score={score} isMultiPlayer={true} />
      {activeGameId ? (
        <PinDisplay isStarted={isStarted} activeGameId={activeGameId} />
      ) : (
        <JoinInput isStarted={isStarted} onComplete={joinGame} />
      )}
      <ChoiceBoard
        isStarted={isStarted}
        onPlayerMove={onPlayerMove}
        isChoiceActive={isChoiceActive}
        disabled={disabled}
      />
    </>
  );
};
