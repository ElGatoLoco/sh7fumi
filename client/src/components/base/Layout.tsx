import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-center tracking-[.7rem] text-gray-200 text-2xl md:text-4xl xl:text-5xl portrait:my-16 landscape:my-8 md:my-10 lg:landscape:my-10 2xl:landscape:my-20">
        SH7FUMI
      </h1>
      {children}
    </div>
  );
};
