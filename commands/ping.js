const { User } = require("discord.js");

module.exports = {
    name: 'ping',
    description: "pings the player",
    execute(message, args){
        message.channel.send('pinging...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`${ping}ms`)
        })
    }
}