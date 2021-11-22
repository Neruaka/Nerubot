player.on('error', (queue, error) => {
    console.log(`Erreur émise par la file d'attente ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Erreur émise par la connexion ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Début de la lecture de ${track.title} dans **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`La musique ${track.title} a été ajoutée dans la file d'attente ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send("J'ai été déconnecté du salon vocal...");
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send("Personne n'est dans le salon vocal, je vais donc le quitter... ❌");
});

player.on('queueEnd', (queue) => {
    queue.metadata.send("J'ai fini de lire toute la file d'attente ✅");
});