import moment from 'moment-timezone'

let jam = moment.tz ('asia/jakarta').format('HH:mm:ss')
let tanggal = moment.tz("asia/jakarta").format("ll") 
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    "documentMessage": {
                    "title": `${ucapan()} @${m.sender.split("@")[0]}`, 
                    "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
const teks = `
<- - - - -[ *BIODATA OWNER* ]- - - - -> 
⫹⫺ 💌 *Nama* : *𝔄𝔦𝔫𝔲𝔩*
⫹⫺ 🎨 *Umur* : 15 𝚃𝚊𝚑𝚞𝚗
⫹⫺ ♂️ *Gender* : 𝙿𝚛𝚒𝚊
⫹⫺ 🕉️ *Agama* : 𝙿𝚛𝚒𝚟𝚊𝚝𝚎
⫹⫺ ⌚ *Tanggal Lahir* : 𝙿𝚛𝚒𝚟𝚊𝚝𝚎
⫹⫺ 🧮 *Kelas* : 9
⫹⫺ 🐾 *Hobby* : 𝙱𝚎𝚛𝚗𝚊𝚏𝚊𝚜
⫹⫺ 💬 *Sifat* : 𝙳𝚒𝚗𝚐𝚒𝚗 🥶
⫹⫺ 🗺️ *Tinggal* : 𝙸𝚗𝚍𝚘 => 𝙺𝚊𝚕𝚒𝚖𝚊𝚗𝚝𝚊𝚗 𝚂𝚎𝚕𝚊𝚝𝚊𝚗 => 𝙱𝚊𝚗𝚓𝚊𝚛𝚖𝚊𝚜𝚒𝚗
`
conn.sendMessage(m.chat,{ text: teks }, { quoted: anu })
}



handler.help = ['obio']

handler.tags = ['info']

handler.command = /^obio$/i
handler.owner = false
handler.mods = false
handler.premium = false

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Selamat Pagi "
  }
  if (time >= 10) {
    res = "Selamat Siang "
  }
  if (time >= 15) {
    res = "Selamat Sore "
  }
  if (time >= 18) {
    res = "Selamat Malam "
  }
  return res
}