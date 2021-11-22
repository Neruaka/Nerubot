module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musique ${message.author}... réesayer ? ❌`);

        message.author.send(`Vous avez sauvé la piste ${queue.current.title} | ${queue.current.author} depuis le serveur ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Je vous ai envoyé le titre de la musique par messages privés. ✅`);
        }).catch(error => {
            message.channel.send(`Impossible de vous envoyer un message privé ${message.author}... réesayer ? ❌`);
        });
    },
};