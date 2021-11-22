const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement aucune musiqque ${message.author}... réesayer ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Le temps indiqué est supérieur au temps total de la chanson actuelle ${message.author}... réessayer ? ❌\n*Essayez par exemple un temps valide comme **5s, 10s, 20 secondes, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`La musique commensera a partir de **${ms(timeToMS, { long: true })}** ✅`);
    },
};