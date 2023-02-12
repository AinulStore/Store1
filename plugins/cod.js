let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*COD :*
𖤘 🏵️ 26+6 CP : Rp 5.000
𖤘 🏵️ 53+9 CP : Rp 10.000
𖤘 🏵️ 106+21 CP : Rp 20.000
𖤘 🏵️ 264+56 CP : Rp 49.500
𖤘 🏵️ 528+116 CP : Rp 99.000
𖤘 🏵️ 1056+317 CP : Rp 197.500
𖤘 🏵️ 1584+475 CP : Rp 296.000
𖤘 🏵️ 2640+924 CP : Rp 493.500
𖤘 🏵️ 5280+2376 CP : Rp 986.500
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.val', buttonText: {displayText: 'VALORANT'}, type: 1},
  {buttonId: '.pb', buttonText: {displayText: 'POINT BLACK'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'COD'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['cod']
handler.tags = ['topup']
handler.command = /^(cod)$/i

export default handler
