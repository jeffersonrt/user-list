import Api from './Core'

class Users {
  constructor () {
    this.instance = Api()
  }

  async getUsers () {
    return this.instance.get()
  }
}

export const UsersAPI = new Users()
