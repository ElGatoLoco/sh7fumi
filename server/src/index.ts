import { randomUUID } from 'crypto';
import http from 'http';

import { WebSocketServer } from 'ws';

import { environment } from './environment';
import { clients } from './lib/db';
import { handleDisconnect } from './lib/handleDisconnect';
import { handleMessage } from './lib/handleMessage';

const server = http.createServer();
const wsServer = new WebSocketServer({ server });

wsServer.on('connection', (connection) => {
  const userId = randomUUID();
  clients[userId] = { connection, activeGameId: null, activeMove: null };

  connection.on('message', (message) => {
    try {
      handleMessage(message, userId);
    } catch (e) {
      console.error('e: ', e);
    }
  });
  connection.on('close', () => handleDisconnect(userId));
});

server.listen(environment.apiPort, () => {
  console.log(`WebSocket server is running on port ${environment.apiPort}`);
});
