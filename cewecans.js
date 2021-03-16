console.log('cewecans.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
    bot.on(['/cewecans'], async (msg, args) => {
        bot.sendMessage(msg.chat.id, 'Sabar ngab...')
        var items = await ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang", "russian girl"]
        var cewe = await items[Math.floor(Math.random() * items.length)];
        var url = await 'https://api.fdci.se/rep.php?gambar=' + cewe
        await axios.get(url)
        .then(async(res) => {
            let acakcecan = await res.data[Math.floor(Math.random() * res.data.length )]
            await bot.sendPhoto(msg.chat.id, `${acakcecan}`)
            return await bot.sendMessage(msg.chat.id, `🥺Haloo ${msg.from.username}👋, 🤝Salam Kenal😘🥰😍`)
        }).catch(async(err)=> {
            return await bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })

    })
}

