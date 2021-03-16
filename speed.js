console.log('speed.js aktif!');

const TeleBot = require('telebot');
const speed = require ('performance-now')
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/speed'], async (msg, args) => {
    timestamp = speed()
                latensi = speed() - timestamp
                const pingnya2 = `Speed: ${latensi.toFixed(4)} Second`
        return await bot.sendMessage(msg.chat.id, pingnya2)
    })
    bot.on(['/ping'], async (msg, args) => {
    timestamp = speed()
                latensi = speed() - timestamp
                const pingnya2 = `Speed: ${latensi.toFixed(4)} Second`
        return await bot.sendMessage(msg.chat.id, pingnya2)
    })
}





