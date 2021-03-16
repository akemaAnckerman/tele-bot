console.log('terjemahan.js AKTIF!')

const TeleBot = require('telebot')
var translate = require('translation-google');
const delay = require('delay')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/terjemahan ([\s\S]+)/, async (msg, args) => {
    let arg = args.match[1]
    translate(`${arg}`, {from: 'id', to: 'en'}).then(res => {
        return bot.sendMessage(msg.chat.id, `===[DARI BAHASA KE INGGRIS]===\n\n${res.text}`);
    }).catch(err => {
        return bot.sendMessage(msg.chat.id, `ERROR | ${err}`);
        })
    })
}




