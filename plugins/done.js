import moment from 'moment-timezone'

const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")

let handler = async (m, { conn, usedPrefix, command }) => {
let pross = m.quoted 
if (!m.quoted) throw 'Reply Pesanya'
let usr = m.quoted.sender
conn.reply(m.chat, `「 *TRANSAKSI SUKSES* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : SUKSES✅\`\`\`\n\n📝 Catatan : ${m.quoted.text}\n\nPesanan @${usr.split("@")[0]} Sukses, Silahkan Cek!`, m, { mentions: [m.quoted.sender] })
} 
handler.customPrefix = /^(d|done)$/i
handler.command = new RegExp

handler.group = true 
handler.admin = true 

export default handler