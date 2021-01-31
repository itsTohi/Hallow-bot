const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'sends a users avatar',
    execute(message, args, Discord) {
        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}'s avatar`)
                .setColor('fdfdfd')
                .setImage(message.author.displayAvatarURL({ format: 'png', size: 512 }));
            return message.channel.send(embed);
        }

        const mention = message.mentions.members.first();
        const Embed = new Discord.MessageEmbed()
            .setTitle(`${message.mentions.users.first().username}'s avatar`)
            .setColor('fdfdfd')
            .setImage(mention.user.displayAvatarURL({ format: 'png', size: 512 }));
        return message.channel.send(Embed);

    },
};