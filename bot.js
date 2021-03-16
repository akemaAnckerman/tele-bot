console.log('bot.js aktif!')

const TeleBot = require('telebot')
const delay = require('delay')

global.tokebot = '1669510440:AAENeFFYTH46OqsaZz952hAEGGxnWygrvqU' // Ganti Api Token Lu
global.ownerid = 'Ganti Ada Di Bot @getidsbot' // Ganti Id Nomor Lu Ya kak cari id nomor di: @getidsbot
global.zeksapi = 'apivinz' // kalo Expied Lu Ganti Yak Create By @Elmriakrmva
global.vhtear = 'Jsieu8287362jshre82' // kalo Expied Lu Ganti Yak Create By @Elmriakrmva

const bot = new TeleBot({
    token: global.tokebot
})


bot.on(['/start'], async (msg) => {
    let replyMarkup = bot.keyboard([
        ['/menu ✏️🗒', '/readme 🗒🔍',
        '/about 🤖❗️', '/donasi🗿'],
    ], {resize: true});

await bot.sendMessage(msg.chat.id, `😎Halo Selamat Datang, ${msg.from.username || msg.from.first_name}! 👋\n____________\nHalo ini adalah BOT Alia Versi Telegram😄!\n____________\n
Gunakan perintah /menu untuk melihat semua fitur yang ada di Bot Alia, gunakan juga fitur /about untuk melihat tentang Bot Alia, dan gunakan perintah /readme untuk melihat informasi dan semua contoh perintah fitur yang ada di Bot Alia, terima kasih😉\n____________
\n🤖VERSI BOT Alia : v2.4🤖\n\nFixed /ytmp4✅\nAdded /igavatar✅\nFixed /twtdl✅\nAdded /tts✅\nAdded /saran✅\nAdded Keyboard✅\nRemake start, menu✅\nAdded /about✅\nAdded /nulis3✅`, 
{replyToMessage: msg.message_id})
return await bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup})
})

bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.chat.id, 'Gunakan /show untuk menampilkan keyboard!', {replyMarkup: 'hide',replyToMessage: msg.message_id})
})
bot.on('/kickme', async (msg) => {
    try {
   bot.sendMessage(msg.chat.id, 'Tidak masalah, aku akan kick kamu!' ,{replyToMessage: msg.message_id})
   bot.kickChatMember(msg.chat.id, msg.from.id)
    } catch {
    bot.sendMessage(msg.chat.id, 'Gagal kick member!', {replyToMessage: msg.message_id})}
})

bot.on('/id', async (msg) => {
bot.sendMessage(msg.chat.id, `\`id chat ini adalah ${msg.chat.id}\``, {replyToMessage: msg.message_id})
})

bot.on('/show', msg => {
    let replyMarkup = bot.keyboard([
        ['/menu ✏️🗒', '/readme 🗒🔍',
        '/about 🤖❗️', '/donasi🗿'],
    ], {resize: true});
    return bot.sendMessage(msg.chat.id, 'Gunakan /hide untuk menyembunyikan keyboard!', {replyMarkup,replyToMessage: msg.message_id})
})


bot.on(['/menu'], async (msg) => {
    return bot.sendMessage
(msg.chat.id, `Created By : @Elmriakrmva\nLink Bot : https://telegram.me/Australlia_Bot\n_______________\n\n🤖LIST FITUR BOT Alia🤖!\n
=====[DAFTAR MENU]=====\n> /donasi [DONASI]\n>/nulis [teks]\n> /nulis2 [teks]\n> /nulis3 [teks]\n> /anime [nama anime]
> /animedl [nama anime]\n> /animedl2 [nama anime]\n> /filmtrend\n> /filmdetail [angka 1-20]
> /cekresi [kurir] [resi]\n> /brainly [pertanyaan]\n> /lirik [nama artis - judul lagu]\n> /saran [teks]
> /qrcode [teks]\n> /tts [teks]\n> /pasangan [namamu] [pasanganmu]\n> /translate [teks]\n> /terjemahan [teks]
> /rangkum [teks]\n> /megumin\n> /neko\n> /waifu\n> /cewecans\n> /wallpaper\n> /slots\n> /brainly [pertanyaan]\n> /tahta [teks]\n\n========================
\n===[Sosmed Downloader]===\n> /ytmp4 [link yt]\n> /ytmp3 [link yt]\n> /twtdl [link twitter]\n> /tiktokdl [link tiktok]
> /fbdl [link video facebook]\n> /igdl [link instagram]\n> /igtv [link instagram tv]\n> /igstory [angka] [username ig]
> /igavatar [username ig]\n========================\n
Kurang paham/kurang jelas ? => /readme
Ingin tau tentang Bot Alia ? => /about
ingin donasi ke bot AliA ? => /donasi
`)
})



