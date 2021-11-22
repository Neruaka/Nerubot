module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}... `);

        queue.destroy();

        message.channel.send(`La musique a été arrêtée aurevoir 👋`);
    },
};