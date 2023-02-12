import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let zeen = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(zeen)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ MY SELF:*
https://github.com/AinulStore
*❉ ARIF:*
https://github.com/ArifXzy
*▸ - - - —「 Penulis Ulang 」— - - - ◂*
*❉ Ainul:*
https://github.com/AinulStore
*▸ - - - —「 Thanks For Help Me 」— - - - ◂*
*❉ MY SELF*
*❉ ARIF*

`
conn.sendButtonDoc(m.chat, tqto, wm, 'ᴛʜᴀɴᴋ ʏᴏᴜ', 'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: global.sig,
    mediaType: "VIDEO",
    description: global.sig, 
    title: wm3,
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
