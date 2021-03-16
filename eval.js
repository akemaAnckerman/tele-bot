console.log('exec.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const { exec } = require('child_process')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on(/^\/eval ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        if (ownerid.includes(msg.from.id)) {
        if (!arg) return bot.sendMessage(msg.chat.id, 'masukkan kode javascript!', { replyToMessage: msg.message_id })
        eval(arg)
    } else {
    bot.sendMessage(msg.chat.id, 'ups Kamu bukan developer bot!', {replyToMessage: msg.message_id})
    }
    
    })

}