bot.on(['/readme'], async (msg) => {

return bot.sendMessage
(msg.chat.id, `_______________\n\n🤖INFO MENU🤖!\n\n===[Info Menu Fitur Alia]===\n
/donasi = Donasi lah cok:)
/nulis = Untuk menulis tanpa membutuhkan pulpen atau kertas \n(Contoh Perintah : /nulis Halo nama saya ucup < sama dengan /nulis2 dan /nulis3)\n
/anime = Untuk mencari info seputar anime, jumlah episode, sinopsis, rating, dan lainnya \n(Contoh Perintah : /anime death note)\n
/cekresi = Untuk mengecek resi atau tracking paket lewat kurir dan resi yang di tulis \n(Contoh Perintah : /cekresi jne 4105xxxxxxxx320)\n
/brainly = Untuk mencari jawaban dari brainly \n(Contoh Perintah : /brainly kenapa bumi bulat)\n
/tts = Untuk merubah teks menjadi audio, suara by mbak mbak gugel :v \n(Contoh Perintah : /tts anjay mabar)\n
/lirik = Untuk mencari lirik musik \n(Contoh Perintah : /lirik vierra seandainya)\n
/megumin = Untuk mencari gambar megumin secara random atau acak \n(Contoh Perintah : /megumin)\n
/neko = Untuk mencari gambar neko atau kucing kawai secara random atau acak \n(Contoh Perintah : /neko)\n
/waifu = Untuk mencari gambar waifu secara random atau acak \n(Contoh Perintah : /waifu)\n
/wallpaper = Untuk mencari gambar wallpaper kece secara random atau acak \n(Contoh Perintah : /wallpaper)\n
/animedl = Untuk mencari link download anime dengan berbagai resolusi \n(Contoh Perintah : /animedl death note < Sama dengan /animedl2)\n
/pasangan = Untuk mengukur dan mencari sisi positif/negatif kamu dengan pasanganmu \n(Contoh Perintah : /pasangan udin aurel)\n
/translate = Untuk menerjemahkan dari bahasa inggris ke bahasa indonesia\n(Contoh Perintah : /translate you so beautiful)\n
/terjemahan = Untuk menerjemahkan dari bahasa indonesia ke bahasa inggris\n(Contoh Perintah : /terjemahan kamu sangat cantik)\n
/rangkum = Untuk merangkum teks atau memperpendek teks, \n(Contoh Perintah : /rangkum Penelitian tentang sejarah terbatas pada penelitian...........dst)\n
/qrcode = Untuk merubah teks atau link yang kamu tulis menjadi sebuah kode QR \n(Contoh Perintah : /qrcode https://google.com)\n
/filmtrend = Untuk melihat film trending di minggu ini \n(Contoh Perintah : /filmtrend)\n
/filmdetail = Untuk melihat detail filmtrend lebih lengkap \n(Contoh Perintah : /filmdetail 1)\n
/slots = Untuk bermain game slots casino \n(Contoh Perintah : /slots)\n
/cewecans = Untuk gacha gambar ciwi ciwi cantik :v \n(Contoh Perintah : /cewecans)\n
/saran = Untuk mengirim saran ke dev (@Elmriakrmva) lewat bot! \n(Contoh Perintah : /saran Bang saran tambahin fitur Ngecit)\n

===[Sosmed Downloader]===\n
/donasi = DONASI LAH TOD
/ytmp4 = Untuk mendownload video dari youtube berformat mp4 \n(Contoh Perintah : /ytmp4 https://youtu.be/dQw4w9WgXcQ)\n
/ytmp3 = Untuk mendownload video dari youtube berformat mp4 \n(Contoh Perintah : /ytmp3 https://youtu.be/dQw4w9WgXcQ)\n
/tiktokdl = Untuk mendownload video dari tiktok tanpa watermark \n(Contoh Perintah : /tiktokdl https://www.tiktok.com/@mrhecka/video/6888202589897248001)\n
/fbdl = Untuk mendownload video dari facebook \n(Contoh Perintah : /fbdl https://www.facebook.com/tahilalats/videos/438923400430514)\n
/twtdl = Untuk mendownload video dari twitter \n(Contoh : /twtdl https://twitter.com/i/status/1338407494339624962)\n
/igdl = Untuk mendownload video dan foto di instagram \n(Contoh : /igdl https://www.instagram.com/p/CJGXxSinuld/)\n
/igtv = Untuk mendownload video igtv di instagram \n(Contoh : /igtv https://www.instagram.com/p/CBgc_ZJlVUN/)\n
/igstory = Untuk mendownload video ig story di instagram sesuai angka urutan yang diinput \n(Contoh : /igstory 3 anone14_)\n
/igavatar = Untuk mendownload avatar profil di instagram \n(Contoh : /igavatar anone14_)\n
=====================\n
Nantikan fitur-fitur unik Alia lainnya, stay tuned terus ya 🦾🤖\n
_______________
`)

})

