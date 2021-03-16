console.log('rangkum.js AKTIF!')
const summarizer = require('text-summarisation')
const TeleBot = require('telebot')
const delay = require('delay')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on(/^\/rangkum ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        bot.sendMessage(msg.chat.id, 'Sedang merangkum....')

        summarizer(arg, { sentences: 5 }).then(async result => await bot.sendMessage(msg.chat.id, `===[Hasil Rangkuman]===\n\n${result}`))
        .catch((err) => {
            return bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })

    })
}

