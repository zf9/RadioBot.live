module.exports = {
    name: 'filters',
    aliases: ['hfilters'],
    category: 'Music',
    utilisation: '{prefix}filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing!`);
        const filtersStatuses = [[], []];
        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName]));
        });
        message.channel.send({
            embed: {
                color: Math.floor(Math.random() * 16777214) + 1,
                footer: { text: `Song Filter provided by Discord-Player!\n${message.author.username}#${message.author.discriminator}` },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Use ${client.config.discord.prefix}filter to add a filter to a song!`,
            },
        });
    },
};