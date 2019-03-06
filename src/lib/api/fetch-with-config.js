import fetch from './fetch'

import config from '../../config'

const fetchWithConfig = (verb = 'GET', path, body) => {
  let ws = config.ws
  
  return fetch(verb, `${ws.protocol}://${ws.url}/${path}`, body)
}

export default fetchWithConfig
