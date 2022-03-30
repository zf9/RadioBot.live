const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "radiohelp",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        

        try {
            const NZList = ('`thebreeze`\n`maifm`\n`theedge`\n`coastfm`\n`lifefm`\n`zfm1`\n`zfm2`\n`thehits`\n`magicmusic`\n`morefm`\n`therock`\n`thesound`\n`dovefm`\n');
            const AUList = ('`kiis1011`\n`triplej`\n`wsfm`\n`safm`\n`easymix`\n`mix102`\n`nova919`\n`hitb105`\n');
            const OtherList = ('`hits94`\n`heartuk`\n`forth1`\n`bbc1`\n`bbc2`\n`ghrs`\n`maximafm`\n`erafm`\n`hitz.fm`\n`uaekadak`\n`deejayit`\n`rtlit`\n`virginradio`\n`rmfon`\n`eska`\n`planetafm`\n`nporadio2`\n`thefan`\n');


            const helpembed = new Discord.MessageEmbed();
            helpembed.setColor("RANDOM")
            helpembed.setAuthor(`Command List`, ``, `https://radiobot.live/commands.html`)
            helpembed.addFields(
                { name: 'NZ Radio List', value: NZList, inline: true },
                { name: 'AU Radio List', value: AUList, inline: true },
                { name: 'Other Radio List', value: OtherList, inline: true },

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
