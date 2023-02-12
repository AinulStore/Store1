let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*Voucher Stumble Guys:*
𖤘 🟢 250 Gems : Rp 14.000
𖤘 🟢 800 Gems : Rp 36.500
𖤘 🟢 1600 Gems + 🟣 75 Token : Rp 63.500
𖤘 🟢 5000 Gems + 🟣 275 Token : Rp 143.000
𖤘 🟣 120 Token : Rp 43.500
𖤘 🟣 1300 Token : Rp 361.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'STUMBLE GUYS'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['guy']
handler.tags = ['topup']
handler.command = /^(guy)$/i

export default handler
