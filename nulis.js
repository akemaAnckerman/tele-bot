console.log('nulis.js aktif!')

const TeleBot = require('telebot')
const delay = require('delay')
const needle = require('needle')
const _ = require('lodash')
const { isEmpty } = require('lodash')


const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})



module.exports = bot => {
    bot.on(/^\/nulis ([\s\S]+)/, async (msg, args) => {
    let arg = args.match[1]
    
    let url = 'http://salism3.pythonanywhere.com/write?text='
    needle(url + arg, async (err, resp, body) => {
        if (_.isEmpty(body) === true) {
        return bot.sendMessage(msg.chat.id, 'Gagal!, coba lagi pelan-pelan...jangan lupa berdoa juga!')
        }
        if (_.isEmpty(body.images) === true) { 
        return bot.sendMessage(msg.chat.id, 'Gagal!, Masukkan teks terlebih dahulu!')
        }
        await bot.sendMessage(msg.chat.id, 'Sebentar ya ngab...')
        await delay(200)
        await bot.sendPhoto(msg.chat.id, `${body.images}`, { caption: 'Sukses!😎' })

        })
    
    }) 


}







