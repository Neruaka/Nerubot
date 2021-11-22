module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}... réesayer ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `La musique ${queue.current.title} a repris ✅` : `Il y a eu un problème ${message.author}... réesayer ? ❌`);
    },
};