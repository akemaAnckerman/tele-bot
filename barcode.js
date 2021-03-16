console.log('barcode.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(/^\/barcode ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
        if (arg.length < 1) return bot.sendMessage(msg.from.id, 'Silahkan Masukkan teks!')
       await bot.sendMessage(msg.chat.id, 'Sedang Membuat Barcode...')
     try {
     var randomneko = await `https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${arg}`
        await bot.sendPhoto(msg.chat.id, `${randomneko}`)
        await bot.sendMessage(msg.chat.id, 'Done Kak')
        } catch (err) {
            bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        }

    })
}
