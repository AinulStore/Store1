import moment from 'moment-timezone'

let handler = async (m, { conn, text, usedPredfix, command}) => {  
let jam = moment.tz ('asia/jakarta').format('HH:mm:ss')
let tanggal = moment.tz("asia/jakarta").format("ll") 
const sections = [
   {
	title: `➳ CREATOR`,
	rows: [
	    {title: "Nomor Ainul", rowId: '.onumber' },
	{title: "Bio Data Ainul", rowId: '.obio' },
	     ]
	     }, {
	title: `➳ GROUP`,
	rows: [
	    {title: " Group Store", rowId: '.komu' },
	    {title: " Group Bot", rowId: '.komu2' },
	     ]
	     }, {
	title : `➳ SOSIAL MEDIA`, 
	rows: [
	    {title: "Instagram", rowId: '.oig' }, 
	    {title: "TikTok", rowId: '.ott' },
         ]
         }, 
]

const listMessage = {
  text: `*${ucapan()} @${m.sender.split("@")[0]}*\n`,
  footer: `*⌚ Jam :* ${jam}\n*📆 Tanggal :* ${tanggal}`,
  mentions: [m.sender],
  title: null,
  buttonText: "Click Disini︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(creator|owner)$/i

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}