// test/test.js
const { expect } = require('chai');
const WebSocket = require('ws');

// Експортуємо сервер для доступу до нього в тестах
const server = require('../server.js');

describe('WebSocket Server', function () {
  let client;

  before(function (done) {
    client = new WebSocket('ws://localhost:8080');
    client.on('open', done);
  });

  it('should echo messages sent to the server', function (done) {
    client.on('message', function (message) {
      expect(message.toString()).to.equal('Echo: Hello, WebSocket!');
      done();
    });

    client.send('Hello, WebSocket!');
  });

  after(function () {
    client.close();
    server.close(); // Закриваємо сервер
  });
});
