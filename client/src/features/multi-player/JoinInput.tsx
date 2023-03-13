import PinInput from 'react-pin-input';

import useWindowSize from '../../common/useWindowSize';

const getWidthAndHeight = (windowWidth: number) => {
  if (windowWidth > 1024) {
    return 100;
  }

  return windowWidth / 7;
};

const getInputFontSize = (windowWidth: number) => {
  if (windowWidth > 1024) {
    return 2.5;
  }

  return windowWidth / 200;
};

type Props = { isStarted: boolean; onComplete: (val: string) => void };
export const JoinInput = ({ isStarted, onComplete }: Props) => {
  const { width } = useWindowSize();
  const inputWidth = getWidthAndHeight(width);
  const inputFontSize = getInputFontSize(width);

  return (
    <div
      className={`portrait:mt-36 lg:portrait:mt-36 lg:landscape:mt-0 xl:portrait:mt-0 transition-transform ease-out duration-500 ${
        isStarted ? 'translate-y-[500px]' : ''
      }`}
    >
      <h2 className="font-bold text-white text-2xl text-center mb-6">Enter PIN</h2>
      <PinInput
        length={4}
        initialValue=""
        focus={true}
        type="numeric"
        inputMode="number"
        inputStyle={{
          borderColor: 'grey',
          color: 'white',
          fontSize: `${inputFontSize}rem`,
          width: `${inputWidth}px`,
          height: `${inputWidth}px`,
        }}
        inputFocusStyle={{ borderColor: 'white' }}
        onComplete={onComplete}
        autoSelect={true}
      />
    </div>
  );
};
