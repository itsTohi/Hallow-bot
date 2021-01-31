const { User } = require("discord.js");

module.exports = {
    name: 'clear',
    description: 'clears messages',
    async execute(message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.reply("You don't have perms");
        }else{
            message.delete(message);
            if(!args[0]) return message.reply("Enter the amount of messages that you want to clear");
            if(isNaN(args[0])) return message.reply("Please enter a real number");
    
            if(args[0] > 100) return message.reply("I can't delete more than 100 messages");
            if(args[0] < 1) return message.reply("You must clear atleast 1 message");
    
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            })
        }
    }
}