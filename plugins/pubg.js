let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*PUBG ➳ INDO :*
💵 25 UC : Rp 5.000
💵 73 UC : Rp 13.500
💵 131 UC : Rp 24.000
💵 221 UC : Rp 39.500
💵 263 UC : Rp 45.000
💵 770 UC : Rp 130.500
💵 788 UC : Rp 135.000
💵 1050 UC : Rp 180.000
💵 1375 UC : Rp 225.000
💵 1638 UC : Rp 270.000
💵 1900 UC : Rp 315.000
💵 2163 UC : Rp 360.000
💵 2425 UC : Rp 405.000
💵 2875 UC : Rp 450.000
💵 3138 UC : Rp 495.000
💵 3400 UC : Rp 539.500
💵 4250 UC : Rp 475.000
💵 5038 UC : Rp 810.000
💵 6000 UC : Rp 899.000
💵 7050 UC : Rp 1.080.000
💵 7575 UC : Rp 1.170.000
💵 9375 UC : Rp 1.348.500

*PUBG ➳ GLOBAL :*
💵 60 UC : Rp 19.000
💵 325 UC : Rp 71.500
💵 1800 UC : Rp 333.000
💵 3950 UC : Rp 665.500
💵 8100 UC : Rp 1.328.500
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'PUBG'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['pubg']
handler.tags = ['topup']
handler.command = /^(pubg)$/i

export default handler
