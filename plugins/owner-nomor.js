import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `๐ Pemilik Bot `, `Cuma Anak Kecil`, `pusattopup@gmail.com`, `๐ฐ๐ท South Korean`, `๐ https://chat.whatsapp.com/GIf2uwfRu6i2qsjhM2AjSH`, `๐ค แดแดกษดแดส Ainul Store`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ Bot WhatsApp`, `๐ต Jangan Spam/Telpon Saya`, `Nothing`, `๐ฐ๐ท South Korean `, `๐ https://chat.whatsapp.com/GIf2uwfRu6i2qsjhM2AjSH`, `Hanya Bot Biasa โบ`]
  ], fkontak)
  await m.reply(`Halo *@${m.sender.split(`@`)[0]}* _Itu Nomor Owner Aku Kak Jangan Di Spam Ya_`)
  } 
handler.help = ['onumber']
handler.tags = ['info']

handler.command = /^(onumber)$/i

export default handler
