module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing!`);
        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`Please enter a valid number !`);
        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 500) return message.channel.send(`Please enter number between 1-500!`);
        const success = client.player.setVolume(message, parseInt(args[0]));
        if (success) message.channel.send(`Volume set to ${parseInt(args[0])}%`);
    },
};