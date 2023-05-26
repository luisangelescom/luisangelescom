
import { readFileSync, writeFileSync } from 'fs'

const file = './src/template.md.tpl'
const insertToFile = 'README.md'

let data = readFileSync(file, { encoding: 'utf-8' })

data = data.replace('%{{chance-date}}%', new Date())

writeFileSync(insertToFile, data)

// let dataFile = await fs.readFile(file, { encoding: 'utf-8' })

// dataFile = dataFile.replace('%{{chance-date}}%', 'Esto es lo que va a insertar el cron chavo')
// console.log(dataFile)

// await fs.writeFile(insertToFile, dataFile)