const { Voice, LoadCommands, Bot } = require('aoi.js');

const bot = new Bot({
  prefix: "$getServerVar[prefix]",
  token: process.env.token,
  intents: "all",
  fetchInvites: true,
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd,"./commands/")

bot.status({
  text: "over $serverCount servers!",
  type: "PLAYING",
  status: "online",
});


const data = require('./commands/data/variables.js')
bot.variables(data)

const chalk = require('chalk');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile('/index.html');
});