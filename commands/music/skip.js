module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}... `);

        const success = queue.skip();

        return message.channel.send(success ? `La musique ${queue.current.title} a été passé avec succès ✅` : `Il y a eu un problème ${message.author}... Veuillez réesayer`);
    },
};