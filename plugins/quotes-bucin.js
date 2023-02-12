import { bucin } from '@bochilteam/scraper'
import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let cin = await bucin()
let nth = '❲ *Bᴜᴄɪɴ* ❳'
conn.sendButtonDoc(m.chat, nth, '❏ ' + cin, 'Ainul Store', `.bucin`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
export default handler