import axios from 'axios';

const signin = async (user) => {
  try {

    const  headers =  {
      'Content-Type': 'application/json'
    }

    const body = {
      "EMAIL": user.email,
      "PASSWORD": user.password
    }


    const result = await axios.post("http://localhost:5000/api/auth/signin", body, headers)
    
    return result
  } catch(err) {
    return {error: err.message}
  }
}

const signout = async () => {
  try {
    let response = await fetch('/auth/signout/', { method: 'GET' })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  signin,
  signout
}