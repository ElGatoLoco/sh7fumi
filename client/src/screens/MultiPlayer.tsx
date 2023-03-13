import { Layout } from '../components/base/Layout';
import { MultiPlayerContextProvider } from '../features/multi-player/MultiPlayerContext';
import { MultiPlayerOptions } from '../features/multi-player/MultiPlayerOptions';

export const MultiPlayer = () => {
  return (
    <Layout>
      <MultiPlayerContextProvider>
        <MultiPlayerOptions />
      </MultiPlayerContextProvider>
    </Layout>
  );
};
