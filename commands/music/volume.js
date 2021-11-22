const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musiqque ${message.author}... réesayer ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Le volume actuel est ${queue.volume} 🔊\n*Pour modifier le volume, entrez un nombre valide entre **1** et **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Le volume que vous voulez changer est déjà le volume actuel ${message.author}... essayez à nouveau ! ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Le nombre spécifié n'est pas valide. Entrez un nombre entre **1** et **${maxVol}** ${message.author}... réessayer ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Le volume a été modifié a **${vol}**/**${maxVol}**% 🔊` : `Quelque chose s'est mal passé ${message.author}... réesayer? ❌`);
    },  
};