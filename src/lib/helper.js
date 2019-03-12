const stringTheBonus = input => {
  if (!input)
    return '0'
  else if (input >= 0)
    return `+${input}`
  return `${input}`
}
const range = (short, long) => {
  if (long)
    return `${short}ft/${long}ft`
  return `${short}ft`
}
const stringTheDice = diceString => {
  if (!diceString)
    return ''
  let diceArray = diceString.match(/(\d\1+d\d+|\+\1|-|\*|\/|\d\1+)/gi)

  let out = []

  diceArray.forEach(part => {
    if (part.includes('d')) {
      const dParts = part.split('d')

      out.push(`${dParts[0]}`)
      out.push(`d${dParts[1]}`)
    } else
      out.push(part)
  })
  return out
}
const statDisplay = stat => {
  const bonus = Math.floor((stat - 10) / 2)

  return `${stat}  (${stringTheBonus(bonus)})`
}

const stringifyCr = cr => {
  let crString

  switch (cr) {
    case 0.125:
      crString = '1/8'
      break
    case 0.25:
      crString = '1/4'
      break
    case 0.5:
      crString = '1/2'
      break
    default:
      crString = cr.toString()
  }
  return crString
}

module.exports = {
  stringTheBonus,
  range,
  stringTheDice,
  statDisplay,
  stringifyCr
}