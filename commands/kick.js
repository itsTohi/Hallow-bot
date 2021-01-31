module.exports = {
    name: 'kick',
    description: 'kicks a user',
    execute(message, args) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            if(message.member.hasPermission('KICK_MEMBERS')) {
                member.kick().then(() => {
                    message.reply(`You kicked ${user.tag}`);
                })
                .catch(e => {
                    message.reply('I ran into an error, do I have perms?');
                    console.error(e);
                });
            } else if (!message.member.hasPermission('KICK_MEMBERS')) {
                message.reply("You don't have kick perms");
            } } else {
                message.reply("That user doesn't exist");
            }
        }
    }
}