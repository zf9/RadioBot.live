module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}.`);
    console.log(`guilds.cache.size ${client.guilds.cache.size}.`);
    console.log(`channels.cache.size ${client.channels.cache.size}.`);
    //client.user.setActivity(client.config.discord.activity);
    client.user.setActivity(client.config.discord.activity + `Shard ID : ` + client.shard.ids)

};