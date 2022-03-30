const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "dashhelp",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        
        try {
            const PopList = ('`popx`\n`hitsx`\n`dashx`\n`fusionpop`\n`popfamily`\n`discoverpop`\n`lovesongs`\n`soundcloud`\n`freefire`\n');
            const HipHopList = ('`hiphopx`\n`thecity`\n`doggystyle`\n`southside`\n`1580`\n`nativerhymes`\n`independentgrind`\n`beatjunkie`\n`deliciousvinyl`\n`taste`\n');


            const helpembed = new Discord.MessageEmbed();
            helpembed.setColor("RANDOM")
            helpembed.setAuthor(`Command List`, ``, `https://radiobot.live/commands.html`)
            helpembed.addFields(
                { name: 'Pop', value: PopList, inline: true },
                { name: 'Hip Hop', value: HipHopList, inline: true },

            )
            helpembed.setTimestamp()
            helpembed.setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
            message.channel.send(helpembed).catch(console.error);


          } catch(error){
            console.error(error)
            message.channel.send(`Located an error : ${error}`)
        }
    }
}
