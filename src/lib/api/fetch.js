/* eslint import/first: 0 */
/*
* Author: Tony Archer
* Creation Date: 9/11/2017
* */

import es6Promise from 'es6-promise'
es6Promise.polyfill()

import 'isomorphic-fetch'
import { getToken } from './jwt'

let _fetch = (verb = 'GET', endpoint, body, headerOptions = { useJWT: false, allowCORS: false }) => new Promise((resolve, reject) => {
  let token = getToken(),
      headers = {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
  
  if (headerOptions.useJWT)
    headers.Authorization = `Bearer ${token}`
  
  if (headerOptions.allowCORS === 'DEV')
    headers['Access-Control-Allow-Origin'] = '*'
  
  let options = {
    method: verb,
    mode: 'cors',
    cache: 'default',
    redirect: 'follow',
    timeout: 15000,
    headers: new Headers(headers),
    body: JSON.stringify(body)
  }
  
  fetch(endpoint, options)
    .then(response => {
      if (response.status >= 400)
        throw new Error(`Bad response from server: ${response.status}`)
      const jsonResponse = response.json()
      
      return jsonResponse
    })
    .then(json => {
      if (json.data)
        resolve(json.data)
      else
        resolve(json)
    })
    .catch(err => {
      if (err.message.includes('Bad response from server:'))
        return reject(err)
      if (!err.response)
        err.message = 'Connection to web service timed out.'
      
      reject(err)
    })
})

export default _fetch
// module.exports = _fetch
