if (process.versions.electron) {
  return
}

/**
 * The entry path is the path to the file that 
 * is being executed. This path will be used
 * as parentURL for registration.
 */
let parentURL = process.argv[1] || process.cwd() + '/'

if (
  parentURL.endsWith('.js') || 
  parentURL.endsWith('.cjs') || 
  parentURL.endsWith('.mjs') ||
  parentURL.endsWith('npm')
) {
  return
}

const pjson = require('./get-pjson.cjs')

/**
 * If a package.json doesn't exist in the parent 
 * directory, then the parentURL needs to be set
 * to the current directory of `.ts-node`.
 * 
 * Without this, it would not be possible to
 * execute simple `.ts` scripts anywhere of
 * your machine.
 */
parentURL = pjson ? parentURL : __dirname + '/'

/**
 * Register the loader when using ESM, or
 * the programmatic ts-node API when using
 * CommonJS.
 */
if (pjson?.type === 'module') {
  require('./ts-node-esm.cjs').register(parentURL)
} else {
  require('ts-node').register({ cwd: parentURL })
}
