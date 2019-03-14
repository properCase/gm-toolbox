import axios from 'axios'
const serviceVersion = '/api/v1/'
const get = (url) => axios.get(`${serviceVersion}${url}`)
const post = (url, body) => axios.post(`${serviceVersion}${url}`, body)
const patch = (url, body) => axios.patch(`${serviceVersion}${url}`, body)

export let roll = (method, dice, faces) =>                  get(`dice/${method}/${dice}/${faces}`)
export let rollOptions = (method, dice, faces, options) =>  get(`dice/${method}/${dice}/${faces}/${options}`)
export let rollDiceNotation = formula =>                    get(`dice/${formula}`)

export let getMarkdown = id =>                              get(`md/${id}`)
export let addMarkdown = body =>                            post('md/add', body)
export let setMarkdown = (id, body) =>                      patch(`md/${id}`, body)

export let markdown = {
  get: getMarkdown,
  add: addMarkdown,
  set: setMarkdown
}
