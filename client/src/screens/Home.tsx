import { UserIcon, UsersIcon } from '@heroicons/react/24/solid';

import { Layout } from '../components/base/Layout';
import { PageLink } from '../components/base/PageLink';
import { ROUTES } from '../router';

export const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-evenly h-full md:flex-row md:items-center md:w-full">
        <PageLink linkTo={ROUTES.singlePlayer} label="Single Player" Icon={UserIcon} side="left" />
        <PageLink linkTo={ROUTES.multiPlayer} label="Multi Player" Icon={UsersIcon} side="right" />
      </div>
    </Layout>
  );
};
