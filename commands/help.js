const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefix- `r!`')
        .setAuthor('Command List', message.author.displayAvatarURL())

        .addFields({
            name: 'Über diesen bot',
            value: 'Bot für die Red Cube Crew',
        },
        {
            name: 'POLL',
            value: '`poll [CHANNEL MENTION] [PROJEKT NAME]` zum erstellen von einer neuen umfrage',
        
        },
        {
            name: 'CREATE',
            value: '`create [CHANNEL NAME]` erstellt einen eigenen textchannel nur für deine Idee',
        
        },
        {
            name: 'PING',
            value: '`ping` reaktionszeit von dem Bot testen',
        },)

        message.channel.send(help)
    }
}