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

class UserGroup extends Model {
  static get collection() {
    return 'usergroups'
  }
}

Models.add('App/Model/UserGroup', UserGroup)

module.exports = UserGroup
