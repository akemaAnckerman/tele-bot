console.log('slots.js AKTIF!')
const TeleBot = require('telebot')
const delay = require('delay')
const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})


module.exports = bot => {

bot.on(['/slots'], async (message) => {
    bot.sendMessage(message.chat.id, 'Sedang mengacak...')
    await delay(2000)
    let emojis = ["🍒", "🍎", "📘", "♦️", "💙", "💵"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);

    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }

    let end;
    if (a == b && b == c) {
        end = "😎 JACKPOT EZ WIN jangan sombong dulu kak nanti kalah nangis 😎";
    } else if (a == b || a == c || b == c) {
        end = "😁 Mantap kak ^_^ Lumayan Bagus Dapet Skor Dikit^_^ 😁";
    } else {
        end = "😭 Kakak kalah Jangan Nangis Ya Kak 😭";
    }

    return message.reply.text(
        `${end}\n${x[0]} ${y[0]} ${z[0]}\n${x[1]} ${y[1]} ${z[1]}\n${x[2]} ${y[2]} ${z[2]}`
    )
    })
}





