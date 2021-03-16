console.log('cewecans.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
    bot.on(/^\/pinterest ([\s\S]+)/, async (msg, arg) => {
    let args = msg.text.slice(11)
        bot.sendMessage(msg.chat.id, 'Sabar, Lagi Nyari...')
        var url = await 'https://api.vhtear.com/pinterest?query='+args+'&apikey='+vhtear
        await axios.get(url)
        .then(async(res) => {
            let acakcecan = await res.data.result[Math.floor(Math.random() * res.data.result.length )]
            await bot.sendPhoto(msg.chat.id, `${acakcecan}`)
            return await bot.sendMessage(msg.chat.id, `Pinterest\n\nHasil Pencarian : ${args}`)
        }).catch(async(err)=> {
            return await bot.sendMessage(msg.chat.id, `ERROR KAK KAGAK ADA APIKEY | ${err}`)
        })

    })
}

