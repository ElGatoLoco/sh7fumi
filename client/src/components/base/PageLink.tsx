import { ForwardRefExoticComponent, FunctionComponent, SVGProps } from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
  label: string;
  linkTo: To;
  Icon:
    | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
    | FunctionComponent<SVGProps<SVGSVGElement>>;
  side: 'left' | 'right';
};

export const PageLink = ({ label, Icon, linkTo, side }: Props) => {
  return (
    <div className={`group flex flex-col mx-4 mb-4 md:p${side === 'left' ? 'l' : 'r'}-36`}>
      <Link
        to={linkTo}
        className="border-gray-200 transition ease-in-out duration-300 group-hover:border-white group-active:border-gray-300 border-8 rounded-full"
      >
        <Icon className="h-20 w-20 fill-white md:landscape:h-20 md:landscape:w-20 lg:landscape:h-60 lg:landscape:w-60 text-gray-200 transition ease-in-out duration-300 group-hover:text-white active:fill-gray-300 group-active:text-gray-300 m-8" />
      </Link>
      <span className="text-gray-200 transition ease-in-out duration-300 group-hover:text-white group-active:text-gray-300 text-center text-2xl mt-4">
        {label}
      </span>
    </div>
  );
};
