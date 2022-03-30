require("dotenv").config();
const fs = require('fs');
const discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    //client.channels.cache.get('904289526166478849').send("Joined a new guild: " + guild.name + " | "+ guild.id + ` Members : ${guild.memberCount}`)
    
    if (guild.name == "undefined")
    {
    return console.log(guild.name + " : undefined");
    }
    
    try {

        client.shard.broadcastEval(`
        (async () => {
            const channel = await this.channels.cache.get('904289526166478849');
            if (channel) {
                channel.send({embed: {
                    color: Math.floor(Math.random() * 16777214+ 1),
                    title: \`Joined a new guild ${guild.name}\`,
                    description: \`Guild ID : ${guild.id}\nGuild Member Count : ${guild.memberCount}\nShard ID : ${client.shard.ids}\`,
                }});
            }
        })()
        `);
    } catch (e) {
        console.error(e);
    };
})

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    //client.channels.cache.get('904289526166478849').send("Left a guild: " + guild.name + " | "+ guild.id)
    try {
        client.shard.broadcastEval(`
        (async () => {
            const channel = await this.channels.cache.get('904289526166478849');
            if (channel) {
                channel.send({embed: {
                    color: Math.floor(Math.random() * 16777214+ 1),
                    title: \`Left Guild ${guild.name}\`,
                    description: \`Guild ID : ${guild.id}\nGuild Member Count : ${guild.memberCount}\nShard ID : ${client.shard.ids}\`,
                }});
            }
        })()
        `);
    } catch (e) {
        console.error(e);
    };
})

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
    try {
        fs.appendFile('unhandled.txt', error + "\n", function (err) {
    })
    } catch (err) {
        console.error(err)
    }

    client.shard.broadcastEval(`
    (async () => {
        const channel = await this.channels.cache.get('913967100970803280');
        if (channel) {
            channel.send(\`${error}\`);
        }
    })()
    `);
});

process.on('uncaughtException', error => {
	console.error('uncaughtException:', error);
    try {
        fs.appendFile('uncaughtException.txt', error + "\n", function (err) {
    })
    } catch (err) {
        console.error(err)
    }

    client.shard.broadcastEval(`
    (async () => {
        const channel = await this.channels.cache.get('913967100970803280');
        if (channel) {
            channel.send(\`${error}\`);
        }
    })()
    `);
});


client.on("error", (e) => {
    try {
        fs.appendFile('error.txt', e + "\n", function (err) {
    })
    } catch (err) {
        console.error(err)
    }
});

client.on("warn", (e) => {
    try {
        fs.appendFile('warn.txt', e + "\n", function (err) {
    })
    } catch (err) {
        console.error(err)
    }
});


client.on("debug", (e) => {
    try {
        fs.appendFile('debug.txt', e + "\n", function (err) {
    })
    } catch (err) {
        console.error(err)
    }
});

client.login(client.config.discord.token);



/*
const express = require("express")
const server = express()
server.all("/api", (req, res) => {

    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })

    res.json({ botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})

});

function apiserver1() {
  server.listen("4000" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
*/


if (client.shard.ids == 0)
{
const express = require("express")
const server = express()
server.all("/", (req, res) => {

    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })

    res.json({ shardid: `${client.shard.ids}`, botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})

});

function apiserver1() {
  server.listen("4000" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
}

if (client.shard.ids == 1)
{
const express = require("express")
const server = express()
server.all("/", (req, res) => {

    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })

    res.json({ shardid: `${client.shard.ids}`, botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})

});

function apiserver1() {
  server.listen("4001" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
}

if (client.shard.ids == 2)
{
const express = require("express")
const server = express()
server.all("/", (req, res) => {

    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })

    res.json({ shardid: `${client.shard.ids}`, botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})

});

function apiserver1() {
  server.listen("4002" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
}

if (client.shard.ids == 3)
{
const express = require("express")
const server = express()
server.all("/", (req, res) => {

    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })

    res.json({ shardid: `${client.shard.ids}`, botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})

});

function apiserver1() {
  server.listen("4003" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
}

if (client.shard.ids == 4)
{
const express = require("express")
const server = express()
server.all("/", (req, res) => {

    let count = 0;
    client.guilds.cache.forEach((guild) => {
    count += guild.memberCount
    })

    res.json({ shardid: `${client.shard.ids}`, botname: `${client.user.username}`, totalserver: `${client.guilds.cache.size}`, totalchannels: `${client.channels.cache.size}`, totalmembers: `${count}`})

});

function apiserver1() {
  server.listen("4004" || 6000, () => {
    console.log("Server is ready.")
  })
}
module.exports = apiserver1
apiserver1();
}