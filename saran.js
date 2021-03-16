console.log('saran.js AKTIF!')

const TeleBot = require('telebot')
const delay = require('delay')
const axios = require('axios')
const cooldown = new Set();
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

// TANGGAL

const options = {
    year: '2-digit', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZone: 'Asia/Jakarta',
    timeZoneName: 'short'
  }
  const formater = new Intl.DateTimeFormat('sv-SE', options)
  const startingDate = new Date()
  
  const dateInNewTimezone = formater.format(startingDate) 
 
// TANGGAL

let idgrup = 'Set Pake Id Group Lu' // Ganti IdGoup Lu Cari Id Group? nih add dia ke gc lu @getidsbot

module.exports = bot => {
    bot.on(/^\/saran ([\s\S]+)/, async (msg, args) => {
    let pesan = `=Saran=\n\nDari :\nNama Depan/Belakang : ${msg.from.first_name} ${msg.from.last_name}\nUsername : ${msg.from.username}\nID : ${msg.chat.id}\nDikirim tanggal : ${dateInNewTimezone}\n\nPesan :\n` + args.match[1]

if (cooldown.has(msg.chat.id)) {

    return bot.sendMessage(msg.chat.id, `Cooldown 30 detik ngab...Tunggu 30 detik lagi baru bisa kirim saran baru🙏`)

    } else {    
        
        await bot.sendMessage(idgrup, pesan)
        await msg.reply.text(`>> Berhasil mengirim saran ke dev (@Elmriakrmva)✍️👌\nTerima kasih banyak sudah mengirim saran🙏`)

        cooldown.add(msg.chat.id);
        setTimeout(() => {
          cooldown.delete(msg.chat.id);
        }, 30000);
        
        }
        
    })

}



