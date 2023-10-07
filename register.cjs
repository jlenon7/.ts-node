const { register } = require('node:module')
const { pathToFileURL } = require('node:url')

const entryPath = process.argv[1]

if (
  !register || 
  process.versions.electron || 
  entryPath.endsWith('.js') || 
  entryPath.endsWith('.cjs') || 
  entryPath.endsWith('.mjs')
) {
  return
}

try {
  register('ts-node/esm', pathToFileURL(entryPath))
} catch(error) {
  /**/
}
