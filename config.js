import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

//Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 50374658464

//*──ׄ✰─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.owner = [
  ['14584886621', ' ꯭『 𝗖𝗿𝗲𝗮𝗱𝗼𝗿  ꯭', true],
  ['18293142989', 'Número 2', true],
  ['18290523631', 'Numero de antes', true],
  ['17869238054']
]

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.owner_lid = [
  [' 243349189566583', ' ꯭『 𝗖𝗿𝗲𝗮𝗱𝗼𝗿  ꯭ (LID)', true],
  ['149963665342644', 'Número 2 (LID)', true]
]

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['5215211111111'] 
global.prems = []

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '2.0.0'
global.languaje = 'Español'
global.nameqr = 'Yorozu Bot'
global.sessions = 'Session'
global.jadi = '     𝐘𝐨𝐫𝐨𝐳𝐮    Bot'
global.    𝐘ᴏʀᴏᴢᴜ    bts = true

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.packsticker = `⏤͟͞ू⃪  ̸̷͢Yorozu 𝐁𝐨𝐭𑁯ᰍ\n`
global.packname = `⏤͟͞ू⃪  ̸̷͢Yorozu 𝐁𝐨𝐭𑁯ᰍ`
global.author = `socket:\n✐ Yorozu\n\nStickers Desarrollados en      𝐘𝐨𝐫𝐨𝐳𝐮     Club`;
global.wm = '⏤͟͞ू⃪  ̸̷͢𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲      𝐘𝐨𝐫𝐨𝐳𝐮     Club';
global.titulowm = '⏤͟͞ू⃪Yorozu 𝐁𖹭t͟𑁯ᰍ';
global.igfg = '     𝐘𝐨𝐫𝐨𝐳𝐮     Club'
global.botname = 'Yorozu 𝐁𝐨𝐭 𝐌𝐃'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ      𝐘𝐨𝐫𝐨𝐳𝐮     Club'
global.textbot = 'Yoro :     𝐘ᴏʀᴏᴢᴜ     CLUB'
global.gt = '͟͞Yorozu𝐢';
global.namechannel = 'Yorozu 𝐂𝐡a͟𝐧n͟e͟𝐥𑁯'

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.moneda = '¥'



//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363402362088282@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─✰─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
