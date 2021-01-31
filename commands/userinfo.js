const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: 'shows userinfo',
    execute(message, args, Discord) {
        if (args.length === 0) {
            const accountCreatedDate = message.author.createdAt;
            const username = message.author.username;
            const tag = message.author.tag;
            const serverJoinDate = message.guild.members.cache.get(message.author.id).joinedAt;
            message.delete(message);
            message.channel.send(new MessageEmbed().setColor('FFE421').setTitle(`**${username}'s Userinfo:**`)
            .setDescription(`**Account created on:** ${accountCreatedDate}\n**Discrim information:** ${tag}\n**Joined server:** ${serverJoinDate}\n \n(Requested by: <@${message.author.id}>)`).setTimestamp()
            );
        } else if (args.length === 1) {
            const member = message.mentions.members.first();
            if (member != null) {
                const accountCreatedDate = member.user.createdAt;
                const username = member.user.username;
                const tag = member.user.tag;
                const serverJoinDate = message.guild.members.cache.get(member.id).joinedAt;
                message.delete(message);
                message.channel.send(new MessageEmbed().setColor('FFE421').setTitle(`**${username}'s Userinfo:**`)
                .setDescription(`**Account created on:** ${accountCreatedDate}\n**Discrim information:** ${tag}\n**Joined server:** ${serverJoinDate}\n \n(Requested by: <@${message.author.id}>)`).setTimestamp()
                );
                console.log = `[${message.guild.name}], ${message.author.username} has run the .userinfo command.`
            } else {
                return message.reply("I didn't understand; try .userinfo @user")
            }
        }
    }
}