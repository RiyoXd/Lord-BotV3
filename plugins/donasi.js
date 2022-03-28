let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6282119800783
│┝‷✧ *Dana:* 6281223918622
│┝‷✧ *ShoopePay:* 6285861934157
│┝‷✧ *Gopay:* 6282119800783
│┝‷✧ *Ovo:* 6282119800783
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6281223918622?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
