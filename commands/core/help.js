const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "help",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        

        try {
            let Embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setAuthor(`Command List`, ``, `https://radiobot.live/commands.html`)
            //.addField(config.discord.prefix + "radio help", "\u200B", false)
            .addFields(
                { name: `${config.discord.prefix}radio helpau`, value: '[Australia Radio Stations]' },
                { name: `${config.discord.prefix}radio helpnz`, value: '[New Zealand Radio Stations]' },
                { name: `${config.discord.prefix}radio helpother`, value: '[Other Country Radio Stations]' },
                { name: `${config.discord.prefix}leave`, value: '[Makes bot leave VC]' },
                { name: `${config.discord.prefix}playurl`, value: `[${config.discord.prefix}playurl <Song URL>]` },
                { name: `${config.discord.prefix}musichelp`, value: `More info on non radio music` },
                { name: `${config.discord.prefix}dashhelp`, value: `Dash Radio Help` },
                { name: `${config.discord.prefix}dashradio`, value: `Play your fav dash radio` },
                { name: `${config.discord.prefix}radiohelp`, value: `Basic Host Info` },
                { name: `${config.discord.prefix}suggest`, value: `Sends us your suggestion` },
                { name: `${config.discord.prefix}sysinfo`, value: `Basic Host Info` },
    
            )
            //            { name: '\u200B', value: '\u200B' },
            .setTimestamp()
            .setFooter(`Bot Ping : ${client.ws.ping}ms\n${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
            //JSON.stringify(data.payload.system.bans)
            
            message.channel.send(Embed);
          } catch(error){
            console.error(error)
            message.channel.send(`Located an error : ${error}`)
        }
    }
}
