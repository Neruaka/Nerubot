const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuellement acune musique ${message.author}...`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Volume **${queue.volume}**%\nDurée **${trackDuration}**\nMode boucle **${methods[queue.repeatMode]}**\nDemandé par ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('By Neruaka ❤️', message.author.avatarURL({ dynamic: true }));

        const saveButton = new MessageButton();

        saveButton.setLabel('Save this track');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};