module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            author: { name: `Here are your search results for ${query}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `${i + 1} - ${t.title}`).join('\n')}`,
        },
    });
};