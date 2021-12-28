const db = require('./database')

async function parseMsgGenReply(message) {
    let msg = JSON.parse(message);
    switch (msg.command.toLowerCase()) {
        case 'login':
            let player = await db.GetPlayerByUsername(msg.username)
            if (player.password === msg.password) {
                return {command: 'Update Player', player: player}
            } else {
                return {command: 'Retry'}
            }

        case 'register':

            return {command: 'Success'}


        case 'wild engagement':


    }
}

module.exports = {
    parseMsgGenReply
}