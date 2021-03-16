console.log('brainly2.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on(/^\/brainly ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
      
          brainly(`${arg}`).then(bren => {
					teks = '*「 _BRAINLY_ 」*\n\n'
					no = 0
					for (let data of bren.data) {
						no += 1
						teks += `\n*� Pertanyaan:* ${data.pertanyaan}\n*� Jawaban:* ${data.jawaban[0].text}\n\n�───────────�\n`
					}
					bot.sendMessage(msg.chat.id, teks)
					
                    }).catch((err) => {
            return bot.sendMessage(msg.chat.id, `ERROR | ${err}`)
        })
    
    
    })

}



