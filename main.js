const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("hallow is online");
    client.user.setPresence({
        status: 'online',
        activity: {
         type: 'PLAYING',
         name: '.help',
        },
       });
});

client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
    channel.send(`Thanks for inviting me to the server, try .help`);
});

client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.content.includes(".userinfo") || message.content.includes(".avatar")) return false;

    if (message.mentions.has(client.user.id)) {
        message.reply("Hi! type .help for a list of commands")
    };
});

client.on('message', (message) =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
        } else if (command == 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
        } else if (command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
        } else if (command == 'clear' || command == 'purge' || command == 'p'){
        client.commands.get('clear').execute(message, args, Discord);
        } else if (command == 'avatar' || command == 'av'){
        client.commands.get('avatar').execute(message, args, Discord);
        } else if (command == 'userinfo' || command == 'user' || command == 'ui' || command == 'u'){
        client.commands.get('userinfo').execute(message, args, Discord);
        } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
        } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
        } else if (command == 'serverinfo'){
        client.commands.get('serverinfo').execute(message, Discord);
        }
});

client.login('');