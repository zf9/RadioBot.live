const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        let Embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setDescription(`Last heartbeat was: **${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}** ago at **${client.ws.ping}ms**`)
        message.channel.send(Embed)
    },
};