const {WebSocket} = require('ws')

protocol = 'ws://localhost:8080';
try {
    protocol = location.protocol === 'https:'
        ? 'wss://localhost:8080'
        : 'ws://localhost:8080';
} catch (e) {

}


const ws = new WebSocket(protocol);


ws.on('open', function message(data) {
    test();
    console.log('Connected to server!\n');
})

ws.on('message', function message(data) {
    // let msg = JSON.parse(data);
    console.log('received: %s', data);
})

function test() {
    console.log('login test:');
    ws.send(JSON.stringify({command: 'Login', username: '11912726', password: '123456'}));
}



