console.log('quotes.js aktif!');

const TeleBot = require('telebot');
const fs = require('fs')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/fakta'], async (msg, args) => {
                body = fs.readFileSync('./lib/fakta.txt', 'utf-8')
                splitnix = body.split('\n')
                randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
        return await bot.sendMessage(msg.chat.id, randomnix)
    })
    bot.on(['/pantun'], async (msg, args) => {
    body = fs.readFileSync('./lib/pantun.txt', 'utf-8')
    splitnix = body.split('\n')
     randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
     return await bot.sendMessage(msg.chat.id, randomnix.replace(/pjrx-line/g,"\n"))
    })
}