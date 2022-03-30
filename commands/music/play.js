module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        if (!args[0]) return message.channel.send(`Please provide a song name or song URL!`);
        const permissions = message.member.voice.channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return message.channel.send(`I don't have permission to join your channel!`).catch(console.error);
        };
        if (!permissions.has('SPEAK')) {
            return message.channel.send(`I don't have permission to speak in your channel!`).catch(console.error);
        };

        try {
            client.player.play(message, args.join(" "), { firstResult: true });
        } catch(e){
            console.error(e)
            return message.channel.send(`Error trying to play music!`).catch(console.error);
        }
    },
};