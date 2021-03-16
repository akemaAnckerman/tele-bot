console.log('neko.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/neko'], async (msg, args) => {
    const link = await 'https://waifu.pics/api/sfw/neko'
    await bot.sendMessage(msg.chat.id, 'Sedang mencari kucing poi :v....')
    await axios.get(link)
    .then(async (res) => {
        var randomneko = await `${res.data.url}`
        await bot.sendPhoto(msg.chat.id, `${randomneko}`)
        return await bot.sendMessage(msg.chat.id, 'KAWAIIIIII😍😍')

    })
    .catch(async(err) => {
        return await bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })
    })
}





