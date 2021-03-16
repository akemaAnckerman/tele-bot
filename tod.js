const truth = [
 'menurut kamu crush kamu sekarang itu cocok gak sama kamu?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'telpon crush kamu, kalo ditanya bilang aja kepencet',
        'kalo kamu diputusin sama mantan,apa yang kamu lakuin?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'siapa yang sempet bikin lu kecewa?',
        'hal yang bikin kecewa?',
        'yang paling pendek menurut kamu tapi imut siapa?',
        'seberapa sayang kmu pada bumi?',
        'lagu yang akhir2 ini di denger?',
        'siapa nama artis yang pernah kamu bucinin diam-diam?',
        'tujuan yang lagi dipengen itu apa?',
        'punya berapa akun ig? sebutin smua',
        'kebiasaan terburuk lo pas di sekolah apa?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'apa ketakutan terbesar kamu?',
        'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget',
        'pernah nolak orang? alasannya kenapa?',
        'suka mabar(main bareng)sama siapa?',
        'Siapa yang paling mendekati tipe pasangan idealmu di sini',
        '(bgi yg muslim) pernah ga solat seharian?',
        'hal yang paling ditakutin?',
        'pernah jadi selingkuhan orang?',
        'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?',
        'suka sayur gak?',
        'hal yang bikin seneng pas lu lagi sedih apa?',
        'pernah gak nyuri uang nyokap atau bokap? Alesanya?',
        'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
        'siapa first love mu?',
        'apa ketakutan terbesar kamu?',
        'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)',
        'Pernah suka sama siapa aja? berapa lama?'
        ]
        const dare = [
 'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈🏼"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
]
console.log('tod.js aktif!');

const TeleBot = require('telebot');
const fs = require('fs')

const bot = new TeleBot({
    token: tokebot // ini gausah diubah!
})

module.exports = bot => {
    bot.on(['/dare'], async (msg, args) => {
                randomnix = dare[Math.floor(Math.random() * dare.length)]
        return await bot.sendMessage(msg.chat.id, randomnix, { replyToMessage: msg.message_id })
    })
    bot.on(['/truth'], async (msg, args) => {
     randomnix = truth[Math.floor(Math.random() * truth.length)]
     return await bot.sendMessage(msg.chat.id, randomnix, { replyToMessage: msg.message_id })
    })
}