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
const Component = require('./Component')

class Project extends Model {
  // associations:
  components() {
    return Component.where('project', this._id)
  }
}

Models.add('App/Model/Project', Project)

module.exports = Project
