let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let ss = '2'
let sh = '5'
let sn = '15'
let ssn = '10'
//premium
let ph = '5'
let pn = '20'
let ppn = '25'
let pp = '40'
let pv = '50'
let ppm = '10'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Mingguan:* _${ssn}k/grup_
┊⫹⫺ *Bulanan:* _${ppn}k/grup_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Mingguan:* _${ss}k/user_
┊⫹⫺ *Bulanan:* _${ppm}k/user_
┊⫹⫺ *Permanent:* _${pn}k/user_
╰═┅═━––––––๑

╭━━━━「 *SCRIPT* 」
┊⫹⫺ *Enc:* _${sn}k_
┊⫹⫺ *No Enc:* _${pp}k_                      
┊⫹⫺ *Run Bot:* = _${ppm}k/Minggu_
┊⫹⫺ *Murid Bot:* = _${ppm}k_
╰═┅═━––––––๑
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 MINGGUAN", rowId: '.order *Paket:* Sewa => Mingguan', description: '𝗣𝗿𝗶𝗰𝗲: ' + ssn + 'k (1 minggu)' },
	    {title: "🔖 BULANAN", rowId: '.order *Paket:* Sewa => Bulanan', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppn + 'k (1 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 MINGGUAN", rowId: '.order *Paket:* Premium => Mingguan', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (1 minggu)' },
	    {title: "🌟 BULANAN", rowId: '.order *Paket:* Premium => Bulanan', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* Premium => Permanent', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (Permanent)' },
	]
    }, {
    title: `${htjava} SCRIPT ✦-------`,
	rows: [
	    {title: "📁 ENC", rowId: '.order *Paket:* Script => Enc', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k' },
	    {title: "📁 NO ENC", rowId: '.order *Paket:* Script => No Enc', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k' },
	{title: "📁 RUN BOT", rowId: '.order *Paket:* Run Bot => Mingguan', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (1Minggu)' },
	{title: "📁 MURID BOT", rowId: '.order *Paket:* Murid Bot', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium|jadibot)$/i

export default handler