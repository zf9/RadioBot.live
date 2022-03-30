const Discord = require('discord.js');
const config = require('../../config/bot');
const fs = require('fs');

module.exports = {
    name: "log",
    category: 'core',
    aliases: [],
    async execute(client, message, args) {
        if (message.author.id !== "854981192557133825") return;
        if(!args[0]) return message.channel.send(`You provided no args! Active args for this command \`debug, warn, error, unhandled\``);

        if (args[0] == "debug")
        {
            try {
                const {size} = fs.statSync('./debug.txt');
                if (size > 800000)
                {
                    message.channel.send("Log File Over 8mb")
                }
                else 
                {
                    message.channel.send("Latest debug Log.", { files: ["./debug.txt"] });
                }
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
        }

        if (args[0] == "warn")
        {
            try {
                const {size} = fs.statSync('./warn.txt');
                if (size > 800000)
                {
                    message.channel.send("Log File Over 8mb")
                }
                else 
                {
                    message.channel.send("Latest warn Log.", { files: ["./warn.txt"] });
                }
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
        }

        if (args[0] == "error")
        {
            try {
                const {size} = fs.statSync('./error.txt');
                if (size > 800000)
                {
                    message.channel.send("Log File Over 8mb")
                }
                else 
                {
                    message.channel.send("Latest error Log.", { files: ["./error.txt"] });
                }
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
        }

        if (args[0] == "unhandled")
        {
            try {
                const {size} = fs.statSync('./unhandled.txt');
                if (size > 800000)
                {
                    message.channel.send("Log File Over 8mb")
                }
                else 
                {
                    message.channel.send("Latest unhandled Log.", { files: ["./unhandled.txt"] });
                }
              } catch(error){
                console.error(error)
                message.channel.send(`Located an error : ${error}`)
            }
        }
    }
}
