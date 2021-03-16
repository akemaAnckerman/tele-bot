console.log('nulis4.js aktif!')

const { spawn, exec } = require('child_process')
const fs = require('fs')
const { stdout } = require('process')
const TeleBot = require('telebot')

const bot = new TeleBot({
    token: '1641377462:AAGSvkVHwpxy-dcE2ikDbR5pFapsOY8ZAXA'

})

module.exports = bot => {
    bot.on(/^\/ttp ([\s\S]+)/, async (msg, args) => {
    let tulisan = await args.match[1].trim()
    await bot.sendMessage(msg.from.id, `Sabar ngab lagi nulis....`)
    const splitText = await tulisan.replace(/(\S+\s*){1,8}/g, '$&\n')
    const fixHeight = await splitText.split('\n').slice(0, 31).join('\n')
    await 		spawn('convert', [
	                	'./gambar/bg.png',
                		'-gravity',
             	 	    'Center',
	                	'-fill',
	                	'#ff9900',
		                '-font',
		                './nulis/Indie-Flower.ttf',
	    	            '-size',
	        	        '1280x1280',
	            	    '-pointsize',
                		'200',
		                '-interline-spacing',
	    	            '-7.5',	
	        	        '-annotate',
	            	    '+344+142',
   	    	         	fixHeight,
    	            	'./ttp.png'
            		])
    .on('error', async () => bot.sendMessage(msg.from.id, 'Error ngab, tolong hubungi dev @MrHecka!'))
    .on('exit', async () => {
    await bot.sendPhoto(msg.from.id, `./ttp.png`, { caption: 'Sukses😎✍️' })
    return await fs.unlinkSync(`./ttp.png`)
        })

    })
    
} 




