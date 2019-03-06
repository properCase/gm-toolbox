const key = 'auth-token'

let storeToken = token => {
  if (token)
    localStorage.setItem(key, token)
  else
    localStorage.removeItem(key)
}

let getToken = () => localStorage.getItem(key)

let addJwtToHeader = fetchOptions => {
  let token = getToken()
  
  if (token) {
    fetchOptions.headers = fetchOptions.headers || {}
    fetchOptions.headers.Authorization = `Bearer ${token}`
  }
  return fetchOptions
}

module.exports = {
  storeToken,
  getToken,
  addJwtToHeader
}
