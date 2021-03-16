
console.log('igavatar.js aktif!')
const TeleBot = require('telebot')
const delay = require('delay')
const ig = require('scraper-instagram')
const InstaClient = new ig()
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})



module.exports = bot => {
bot.on(/^\/igavatar (.+)$/, async (msg, args) => {
    let username = await args.match[1]
    let usernamefix = await username.replace(/@/g, '')
    let session = await process.env.sesiidig
    await InstaClient.authBySessionId(session)
    await bot.sendMessage(msg.chat.id, `Sedang mengambil avatar dari username ${usernamefix}`)

await InstaClient.getProfile(usernamefix)
	.then(async(profile) => {
        await bot.sendDocument(msg.chat.id, `${profile.pic}`)
        return await bot.sendMessage(msg.chat.id, `Berhasil mengambil avatar => ${profile.name} 😎👌`)
    }).catch(async(err) => {

        return await bot.sendMessage(msg.chat.id, `ERROR | ${err}`)

    })


    })

}




