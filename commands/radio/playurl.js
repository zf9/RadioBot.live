const Discord = require('discord.js');
const config = require('../../config/bot');
let connection = false;

module.exports = {
    name: 'playurl',
    aliases: ['purl'],
    category: 'radio',
    utilisation: '{prefix}playurl [MP3 File URL]',
    async execute(client, message, args) {
        let PlayURL = parseInt(args)
        if(!args[0]) return message.channel.send(`Please Provide A Valid Command. For More Info Do : ${config.discord.prefix}help\nTry : ${config.discord.prefix}playurl https://radiobot.live/Brixton.mp3`);
        if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You're not in the same voice channel!`);
        const permissions = message.member.voice.channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return message.channel.send(`I don't have permission to join your channel!`).catch(console.error);
        };
        if (!permissions.has('SPEAK')) {
            return message.channel.send(`I don't have permission to speak in your channel!`).catch(console.error);
        };
        
        try 
        {
            message.member.voice.channel.join().then(vc => {
                vc.voice.setSelfDeaf(true);
                vc.play(`${args}`);
            });   
            
            let Embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setDescription(`Trying to play : ${args}`)
            message.channel.send(Embed)
            console.log(`playurl ${message.guild.name} | ${args}`)
            
        }
        catch (error)
        {
            message.channel.send(`Unable to play audio file supported file types [MP3,MP4,AAC + Most common audio files]\nTry : ${config.discord.prefix}playurl https://radiobot.live/Brixton.mp3`)
        }
    }
}
