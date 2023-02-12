let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*FREE FIRE :*
𖤘 💎 140 : Rp 18.000
𖤘 💎 150 : Rp 20.000
𖤘 💎 190 : Rp 25.000
𖤘 💎 200 : Rp 27.000
𖤘 💎 210 : Rp 28.000
𖤘 💎 280 : Rp 36.000
𖤘 💎 355 : Rp 45.000
𖤘 💎 400 : Rp 51.000
𖤘 💎 425 : Rp 54.000
𖤘 💎 500 : Rp 64.000
𖤘 💎 565 : Rp 72.000
𖤘 💎 720 : Rp 89.000
𖤘 💎 1000 : Rp 125.000
𖤘 💎 1450 : Rp 180.000
𖤘 💎 2000 : Rp 244.000

*Member Mingguan :* Rp 28.000
*Member Bulanan :* Rp 82.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.ownet', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'FREE FIRE'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['ff']
handler.tags = ['topup']
handler.command = /^(ff)$/i

export default handler
