module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}... réesayer ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `La musique ${queue.current.title} a été mise en pause ✅` : `Il y a eu un problème ${message.author}... réesayer ? ❌`);
    },
};