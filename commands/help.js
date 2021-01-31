module.exports = {
    name: 'help',
    description: "gives commands",
    execute(message, args, Discord){
        const embedMessage = new Discord.MessageEmbed()
        .setColor('#f5f660')
        .addFields(

            {name: 'info', value: 'Gives info about the bot'},
            {name: 'meme', value: 'Sends a meme from reddit'},
            {name: 'nsfw', value: 'Sends nsfw(has to be in nsfw channel)'},
            {name: 'ping', value: 'Pings the user'},
            {name: 'purge', value: 'Deletes messages(under 100)'},
            {name: 'avatar', value: 'Sends the avatar of the mentioned user'},
            {name: 'userinfo', value: 'Sends user information of the mentioned user'},
            {name: 'serverinfo', value: 'Sends information about the server'}

        )
        .setFooter('http://fops.cc/hallow')
        message.channel.send(embedMessage);
    }
}