const { register } = require('node:module')
const { pathToFileURL } = require('node:url')

const entryPath = process.argv[1]

if (!register) {
  return
}

if (process.versions.electron) {
  // We don't really have a reason to register 
  // `ts-node/esm` in Electron apps.
  return
}

if (
  entryPath.endsWith('.js') || 
  entryPath.endsWith('.cjs') || 
  entryPath.endsWith('.mjs')
) {
  return
}

try {
  register('ts-node/esm', pathToFileURL(entryPath))
} catch(error) {
  // Don't register the loader when it doesn't exist
}