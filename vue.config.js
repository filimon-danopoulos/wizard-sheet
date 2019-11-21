module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: process.env.NODE_ENV === 'production' ? 'wizard-sheet' : '/',
  pwa: {
    name: 'Wizard Sheet',
    themeColor: '#1976d2'
  }
}
