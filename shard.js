config = require('./config/bot');
const { ShardingManager } = require("discord.js");
const discord = require('discord.js');
const fs = require('fs');
const client = new discord.Client({ disableMentions: 'everyone' });
const manager = new ShardingManager("./index.js", {
    totalShards: "auto",
    token: config.discord.token
});


try {
    fs.appendFile('debug.txt', `=====================================[Client Started ${Date()}]=====================================\n\n`, function (err) {})
    fs.appendFile('warn.txt', `=====================================[Client Started ${Date()}]=====================================\n\n`, function (err) {})
    fs.appendFile('error.txt', `=====================================[Client Started ${Date()}]=====================================\n\n`, function (err) {})
    fs.appendFile('unhandled.txt', `=====================================[Client Started ${Date()}]=====================================\n\n`, function (err) {})
} catch (err) {
    console.error(err)
}


manager.on("shardCreate", (shard) => console.log(`Shard ${shard.id} launched`));
manager.spawn(5);

manager.on("launch", (shard) => {
    console.log(`Successfully launched shard ${shard.id} of ${manager.totalShards-1}`);
    //client.user.setActivity(client.config.discord.activity + `Shard[${this.shard.id}]`)

    shard.on("death", (process) => {
     console.error("Shard: " + shard.id + " death");
     if(process.exitCode === null)
     {
      console.warn("Shard NULL: " + shard.id);
     }
    });
   
    shard.on("disconnect", (event) => {
     console.warn("Shard " + shard.id + " disconnected.");
     console.log(event);
    });
   
    shard.on("reconnecting", () => {
      console.warn("Shard " + shard.id + " is reconnecting...");
    });
});