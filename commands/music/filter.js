module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing!`);
        if (!args[0]) return message.channel.send(`Please specify a valid filter!`);
        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());
        if (!filterToUpdate) return message.channel.send(`This filter doesn't exist!`);
        const filtersUpdated = {};
        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;
        client.player.setFilters(message, filtersUpdated);
        if (filtersUpdated[filterToUpdate]) message.channel.send(`I'm adding the filter to the music!\nSong Filter provided by Discord-Player!`);
        else message.channel.send(`I'm disabling the filter on the music!`);
    },
};