import moment from 'moment-timezone'

let handler = async (m, { conn, text, usedPredfix, command}) => {  
let jam = moment.tz ('asia/jakarta').format('HH:mm:ss')
let tanggal = moment.tz("asia/jakarta").format("ll") 
let grup = await conn.groupMetadata(m.chat)
let groupName = grup.subject
const sections = [
   {
	title: `➳ LIST TOPUP`,
	rows: [
	    {title: "PAYMENT", rowId: '.bayar', description: `╰► Menampilkan List PAYMENT` },
	    {title: "MLBB", rowId: '.ml', description: `╰► Menampilkan List MLBB` },
	    {title: "FREE FIRE", rowId: '.ff', description: `╰► Menampilkan List FREE FIRE` },
	    {title: " PUBG", rowId: '.pubg', description: `╰► Menampilkan List PUBG` },
	    {title: "COD", rowId: '.cod', description: `╰► Menampilkan List COD` },
	    {title: "GENSHIN IMPACT", rowId: '.gen', description: `╰► Menampilkan List GENSHIN IMPACT` },
	    {title: " SAUSAGE MAN", rowId: '.sau', description: `╰► Menampilkan List  SAUSAGE MAN` }, 
	    {title: "POINT BLANK", rowId: '.pb', description: `╰► Menampilkan List POINT BLANK` }, 
	    {title: "VALORANT", rowId: '.val', description: `╰► Menampilkan List VALORANT` },
	    {title: "STUMBLE GUY", rowId: '.guy', description: `╰► Menampilkan List STUMBLE GUYS` },
	    {title: "ROBLOX", rowId: '.lox', description: `╰► Menampilkan List ROBLOX` },
	     ]
	     },
]

const listMessage = {
  text: `*${ucapan()} @${m.sender.split("@")[0]}*\nSilahkan Pilih Produknya Kak`,
  footer: `*📝List : ${groupName}*\n\n⌚ Jam : ${jam}\n📆 Tanggal : ${tanggal}`,
  mentions: [m.sender],
  title: null,
  buttonText: "Click Here︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
}
handler.help = ['list','topup']
handler.tags = ['main']
handler.command = /^(list|topup)$/i

handler.group = true

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