export class UserModel {
  constructor (user) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.gender = user.gender
    this.status = user.status
    this.created_at = user.created_at
    this.updated_at = user.updated_at
  }

  get statusText () {
    return (this.status === 1) ? 'Active' : 'Inactive'
  }

}
