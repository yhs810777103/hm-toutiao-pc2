// 存储用户信息相关的API
const KEY = 'user - key'
const local = {
  setUser (user) {
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  removeUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
export default local
