const Discord = require('discord.js');

module.exports = {
    name: "leave",
    aliases: [],
    async execute(client, message, args) {
        try {
            if (message.member.voice.channel) {
                message.guild.me.voice.channel.leave();
                message.channel.send("Bye Bye")
                console.log(`Stopped playing music in ${message.guild.name}`)
              } else {
                message.reply("You're not in a voice channel!");
              }
        }
        catch (error) 
        {
              message.channel.send('Error: ' + error) 
        }
    }
}