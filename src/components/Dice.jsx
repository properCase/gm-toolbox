import React, { useState } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import { roll, rollDiceNotation, rollOptions } from '../lib/api/services'
import settings from '../lib/settings'

const Dice = () => {
  const [rollResult, setRollResult] = useState('')

  const playSound = () => {
    let audioElement = document.getElementById('roll')

    audioElement.setAttribute('preload', 'auto')
    audioElement.autobuffer = true
    audioElement.load()
    audioElement.play()
  }
  const rollDie = (event, faces, options) => {
    event.stopPropagation()
    setRollResult('...')
    if (!options) {
      roll(settings.singleRollMethod, 1, faces)
        .then(result => {
          setRollResult(`d${faces} = ${result}`)
          playSound()
        })
        .catch(err => alert(err))
    } else {
      rollOptions(settings.multipleRollMethod, 1, faces, options)
        .then(result => {
          setRollResult(result)
          playSound()
        })
        .catch(err => alert(err))
    }
  }


  // stopSound () {
  //   let audioElement = document.getElementById('roll')
  //
  //   audioElement.pause()
  // }

  return [
    <li key='die-list'>Dice
      <ul>
        <li>d20
          <ul className='adv-dis' onClick={e => rollDie(e, 20)}>
            <li onClick={e => this.rollDie(e, 20, 'advantage')}>Advantage</li>
            <li onClick={e => this.rollDie(e, 20, 'disadvantage')}>Disadvantage</li>
          </ul>
        </li>
        <li className='hr'></li>
        {[4, 6, 8, 10, 12, 20, 100].map(d =>
          <li key={`roll-d${d}`} onClick={e => rollDie(e, d)}>d{d}</li>)
        }
      </ul>
    </li>,
    <li key='die-results' className={classNames('dice-results', { hidden: rollResult === '' })}>
      <div>{rollResult}</div>
    </li>
  ]
}

// Dice.propTypes = {
//     example: PropTypes.string.isRequired
// }

// Dice.defaultProps = {
//     example: ''
// }

export default Dice
