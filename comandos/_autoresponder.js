import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen4, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'DARK-BOT-OFC', body:'𝕮𝖆𝖗𝖑𝖔𝖘-𝖔𝖋𝖈', sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`, thumbnail: imagen1}}})}
    
return !0 }
export default handler
