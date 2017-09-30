var token = process.env.TOKEN;

var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.onText(/Ciao/, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Ciao, ' + name + '!').then(function () {
    // reply sent!
  });
});

bot.onText(/Come stai\?/, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Benino, ' + name + ' e tu?').then(function () {
    // reply sent!
  });
});

module.exports = bot;
