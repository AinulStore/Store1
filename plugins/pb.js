let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*POINT BLANK :*
𖤘 💰 1200 PB CASH : Rp 10.000
𖤘 💰 2400 PB CASH : Rp 19.500
𖤘 💰 6000 PB CASH : Rp 48.000
𖤘 💰 12000 PB CASH : Rp 96.000
𖤘 💰 24000 PB CASH : Rp 192.000
𖤘 💰 36000 PB CASH : Rp 288.000
𖤘 💰 6000 PB CASH : Rp 479.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'POINT BLANK'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['pb']
handler.tags = ['topup']
handler.command = /^(pb)$/i

export default handler
