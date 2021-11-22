

const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js'); //load discordjs library
const jointocreate = require("../events/jointocreate"); //load the jointocreate.js file






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


jointocreate(client);                           //call the jointocreate file
require('./loader');
require('./events');




client.login('OTEyMDY4OTUyMDk4NzYyNzUz.YZqkZw.XiylJYjfAEHJJh0OaTUZCCKHf8g');