import UsersService from './services'

const actions = {
  async loadUsers (context, parameters=null) {
    // const users = ['A', 'B', 'C', 'D']
    const users = await UsersService.getUsers(parameters)
    if (users !== undefined) {
      console.log('Hola mundo')
      context.commit('SET_USERS', users)
    }
  }
}

export default actions
