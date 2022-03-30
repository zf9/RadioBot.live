const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "invite",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (!message.guild) return;
        try {
            let Embed = new Discord.MessageEmbed()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setDescription(`Base Invite : [Click Here](https://discord.com/oauth2/authorize?client_id=903015652762214401&scope=bot&permissions=37080128)\nAdmin Invite : [Click Here](https://discord.com/oauth2/authorize?client_id=903015652762214401&scope=bot&permissions=8)\nSupport Server : [Click Here](https://discord.gg/dDFgQHam8Y)`)
            message.channel.send(Embed)
          } catch(error){
            console.error(error)
            message.channel.send(`Located an error : ${error}`)
        }
    }
}
