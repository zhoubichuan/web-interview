const { path } = require('../shared-utils')

module.exports = (options, context) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'client.js')
  ],

  globalUIComponents: 'BackToTop'
})
