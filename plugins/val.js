let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*VALORANT :*
𖤘 🪙 300 Point : Rp 31.000
𖤘 🪙 625 Point : Rp 62.000
𖤘 🪙 1125 Point : Rp 108.000
𖤘 🪙 1250 Point : Rp 125.500
𖤘 🪙 1650 Point : Rp 157.000
𖤘 🪙 2275 Point : Rp 216.000
𖤘 🪙 3400 Point : Rp 314.000
𖤘 🪙 4525 Point : Rp 423.000
𖤘 🪙 5050 Point : Rp 470.000
𖤘 🪙 7000 Point : Rp 627.000
𖤘 🪙 8650 Point : Rp 783.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'VALORANT'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['val']
handler.tags = ['topup']
handler.command = /^(val)$/i

export default handler
