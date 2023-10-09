const { register } = require('node:module')
const { pathToFileURL } = require('node:url')

module.exports = {
  register: (parentURL) => {
    try {
      /**
       * Node.js version is under v20.x.
       */
      if (!register) {
        return
      }
    
      register('ts-node/esm', pathToFileURL(parentURL))
    } catch(error) {
      // Don't register the loader when it doesn't exist
    }
  },
}
