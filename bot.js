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

bot.onText(/Ciao/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Ciao, ' + name + '!').then(function () {
    // reply sent!
  });
});

bot.onText(/Come stai\?/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Benino, ' + name + ' e tu?').then(function () {
    // reply sent!
  });
});


//bot.onText(/we\?/i, function (msg) {
// var name = msg.from.first_name;
//  bot.sendVideo(video.chat.id,https://www.dropbox.com/s/qt7t31nhhl5z27u/video_2017-09-30_20-23-39.mp4).then(function () {
    //reply sent!
//  });
//});

// telegramBot.sendVideoNote da implementare
// telegramBot.sendVideo per video più lunghi di 1 minuto

module.exports = bot;
