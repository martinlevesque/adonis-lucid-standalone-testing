const config = {
  connection: 'mongodb',
  mongodb: {
    client: 'mongodb',
    connection: {
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      database: 'pup'
    }
  }
}

const { Models, Model } = require('lucid-mongo')(config)

class Component extends Model {
  // associations:
  
}

Models.add('App/Model/Component', Component)

module.exports = Component
