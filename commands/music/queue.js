module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        const queue = client.player.getQueue(message);
        if (!client.player.getQueue(message)) return message.channel.send(`No songs currently playing!`);
        message.channel.send(`Current : ${queue.playing.title} | ${queue.playing.author}\nFirst 5 Songs in queue\n` + (queue.tracks.map((track, i) => {
            return `Number : ${i + 1} - \`${track.title}\` | \`${track.author}\` requested by : ${track.requestedBy.username}#${track.requestedBy.discriminator}:${track.requestedBy.id}`
        }).slice(0, 5).join('\n')));
    },
};