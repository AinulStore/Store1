import moment from 'moment-timezone'

const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")

let handler = async (m, { conn, usedPrefix, command }) => {
let pross = m.quoted 
if (!m.quoted) throw 'Reply Pesanya'
let usr = m.quoted.sender
conn.reply(m.chat, `ć *TRANSAKSI PENDING* ć\n\n\`\`\`š TANGGAL : ${tanggal}\nā JAM     : ${jam}\nāØ STATUS  : Pending\`\`\`\n\nš Catatan : ${m.quoted.text}\n\nPesanan @${usr.split("@")[0]} sedang di proses!`, m, { mentions: [m.quoted.sender] })
} 
handler.customPrefix = /^(p|proses)$/i
handler.command = new RegExp

handler.group = true 
handler.admin = true 

export default handler