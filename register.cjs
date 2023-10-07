if (process.versions.electron) {
  return
}

const { register } = require('node:module')
const { pathToFileURL } = require('node:url')

/**
 * Set the entry as the file being executed or the 
 * current working directory of the project, in case
 * something like `node` or `node -e "console.log('hello world')"`
 * is being executed.
 */
const entryPath = process.argv[1] || process.cwd() + '/' 

/**
 * Node.js version is under v20.x.
 */
if (!register) {
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
