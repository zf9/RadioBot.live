module.exports = (client, message, queue) => {
    message.channel.send(`Music stopped. No more music in the queue!`);
};