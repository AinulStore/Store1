const { generateWAMessageFromContent } =(await import('@adiwajshing/baileys')).default

var handler  = async (m, 
             { conn, 
                usedPrefix: _p }) => {

var info = `Yes, Aku Disini`

const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 0,
  degreesLongitude: 0,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 0,
  caption: info,
  sequenceNumber: 0,
  timeOffset: 8600,
  jpegThumbnail: await getBuffer(global.img), 
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: fakes })
return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })
}
handler.customPrefix = /^(tes|tess|halo||hola|holaa|bot|bot?|bott)$/i
handler.command = new RegExp
export default handler
