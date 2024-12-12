const WebSocket = require('ws');

// Створення WebSocket сервера
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log('Received: %s', message);
    ws.send(`Echo: ${message}`);
  });
});

console.log('WebSocket server running on ws://localhost:8080');

// Експортуємо сервер для доступу до нього в тестах
module.exports = wss;
