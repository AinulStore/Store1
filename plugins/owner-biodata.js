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
โซนโซบ ๐ *Nama* : *๐๐ฆ๐ซ๐ฒ๐ฉ*
โซนโซบ ๐จ *Umur* : 15 ๐๐๐๐๐
โซนโซบ โ๏ธ *Gender* : ๐ฟ๐๐๐
โซนโซบ ๐๏ธ *Agama* : ๐ฟ๐๐๐๐๐๐
โซนโซบ โ *Tanggal Lahir* : ๐ฟ๐๐๐๐๐๐
โซนโซบ ๐งฎ *Kelas* : 9
โซนโซบ ๐พ *Hobby* : ๐ฑ๐๐๐๐๐๐๐
โซนโซบ ๐ฌ *Sifat* : ๐ณ๐๐๐๐๐ ๐ฅถ
โซนโซบ ๐บ๏ธ *Tinggal* : ๐ธ๐๐๐ => ๐บ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ => ๐ฑ๐๐๐๐๐๐๐๐๐๐
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
  let res = "Kok Belum Tidur Kak? ๐ฅฑ"
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