const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        env: {
            connectionString: 'mongodb+srv://amank23:Abcd1234@devconnector.il55c.mongodb.net/next-blog?retryWrites=true&w=majority'
        }
    }
}

  return {
    env: {
        connectionString: 'mongodb+srv://amank23:abcd1234@cluster0.uucc3.mongodb.net/next-blog?retryWrites=true&w=majority'
    }
  }
}