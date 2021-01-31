module.exports = {
    name: 'serverinfo',
    description: 'gives server information',
    execute(message, Discord) {
            const creation = message.guild.createdAt;
            const owner = message.guild.owner;
            const icon = message.guild.memberCount;
            const boosters = message.guild.premiumSubscriptionCount;
            const region = message.guild.region;
            message.channel.send(new Discord.MessageEmbed().setTitle("**Serverinfo:**")
            .setDescription(`**Created:** ${creation}\n**Owner:** ${owner}\n**Members:** ${icon}\n**Nitro boosters:** ${boosters}\n**Region:** ${region}\n`)
            .setTimestamp());
    }
}