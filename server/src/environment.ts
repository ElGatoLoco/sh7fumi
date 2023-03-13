import dotenv from 'dotenv';

dotenv.config();

type Environment = {
  apiPort: string;
};

export const environment: Environment = {
  apiPort: process.env.API_PORT || '4444',
};
