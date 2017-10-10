exports.start = (bot,msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Received your message');
}
