import fetch from 'node-fetch'
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
${pickRandom(global.komu)}
`
     const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: '─────〔 𝙶𝚁𝙾𝚄𝙿 𝚂𝚃𝙾𝚁𝙴 〕─────', mimetype: dpdf, fileLength: fsizedoc, pageCount: fpagedoc,
            caption: anu,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
}
handler.help = ['komu']
handler.tags = ['main']
handler.command = /^(komu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.komu = [
'Silahkan Tekan Tombol Di Bawah👇',
]