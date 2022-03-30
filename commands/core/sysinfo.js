const Discord = require('discord.js');
const prettyMilliseconds = require("pretty-ms");
const os = require('os')
const config = require('../../config/bot');

module.exports = {
    name: "sysinfo",
    category: 'core',
    aliases: [],
    async execute(client, message, args, shard) {
        if (!message.guild) return;
        try {
            const core = os.cpus()[0];
            function formatBytes(bytes) {
                if (bytes === 0) return '0 Bytes';
                const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
          const i = Math.floor(Math.log(bytes) / Math.log(1024));
          return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
        }

        let count = 0;
        client.guilds.cache.forEach((guild) => {
            count += guild.memberCount
        })

        const res1 = await client.shard.fetchClientValues("guilds.cache.size");
        const res2 = await client.shard.fetchClientValues("channels.cache.size");
        const res3 = await client.shard.fetchClientValues("voice.connections.size");
        
            const mSys = new Discord.MessageEmbed()
            .setTitle("System Info")
            .addField('OS CPU Cores', os.cpus().length, true)
            .addField('OS CPU Speed', core.speed+'Mhz', true)
            .addField('OS CPU Model', core.model, false)
            .addField('Uptime', prettyMilliseconds(client.uptime), false)
            .addField('Memory Total', formatBytes(process.memoryUsage().heapTotal), false)
            .addField('Memory Used', formatBytes(process.memoryUsage().heapUsed), false)
            .addField('Platform', process.platform, false)
            .setColor(Math.floor(Math.random() * 16777214 + 1))
            .setDescription(`Total Servers : ${res1.reduce((p, n) => p + n, 0)} | Shard Server : ${res1}\nTotal Channels : ${res2.reduce((p, n) => p + n, 0)} | Shard Channels : ${res2}\nCurrently in ${res3.reduce((p, n) => p + n, 0)} voice channels! | Shard VC : ${res3}\nShard MemberCount : ${count}`)
            .setTimestamp()
            .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)        
            message.channel.send(mSys)

          } catch(error){
            console.error(error)
            message.channel.send(`Located an error : ${error}`)
        }
    }
}