const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6283160327945'] //ur owner number
global.ownername = "🔰 OHLX DEV" //ur owner name
global.ytname = "YT: OHLX BOT" //ur yt chanel name
global.socialm = "GitHub" //ur github or insta name
global.location = "Indo,Kalse,Private" //ur location

//bot bomdy 
global.owner = ['6283160327945'] //ur number
global.ownernomer = "6283160327945" //ur number
global.ownertag = '6283160327945' //ur tag number
global.botname = 'OHLX BOT 〚 🔰 〛' //ur bot name
global.ownername = "OHLX DEV 〚 🔰 〛 "
global.linkz = "https://youtube.com/channel/UCI0e4GqmeLZhy8KE8c9JPsw" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UCI0e4GqmeLZhy8KE8c9JPsw" //ur website to be displayed
global.botscript = 'https://youtube.com/channel/UCI0e4GqmeLZhy8KE8c9JPsw' //script link
global.themeemoji = "🔰" //ur theme emoji
global.packname = "" //ur sticker watermark packname
global.author = "×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗢𝗛𝗟𝗫\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝗢𝗛𝗟𝗫 : 𝟲𝟮𝟴𝟯𝟭𝟲𝟬𝟯𝟮𝟳𝟵𝟰𝟱\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : 𝗢𝗛𝗟𝗫 𝗕𝗢𝗧\n⊟————————⊟" //ur sticker watermark author
global.wm = "𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗢𝗛𝗟𝗫" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Sukses✓',
    admin: 'Fitur Hanya Dapat Digunakan Oleh admin!',
    botAdmin: 'Bot harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Ini Hanya Dapat Digunakan Oleh Pengguna Premium',
    owner: 'Fitur ini hanya dapat di gunakan oleh owner/pemilik bot!',
    group: 'Fitur Di pakai untuk di Group!',
    private: 'Fitur Dapat digunakan di pribadi chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'sedang di proses...',
    linkm: 'mana link nya?',
    error: 'Error!!',
    endLimit: 'Limit Anda Sudah Habis, Silahkan Menunggu 12 Jam Limit Akan di Reset,\n\nAtau Anda Membeli Premium Limit Unlimited',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan hubungi admin untuk activate',
}
global.limitawal = {
    premium: "Unlimited",
    free: 25
}
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
