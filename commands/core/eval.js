const Discord = require('discord.js');
const config = require('../../config/bot');

module.exports = {
    name: "eval",
    aliases: [],
    async execute(client, message, args) {
        if (message.author.id !== "854981192557133825") return;
        try {
            evaled = await eval(args.join(' '));
        }
        catch (error) 
        {
            console.log(error)
        }
    }
}
