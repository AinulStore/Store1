let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
 *PAYMENT*

*BANK*
•BCA
*VIRTUAL ACCOUNT*
•BRI VA
•MANDIRI VA
•BCA VA
•BNI VA
•PERMATA VA
*EMONEY*
•Dana
•ShopeePay
•LinkAja
•Qris ( ALL PAYMENT )
*Convenience Store*
•ALFAMART
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1},
]

const templateMessage = {
    image: {url: you + 'PAYMENT'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['bayar']
handler.tags = ['topup']
handler.command = /^(bayar)$/i

export default handler
