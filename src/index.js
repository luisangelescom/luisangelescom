
import { readFileSync, writeFileSync } from 'fs'

const file = './src/template.md.md'
const insertToFile = 'README.md'

let data = readFileSync(file, { encoding: 'utf-8' })

let date = new Date()
date = date.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })

data = data.replace('%{{chance-date}}%', date)

writeFileSync(insertToFile, data)

// let dataFile = await fs.readFile(file, { encoding: 'utf-8' })

// dataFile = dataFile.replace('%{{chance-date}}%', 'Esto es lo que va a insertar el cron chavo')
// console.log(dataFile)

// await fs.writeFile(insertToFile, dataFile)
