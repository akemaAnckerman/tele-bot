console.log('exec.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const axios = require('axios');
const brainly = require('brainly-scraper');
const { exec } = require('child_process')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {
    bot.on(/^\/exec ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1]
      exec(arg, (err, stdout) => {
		           if(err) return msg.reply.text('Error!')
		           if (stdout) {
			       bot.sendMessage(msg.chat.id, stdout)
		           }
	           })
    
    
    })
    bot.on(/^\/return ([\s\S]+)/, async (msg, args) => {
        let argu = args.match[1]
        try {
      bot.sendMessage(msg.chat.id, JSON.stringify(eval(argu), null, '\t')) 
    } catch (e) {
   bot.sendMessage(msg.chat.id, `${e}`)
    }
  })

}



