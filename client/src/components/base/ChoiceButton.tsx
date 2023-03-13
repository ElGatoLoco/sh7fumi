import { MouseEvent, ReactNode } from 'react';

type Active = 'both' | 'neither' | 'player1' | 'player2';
const getBackgroundColor = (active: Active) => {
  switch (active) {
    case 'both':
      return 'bg-gradient-to-br from-sky-700 to-rose-700';
    case 'player1':
      return 'bg-sky-700';
    case 'player2':
      return 'bg-rose-700';
    default:
      return '';
  }
};

type Props = {
  label: string;
  isStarted: boolean;
  loadTime: number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  active: Active;
  disabled: boolean;
  Icon: ReactNode;
};
export const ChoiceButton = ({
  label,
  isStarted,
  loadTime,
  onClick,
  active,
  disabled,
  Icon,
}: Props) => {
  getBackgroundColor(active);
  return (
    <button
      className={`flex flex-col items-center border-4 border-dashed my-2 lg:my-0 mx-8 lg:mx-2 p-4 rounded-3xl fill-white transition-transform duration-${loadTime} ease-in ${
        !isStarted
          ? 'translate-y-[100vh] landscape:translate-y-[100vh] md:landscape:translate-y-[400px]'
          : '-translate-y-8 md:landscape:-translate-y-36 lg:landscape:-translate-y-40'
      } ${
        !disabled ? 'hover:[&:not(:active,:focus)]:bg-gray-700  active:bg-gray-800' : ''
      } ${getBackgroundColor(active)}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="mx-8">{Icon}</span>
      <span className="text-gray-200 text-center text-lg 2xl:text-3xl 2xl:font-bold 2xl: mt-4">
        {label}
      </span>
    </button>
  );
};
