const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { pollID } = require('../data/channelIDs.json')
const bot = new Discord.Client();


module.exports = {
    name: "pollt",
    description: "poll command",


       
    async run (bot, message, args) {
        channelID = pollID
        let theDescription = args.slice(1).join(" ")

        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle(message.author.username + "'s Idee")
        .setDescription(theDescription)
//        .setFooter("Idee von: "+ message.author.username +'#'+ message.author.discriminator) //optional

        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}
