const User = require('./User.js')
const Project = require('./Project.js')
const UserGroup = require('./UserGroup.js')

// index.js
async function test () {
  const user = await User.where({ firstName: 'PUPtest002' }).first()
  console.log(`user is ${user._id}`)

  console.log('user groups = ')
  const ugroups = await user.userGroups()
  console.log(ugroups.toJSON())

  const project = await Project.where({ _id: '57309c348e1065ed2feb659b' }).first()

  console.log('project ', project.name)

  const components = await project.components().select('name', '_id').fetch()
  console.log('components -> ')
  console.log(components.toJSON())

  await User.create({ email: 'what' })
}

try {
  test()
} catch(err) {
  console.log(err)
}
