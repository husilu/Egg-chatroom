module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + 'husilu'

  config.middleware = ['errorHandler']

  const userConfig = {}

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/chatroom',
      options: { useUnifiedTopology: true },
      // plugins: [createdPligun, [updatedPlugin, pluginOptions]]
    }
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.jwt = {
    secret: '64b923cc-3b37-4119-b5be-4619e82d12a8',
    expiresIn: '1d'
  }

  return {
    ...config,
    ...userConfig
  }
}