module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}... réesayer ? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Lecture d'un live, pas de données à afficher 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};