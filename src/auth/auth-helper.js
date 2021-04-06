import { signout } from './api-auth.js'

const auth = {
  isAuthenticated() {
    console.log("In auth session ",sessionStorage.getItem('jwt'))
    if (sessionStorage.getItem('jwt')){
      return true
    }else
      return false
  },
  authenticate(data,cb) {
    // if (typeof window !== "undefined")
    console.log("!@# data is",data)
      sessionStorage.setItem('jwt', data.data.token)
      console.log("!@#$% session is ",sessionStorage.getItem('jwt'))
      cb()
  },
  clearJWT(cb) {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('jwt')
    cb()
    //optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth
