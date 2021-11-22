require('dotenv').config();

const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js'); //load discordjs library


global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('../config');

global.player = new Player(client, client.config.opt.discordPlayer);


require('./loader');
require('./events');


client.login(process.env.BOT_TOKEN);