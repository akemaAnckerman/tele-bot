console.log('translate.js AKTIF!')

const TeleBot = require('telebot')
var translate = require('translation-google');
const delay = require('delay')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})




module.exports = bot => {
    bot.on(/^\/translate ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        translate(arg, {from: 'en', to: 'id'}).then(res => {
            return bot.sendMessage(msg.from.id, `===[FROM ENGLISH TO BAHASA]===\n\n${res.text}`);
        }).catch(err => {
            return bot.sendMessage(msg.from.id, `ERROR | ${err}`);
        });
    }) 
}



