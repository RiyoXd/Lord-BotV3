let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *OVO* : _082119800783_
║┊ ⌲ *DANA* : _081223918622_
║┊ ⌲ *GOPAY* : _082119800783_
║┊ ⌲ *ShoopePay* : _085861934157_
║┊ ⌲ *Telkomsel* : _082129353366_
║┊ ⌲ *Telkomsel* : _082119800783_
║┊ ⌲ *Telkomsel* : _081223918622_
║┊ ⌲ *Indosat* : _085861934157_
╰═ ┅ ═══════
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Payment')).buffer(), ext, `${wm}`, 'Nomor Owner', '.nowner', 'Buy Premium', '.premium', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
