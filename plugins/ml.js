let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*MLBB ➳ A :*
𖤘 💎 86  : Rp 20.000
𖤘 💎 172 : Rp 39.000
𖤘 💎 257 : Rp 58.000
𖤘 💎 344 : Rp 78.000
𖤘 💎 429 : Rp 97.000
𖤘 💎 514 : Rp 116.500
𖤘 💎 600 : Rp 136.000
𖤘 💎 706 : Rp 155.000
𖤘 💎 878 : Rp 194.000
𖤘 💎 1050 : Rp 233.000
𖤘 💎 1220 : Rp 171.500
𖤘 💎 1412 : Rp 310.000
𖤘 💎 2195 : Rp 466.000
𖤘 💎 2901 : Rp 621.500
𖤘 💎 3688 : Rp 777.000
𖤘 💎 5532 : Rp 1.170.000
𖤘 💎 9288 : Rp 1.941.000

*MLBB ➳ B :*
𖤘 💎 14  : Rp 4.000
𖤘 💎 28  : Rp 8.000
𖤘 💎 42 : Rp 11.000
𖤘 💎 56  : Rp 15.000
𖤘 💎 70  : Rp 18.000
𖤘 💎 84 : Rp 22.000
𖤘 💎 100 : Rp 23.000
𖤘 💎 285 : Rp 69.000
𖤘 💎 358 : Rp 86.000
𖤘 💎 415 : Rp 109.000
𖤘 💎 716 : Rp 182.000
𖤘 💎 792 : Rp 184.000
𖤘 💎 990 : Rp 236.000
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'MLBB'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['ml']
handler.tags = ['topup']
handler.command = /^(ml)$/i

export default handler
