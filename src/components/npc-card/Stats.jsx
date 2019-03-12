import React from 'react'

import { statDisplay, stringifyCr } from '../../lib/helper'

const Stats = ({ ac, acDescription, cr, exp, hp, hpDice, speed, senses, languages = [], abilityScores }) => {
  const { str, dex, con, int, wis, cha } = abilityScores
  const crString = stringifyCr(cr)

  return (
    <div>
      <p><span>Armor Class</span>: {ac} ({acDescription})
        <cr><span>CR</span> {crString} ({exp}xp)</cr>
      </p>
      <p><span>HP</span>: {hp} ({hpDice})</p>
      <p><span>Speed</span>: {speed}'</p>
      <p><span>Senses</span>: {senses}</p>
      <p><span>Language</span>: {languages.join(', ')}</p>

      <ul className='stats'>
        <li>STR<span>{statDisplay(str)}</span></li>
        <li>DEX<span>{statDisplay(dex)}</span></li>
        <li>CON<span>{statDisplay(con)}</span></li>
        <li>INT<span>{statDisplay(int)}</span></li>
        <li>WIS<span>{statDisplay(wis)}</span></li>
        <li>CHA<span>{statDisplay(cha)}</span></li>
      </ul>
    </div>
  )
}

Stats.propTypes = {}

export default Stats
