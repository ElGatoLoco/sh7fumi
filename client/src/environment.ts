type Environment = {
  socketUrl: string;
};

export const environment: Environment = {
  socketUrl: process.env.REACT_APP_SOCKET_URL as string,
};
