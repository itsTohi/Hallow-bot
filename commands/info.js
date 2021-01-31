module.exports = {
    name: 'info',
    description: "displays info",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('fdfdfd')
        .setTitle('Hallow bot')
        .setURL('http://fops.cc/hallow')
        .setAuthor('Hallow', 'https://cdn.discordapp.com/attachments/788872930150580225/790642069092696164/IMG_20200620_210035.jpg', "http://fops.cc/hallow")
        .setDescription('Hallow is a general purpose discord bot')
        .setThumbnail('https://cdn.discordapp.com/attachments/788872930150580225/790642069092696164/IMG_20200620_210035.jpg')
        .setFooter('http://fops.cc/hallow')
        message.channel.send(newEmbed);
    }
}