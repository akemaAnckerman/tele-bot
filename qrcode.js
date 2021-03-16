console.log('qrcode.js aktif!')
const TeleBot = require('telebot')
const delay = require('delay')
const QRCode = require('qrcode')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})
module.exports = bot => {
bot.on(/^\/qrcode ([\s\S]+)/, async (msg, args) => {
    const arg = args.match[1]
    QRCode.toDataURL(arg, async function (err, url) {
        const file = url
        const fileOpts = {
        fileName: 'qrcode.jpg',
        contentType: 'image/jpg',
        };
        await bot.sendPhoto(msg.chat.id, Buffer.from(file.substr(22), 'base64'), fileOpts);
        return await bot.sendMessage(msg.chat.id, '✅QR CODE BERHASIL DIBUAT✅')
            })
        })
}

