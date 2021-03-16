console.log('fbdl.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const fbdl = require('fbdl-core')
const TinyURL = require('tinyurl')


const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/fbdl ([\s\S]+)/, async (msg, args) => {
    let arg = args.match[1]
    bot.sendMessage(msg.chat.id, 'Sedang mendownload....Harap sabar....')
    fbdl.getInfo(arg)
    .then((response) => {
    let video = response.rawVideo
    TinyURL.shorten(`${video}`, function(res) {
      
        bot.sendMessage(msg.chat.id, `✅BERHASIL!✅\n\nJudul : ${response.title}\n\nDeskripsi : ${response.description}\n\nDurasi : ${response.duration} Menit:Detik\n\nGenre : ${response.genre}\n\nDiupload pada tanggal : ${response.publishedAt}\n\nKonten Dewasa ? : ${response.nsfw ? 'Iya' : 'Tidak'}\n\nKualitas : ${response.quality}\n\nBesar Video KB/MB : ${response.size}\n\nTotal komentar : ${response.comments}\n\nDishare sebanyak : ${response.shares} kali\n\nLink Download : ${res}`)
        console.log(response)
        
                })

            }).catch((err) => {
            return bot.sendMessage(msg.chat.id, `ERROR (MUNGKIN SALAH LINK, PASTIKAN KAMU MEMASUKKAN LINK www.facebook.com BUKAN https://fb.watch) | ${err}`)
        })

    })

}


