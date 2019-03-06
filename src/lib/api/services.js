import fetch from './fetch-with-config'

export let roll = (method, dice, faces) =>                  fetch('GET', `v1/dice/${method}/${dice}/${faces}`)
export let rollOptions = (method, dice, faces, options) =>  fetch('GET', `v1/dice/${method}/${dice}/${faces}/${options}`)
export let rollDiceNotation = (formula) =>                  fetch('GET', `v1/dice/${formula}`)


// let addProject = body =>                                fetch('POST', 'api/v1/projects', body)
// let updateProject = (slug, body) =>                     fetch('PATCH', `api/v1/projects/${slug}`, body)
// let removeProject = slug =>                             fetch('DELETE', `api/v1/projects/${slug}`)

// module.exports = {
//   roll: roll,
//   rollDiceNotation
// }
