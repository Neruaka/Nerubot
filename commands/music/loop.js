const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a pas de musique actuellement ${message.author}...`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Vous devez d'abord désactiver la musique en cours dans le mode boucle (${client.config.app.px}) ${message.author}...`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Répéter la boucle **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}** toute la file d'attente sera répétée à l'infini 🔁` : `Il y a eu un problème ${message.author}... veuillez réesayer !`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Vous devez d'abord désactiver le mode boucle dans la file d'attente actuelle (${client.config.app.px}) ${message.author}... veuillez réesayer `);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode boucle **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}** la musique actuelle sera répétée à l'infini  🔂` : `Il y a eu un problème ${message.author}... réesayer ? ❌`);
        };
    },
};