module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing!\nTo stop radio do &leave`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);
        if (success) message.channel.send(`Music stopped!`);
    },
};