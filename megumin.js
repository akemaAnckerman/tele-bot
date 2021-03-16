console.log('megumin.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/megumin'], async (msg, args) => {
    const link = await 'https://waifu.pics/api/sfw/megumin'
    await bot.sendMessage(msg.chat.id, 'Sabar ngab...')
    await axios.get(link)
    .then(async (res) => {
        let randommegumin = await `${res.data.url}`
        await bot.sendPhoto(msg.chat.id, `${randommegumin}`)
        return await bot.sendMessage(msg.chat.id, 'KAWAIIIIII😍😍')

    })
    .catch(async(err) => {
        return await bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })
    })
}




