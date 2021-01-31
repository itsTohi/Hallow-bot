module.exports = {
    name: 'ban',
    description: 'bans a user',
    execute(message, args) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            if(message.member.hasPermission('BAN_MEMBERS')) {
                member.ban().then(() => {
                    message.reply(`You banned ${user.tag}`);
                })
                .catch(e => {
                    message.reply('I ran into an error, do I have perms?');
                    console.error(e);
                });
            } else if (!message.member.hasPermission('BAN_MEMBERS')) {
                message.reply("You don't have ban perms");
            } } else {
                message.reply("that user doesn't exist");
            }
        }
    }
}