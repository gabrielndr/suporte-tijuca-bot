const tg = require('node-telegram-bot-api');
const token = '457248917:AAHTK6Ec5gLbuTj5lvFKyL6hlGZEPGhpozQ';
const bot = new tg(token, {polling: true});

// configs
const { Ticket } = require('./core');

const { start } = require('./commands');

let ticket = Ticket({
    user: "",
    chatId: "",
    type: "",
    cancel: {
        by: "",
        cod:"",
        reason:"",
        date:""
    },
    problem: ""
})

bot.onText(/\/start/, msg => start(bot,msg));


bot.onText(/\/edu/, function (msg) {
    let fromId = msg.from.id;
    let opts = {
        reply_markup: JSON.stringify({ force_reply: true }
    )};
    bot.sendMessage(fromId, 'What should I search for?', opts)
        .then(function(sended) {
            let chatId = sended.chat.id;
            let messageId = sended.message_id;
            bot.onReplyToMessage(chatId, messageId, function (message) {
                console.log('OK. I\'ll search for %s', message.text);
            });
        })
});