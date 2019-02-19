const config = require('./config')
const { Models, Model } = require('lucid-mongo')(config)
const { validate } = require('indicative')

/* issue with hooks https://github.com/duyluonglc/lucid-mongo/issues/115 */
const { resolver } = require("lucid-mongo/lib/iocResolver");

resolver.forDir = () => ({
  resolveFunc: handler => {
    if ('string' === (typeof handler)) {
       throw new Error('References handlers aren\'t supported in stand-alone mode');
    } else if ('function' !== (typeof handler)) {
       throw new Error('Invalid handler passed');
    }

    return {method: handler};
  }
});
/* end issue hooks */


const UserGroup = require('./UserGroup.js')

class User extends Model {

  static get rules () {
    return {
      email: 'email'
    }
  }


  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {

      // throw new Error('whatever.')
    })
  }

  // associations:
  async userGroups() {
    return await UserGroup.where('users', this._id).fetch()
  }
}

Models.add('App/Model/User', User)

module.exports = User
