const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.gopayno = "0858-5268-8728"
global.danano = "0838-7534-4881"
global.shopeepayno = "-"
global.creator = "6285852688728@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `📍𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 fathon 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑`
global.packname = ``
global.author = `×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 Ftn_47\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 Ftn_47 : 6285852688728\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 : FathoniOfc\n⊟————————⊟`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.ownerNomor = '6285852688728'
global.ownerName = 'Ftn_47'
global.ownerNumber = ["6285852688728@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Loading...',
    succes: '✓ Success',
    admin: 'Sayangnya Anda Bukan admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    error: 'Error cuy, Hubungi Owner wa.me/6285852688728',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

global.bapak = [
'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID',
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})