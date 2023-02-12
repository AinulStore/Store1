let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*SC NYA GA GRATIS BRO , KALO MINAT BELI SAMA OWNER*\nTekan Tombol Di Bawah Untuk Membeli Script Bot
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.premium', buttonText: {displayText: 'BUY'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'SCRIPT'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
