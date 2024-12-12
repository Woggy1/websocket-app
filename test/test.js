// test/test.js
const { expect } = require('chai');
const WebSocket = require('ws');

describe('WebSocket Server', function () {
  let server;
  let client;

  before(function (done) {
    server = require('../server.js');
    client = new WebSocket('ws://localhost:8080');

    client.on('open', done);
  });

  it('should echo messages sent to the server', function (done) {
    client.on('message', function (message) {
      expect(message).to.equal('Echo: Hello, WebSocket!');
      done();
    });

    client.send('Hello, WebSocket!');
  });

  after(function () {
    client.close();
    server.close();
  });
});