bot.on(['/donasi'], async (msg) => {
return bot.sendMessage
(msg.chat.id, 
`
=====[🤖DONASI😁😀️]=====\n

> info Total Donasi : 1%😭
> Info Sosial Media :
> Instagram : https://www.instagram.com/wbot14/
> Youtube : https://youtube.com/channel/UCV3BPHLtmhb0MZjbX4FpUWA
> Support BOT ALIA Yak Dengan Cara Donasi :
> Saweria => https://saweria.co/DinoBot
> Pulsa => 085892910131 
> Dana => 085892910131
> Indosat => 085892910131
> Atau Join channel Bot ^_^ : @botDarkmagic
> Join Group telegram Bot Dong ^_^ : https://t.me/joinchat/HdqvW5CGoMUXlT_4

> BOT Alia Dibuat Oleh :
> @Elmriakrmva\n
================
`)
})

bot.on(['/about'], async (msg) => {
return bot.sendMessage
(msg.chat.id, 
`
=====[🤖Tentang ℹ️]=====\n
> Tolong bot nya jangan di spam😣
> Tolongnya Botnya Jangan di Remake😢😭
> Cintai bot nya seperti kamu mencintai dia🤗
> Semua perintah yang membutuhkan teks tidak perlu menggunakan tanda kurung kotak => [ ]👈
> Masih bingung dengan fitur Alia🤨? gunakan perintah /readme
> Bot masih dalam tahap pengembangan🔧
> Terima kasih sudah menggunakan Bot Alia😍

> Beritahu pembuat bot jika saya mati atau jika kamu menemukan bug dan perintah yang malfungsi => @Elmriakrmva (Atau lapor menggunakan /saran [text])

> Info Sosial Media :
> Youtube : https://youtube.com/channel/UCV3BPHLtmhb0MZjbX4FpUWA
> Instagram : https://www.instagram.com/wbot14/
> Support BOT ALIA Dengan Cara Donasi :
> Join Group telegram Bot Dong ^_^ : https://t.me/joinchat/HdqvW5CGoMUXlT_4
> Atau Join channel Bot ^_^ : @botDarkmagic
> https://saweria.co/DinoBot
> Pulsa => 085892910131
> Indosat => 085892910131
> Dana => 085892910131

> BOT Alia Dibuat Oleh :
> @Elmriakrmva\n
================
`)
})

bot.on('/play', async (msg) => {
        const arg = msg.text
    const args = arg.trim().split(/ +/).slice(1)
    if (!args.join(' ')) return msg.reply.text('USAGE : <code>/play [judul]</code>', { parseMode: 'html',replyToMessage: msg.message_id})
        let query = args.join(' ')
        let ytdl = require('ytdl-core')
        let yts = require('yt-search')
        let fs = require('fs')
        let results = await yts(query)
  let vid = results.all.find(video => video.seconds < 3600)
      let url = vid.url
        if(ytdl.validateURL(url)){
      audio_file = await './ytdl/' + 'audio' + ytdl.getURLVideoID(url) + '.mp3';
      await msg.reply.text("Sedang mendownload...sabar ngab...");
      await ytdl(url, {quality: "highestaudio", filter: "audioonly"})
       .on('info', async (info) => {
       judul = await info.videoDetails.title
       console.log(info)
       })
        .pipe(fs.createWriteStream(audio_file).on('finish', async ()=>{
          await msg.reply.text("Sedang mengirim...");
          await bot.sendAudio(msg.chat.id, audio_file, {replyToMessage:msg.message_id, fileName: judul+'.mp3'}).then(async ()=>{
            await fs.unlinkSync(audio_file);
          });
        }));
    }else{
      await msg.reply.text("Error Kak Mungkin Apikey Expied:( | Video tidak ditemukan kak...");
    }
    })


// require disini!

require('./nulis.js')(bot)
require('./nulis2.js')(bot)
require('./nulis3.js')(bot)
require('./megumin.js')(bot)
require('./neko.js')(bot)
require('./waifu.js')(bot)
require('./anime.js')(bot)
require('./ytmp4.js')(bot)
require('./ytmp3.js')(bot)
require('./cekresi.js')(bot)
require('./brainly.js')(bot)
require('./lirik.js')(bot)
require('./tiktokdl.js')(bot)
require('./wallpaper.js')(bot)
require('./animedl.js')(bot)
require('./animedl2.js')(bot)
require('./pasangan.js')(bot)
require('./fbdl.js')(bot)
require('./translate.js')(bot)
require('./terjemahan.js')(bot)
require('./rangkum.js')(bot)
require('./twtdl.js')(bot)
require('./qrcode.js')(bot)
require('./slots.js')(bot)
require('./filmtrend.js')(bot)
require('./filmtrenddetail.js')(bot)
require('./cewecans.js')(bot)
require('./igdl.js')(bot)
require('./igtv.js')(bot)
require('./igstory.js')(bot)
require('./igavatar.js')(bot)
require('./tts.js')(bot)
require('./saran.js')(bot)
require('./monitoring.js')(bot)
require('./logs.js')(bot)
require('./tahta.js')(bot)
require('./sendprivate.js')(bot)
require('./shortlink.js')(bot)
require('./barcode.js')(bot)
require('./ttp.js')(bot)
require('./pinterest.js')(bot)
require('./speed.js')(bot)
require('./quotes.js')(bot)
require('./tod.js')(bot)
require('./exec.js')(bot)
require('./eval.js')(bot)
// require disini!




bot.start()






