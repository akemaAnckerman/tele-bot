console.log('neko.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios')
const fetch = require('node-fetch')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(/^\/shortlink ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
       await bot.sendMessage(msg.chat.id, 'Sedang Membuat Shortlink...')
     fetch(`https://tinyurl.com/api-create.php?url=${arg}`)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            bot.sendMessage(msg.chat.id, text)
          //  await message.reply.text('Shortlink Sudah Dibuat😊')
        })
        .catch((err) => {
            bot.sendMessage(msg.chat.id, err)
        })

    })
}