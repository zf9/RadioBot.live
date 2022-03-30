module.exports = {
    name: 'songinfo',
    aliases: ['si'],
    category: 'Music',
    utilisation: '{prefix}songinfo',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing!`);
        const track = client.player.nowPlaying(message);
        const filters = [];
        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: Math.floor(Math.random() * 16777214) + 1,
                author: { name: track.title },
                footer: { text: `${message.author.username}#${message.author.discriminator}` },
                fields: [
                    { name: 'Channel', value: track.author, inline: false },
                    { name: 'Duration', value: track.duration, inline: false },
                    { name: 'Filters activated', value: filters.length + '/' + client.filters.length, inline: false },
                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: false },
                    { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: false },
                    { name: 'Currently paused', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: false },
                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: false }
                ],
                timestamp: new Date(),
            },
        });
    },
};