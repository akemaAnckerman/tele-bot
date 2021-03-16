console.log('logs.js AKTIF!')

const TeleBot = require('telebot')
const delay = require('delay')
let fs = require('fs')
let dev = '1245178040'

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {

    bot.on(['/getlog'], async (msg, args) => {
        if (msg.chat.id.toString().includes(dev)) {
           let readlogs = fs.readFileSync('userlogs.txt', {encoding:'utf-8'})
           if (readlogs.length < 4096) {
           return await bot.sendMessage(msg.chat.id, `${readlogs}`)
           } else {
               return await bot.sendDocument(msg.chat.id, './userlogs.txt')
           }
        } else {
            return bot.sendMessage(msg.chat.id, `Maaf kamu bukan dev, aku tidak mengenal mu 🙁`)
        }
    })

}



