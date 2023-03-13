import { Layout } from '../components/base/Layout';
import { SinglePlayerContextProvider } from '../features/single-player/SinglePlayerContext';
import { SinglePlayerGame } from '../features/single-player/SinglePlayerGame';

export const SinglePlayer = () => {
  return (
    <Layout>
      <SinglePlayerContextProvider>
        <SinglePlayerGame />
      </SinglePlayerContextProvider>
    </Layout>
  );
};
