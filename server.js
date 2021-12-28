const MessageParser = require('./message_parser')
const {WebSocketServer} = require('ws')

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', async function message(data) {
        console.log('received: %s', data);
        let reply = await MessageParser.parseMsgGenReply(data).catch(e=>{});
        if (!reply) {
            reply = {command: 'Retry Login'};
        }
        ws.send(JSON.stringify(reply));
    });
});

