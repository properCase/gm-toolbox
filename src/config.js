let config = {
  environment: 'DEV',
  DEV: {
    ws: {
      protocol: 'http',
      url: 'localhost:3100'
    }
  }
}

config.ws = config[config.environment].ws

module.exports = config
