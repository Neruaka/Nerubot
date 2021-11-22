module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Il n'y a actuelement aucune musique ${message.author}... `);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Veuillez spécifier un filtre valide pour l'activer ou le désactiver. ${message.author}... \n${actualFilter ? `Filtre actuellement actif ${actualFilter} (${client.config.app.px}filtre ${actualFilter} pour le désactiverw).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Ce filtre n'existe pas ${message.author}... Veuillez réesayer ? ❌\n${actualFilter ? `Filtre actuellement actif ${actualFilter}.\n` : ''}Liste des filtres disponibles ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`le filtre ${filter} est maintenant **${queue.getFiltersEnabled().includes(filter) ? 'activé' : 'désactivé'}** ✅\n*Petit rappel, le filtre sera actif pendant l'intégralité de la musique.*`);
    },
};