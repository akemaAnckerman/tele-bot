console.log('tts.js aktif!');
const TeleBot = require('telebot');
const delay = require('delay');
const googleTTS = require('google-tts-api');
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/tts ([\s\S]+)/, async (msg, args) => {
    const arg = args.match[1]
    await bot.sendMessage(msg.from.id, 'Sabar, mbak gugel nya lagi baca teks kamu...')

    if(arg.length > 200) {
      return bot.sendMessage(msg.from.id, 'ERROR | Batas maksimal 200 karakter!')
    }

    googleTTS
  .getAudioBase64(arg, {
    lang: 'id',
    slow: false,
    host: 'https://translate.google.com',
    timeout: 10000,
  })
  .then(async(res) => {

    const tts = res
    const fileOpts = {
    fileName: 'tts.mp3',
    contentType: 'audio/mp3',
    };

    await bot.sendAudio(msg.from.id, Buffer.from(tts, 'base64'), fileOpts)
    return await bot.sendMessage(msg.from.id, 'Sukses😎👌, Thanks to mbak gugel!')

  })
  .catch(async(err) => {
      return await bot.sendMessage(msg.from.id, `ERROR | ${err}`)
  })
        })
}





