module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}...`);

        if (!queue.previousTracks[1]) return message.channel.send(`Il n'y avait pas de musique avant ${message.author}...`);

        await queue.back();

        message.channel.send(`Joue la musique précédente`);
    },
};