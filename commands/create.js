const { MessageEmbed } = require('discord.js')
const { projektkID } = require('../data/channelIDs.json')

module.exports = {
    name: "create",
    description: "create a new channel for your Projekt",


    async run (bot, message, args) {
        let channelName = args.slice(0).join(' '); //Arguments to set the channel name
        message.guild.channels.create(channelName, { parent_id: projektkID }, {
        type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"

      })
        message.reply(`${message.author.username}, hat für ${args} einen Projekt Channel erstellt!`)
    }
}