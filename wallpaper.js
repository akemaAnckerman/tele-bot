console.log('wallpaper.js AKTIF!')

const TeleBot = require('telebot')
const delay = require('delay')
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {

    bot.on(['/wallpaper'], async (msg, args) => {
        const link = 'https://source.unsplash.com/random'
        bot.sendMessage(msg.chat.id, 'Tunggu sebentar...')
        axios
        .get(link)
        .then(async (result) => {
            await bot.sendPhoto(msg.chat.id, result.request.res.responseUrl)
            return await bot.sendMessage(msg.chat.id, '😍Enjoy Dengan Wallpaper Barunya!😍')
        })

    })

}


