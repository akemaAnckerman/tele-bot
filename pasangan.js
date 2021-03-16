console.log('animedl.js AKTIF!')

const TeleBot = require('telebot')
const delay = require('delay')
const axios = require('axios')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})




module.exports = bot => {

    bot.on(/^\/pasangan (.+)$/, async (msg, args) => {

        const arg1 = args.match[1].split(' ')[0]
        const arg2 = args.match[1].split(' ')[1]
        const link = `https://scrap.terhambar.com/jodoh?n1=${arg1}&n2=${arg2}`
        bot.sendMessage(msg.chat.id, `Tunggu sebentar....sedang mengukur kesetiaanmu dan mencari sisi negatif/positif kamu berpasangan dengan ${arg2}`)
        axios
        .get(link)
        .then (async(res) => {
            await delay(200)
            await bot.sendPhoto(msg.chat.id, res.data.result.gambar)
            return bot.sendMessage(msg.chat.id, `Namamu : ${res.data.result.nama_anda}\nNama Pasanganmu : ${res.data.result.nama_pasangan}\n\nSisi Positif Kamu Berpasangan Dengan ${res.data.result.nama_pasangan} : ${res.data.result.sisi.positif}\n\nSisi Negatif Kamu Berpasangan Dengan ${res.data.result.nama_pasangan} : ${res.data.result.sisi.negatif}\n\n😍😍🥰🥰😘😘`)
        }).catch ((err) => {
            console.error(err)
            return bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })

    })

}



