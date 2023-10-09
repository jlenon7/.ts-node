const { readFileSync } = require('node:fs')

let pjson = null

try {
  const buffer = readFileSync(`${process.cwd()}/package.json`)

  pjson = JSON.parse(buffer.toString())
} catch(error) {
  return null
}

module.exports = pjson
