module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

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
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};