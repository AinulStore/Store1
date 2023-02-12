let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*ROBLOX:*
𖤘 💵 10 USD : Rp 160.500
𖤘 💵 25 USD : Rp 401.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'ROBLOX'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['lox']
handler.tags = ['topup']
handler.command = /^(lox)$/i

export default handler
