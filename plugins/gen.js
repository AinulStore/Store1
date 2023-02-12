let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*GENSHIN IMPACT :*
🔮 60 Crystal  = Rp.13.000
🔮 330 Crystal = Rp.62.500
🔮 1090 Crystal = Rp.189.000
🔮 2240 Crystal = Rp.402.000
🔮 3880 Crystal = Rp.633.500
🎟️ *Blessing Of The Welkin Moon* : Rp64.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'GENSHIN IMPACT'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['gen']
handler.tags = ['topup']
handler.command = /^(gen)$/i

export default handler
