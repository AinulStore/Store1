let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*SAUSAGE MAN :*
𖤘 🍬 60 Candy : Rp 13.000
𖤘 🍬 120 Candy : Rp 26.000
𖤘 🍬 180 Candy : Rp 42.500
𖤘 🍬 316 Candy : Rp 65.500
𖤘 🍬 718 Candy : Rp 131.000
𖤘 🍬 1368 Candy : Rp 262.500
𖤘 🍬 2118 Candy : Rp 402.000
𖤘 🍬 3548 Candy : Rp 656.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'SAUSAGE MAN'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['sau']
handler.tags = ['topup']
handler.command = /^(sau)$/i

export default handler
