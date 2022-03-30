const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "suggest",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        if(!args[0]) return message.channel.send(`No Provied Args Try ${config.discord.prefix}suggest <Your Suggestion>`);

        try {
            let usermsg = args.slice(0).join(" ");
            client.shard.broadcastEval(`
            (async () => {
                const channel = await this.channels.cache.get('903013017145462875');
                if (channel) {
                    channel.send({embed: {
                        color: Math.floor(Math.random() * 16777214+ 1),
                        title: \`Suggestion\`,
                        description: \`User Info: ${message.member.user.tag}:${message.member.id}\nServer Info: ${message.guild.name}:${message.guild.id}\nUser Suggestion : ${usermsg}\`,
                    }});
                }
            })()
            `);
            message.reply("Message Sent!");
          } catch(error){
            console.error(error)
            message.channel.send(`Located an error : ${error}`)
        }
    }
}
