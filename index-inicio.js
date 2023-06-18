console.log('☑️ㅤIniciando bot...')
import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('DARK-BOT', {
font: 'tiny',
align: 'center',
colors: ['#ff8000']})
say(`carlos-ofc`, {
font: 'console',
align: 'center',
colors: ['red']})

var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]


  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
let rep;
p.on('message', data => {
console.log('╔══════════════════════════════════════════╗')
console.log('    ════════════‼️BOT ACTIVO‼️ ════════════')
console.log("🟡 COMANDO :" , data ,' <== DENEGADO' )
console.log('⚠️ PRESIONA CTRL + Z para APAGAR el bot ⚠️')
console.log("⚠️ PARA INICIAR EL BOT ESCRIBE > npm start" );
console.log('    ════════════♦️𝕯𐊅ℜ𝖐-𝕭𝖔𝖙⍉ꤲ♦️═════════════')
console.log('╚══════════════════════════════════════════╝')
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ㅤOcurrio un error Por favor arreglarlo:', code)
  
p.process.kill()
isRunning = false
start.apply(this, arguments)
  
if (process.env.pm_id) {
process.exit(1)
} else {
process.send ('reset')
}
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}
start('main.js')
