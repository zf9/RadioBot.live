const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "musichelp",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        try {
    
            let Embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setAuthor(`Command List`, ``, `https://radiobot.live/commands.html`)
            .addFields(
                { name: `${config.discord.prefix}play`, value: `[Do ${config.discord.prefix}play song name or URL!]` },
                { name: `${config.discord.prefix}clear-queue`, value: '[Clears all songs waiting to play!]' },
                { name: `${config.discord.prefix}filter`, value: `[Do ${config.discord.prefix}filters for full list!]` },
                { name: `${config.discord.prefix}loop`, value: '[Loop current queue!]' },
                { name: `${config.discord.prefix}nowplaying`, value: '[Info about current song!]' },
                { name: `${config.discord.prefix}pause`, value: `[Pause current song!]` },
                { name: `${config.discord.prefix}resume`, value: `[Resume current song!]` },
                { name: `${config.discord.prefix}skip`, value: `[Skip current song!]` },
                { name: `${config.discord.prefix}queue`, value: `[First 5 songs in queue!]` },
                { name: `${config.discord.prefix}songinfo`, value: `[More info on the song playing!]` },
                { name: `${config.discord.prefix}stop`, value: `[Makes the bot leave VC]` },
                { name: `${config.discord.prefix}volume`, value: `[1-500]` },
                { name: `${config.discord.prefix}filters`, value: `[Shows all filters]` },
    
            )
            .setTimestamp()
            .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)                    
            message.channel.send(Embed);

          } catch(error){
            console.error(error)
            message.channel.send(`Located an error : ${error}`)
        }
    }
}
