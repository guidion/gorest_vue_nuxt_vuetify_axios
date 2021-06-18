import axios from 'axios'
import { UserModel } from './models'

export default class UsersService {

  static async getUsers(parameters=null) {
    let url = 'https://gorest.co.in/public-api/users'
    // let token = localStorage.getItem('token')
    let token = ''
    if (parameters !== null) {
      const _parameters = []
      for (const parameter of parameters) {
        const _parameter = parameter.key + '=' + parameter.value
        _parameters.push(_parameter)
      }
      url += '?' + _parameters.join('&')
    }
    let users = undefined
    const response = await axios.get(url, {
      headers: {
          'Authorization': 'Bearer ' + token
      }
    })
    if (response !== undefined) {
      console.log('Response:', response)
      users = []
      const _users = response.data['data']
      for (const _user of _users) {
        const user = new UserModel(_user)
        users.push(user)
      }
    }
    return users
  }

}
