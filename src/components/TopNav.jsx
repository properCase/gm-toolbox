import PropTypes from 'prop-types'
import React  from 'react'
import { Link } from 'react-router-dom'
import Dice from './Dice'

const TopNav = () => {
  return (
    <div className='header'>
      <div className='tools'>
        <Link to='/'><span className='logo'>GM Toolkit</span></Link>
        <ul>
          <li><Link to='/lifepath'>Lifepath</Link></li>
          <li><Link to='/npc'>NPCs</Link>
            <ul className='secondary'>
              <li><Link to='/npc/create'>New NPC</Link></li>
              <li><Link to='/npc'>NPCs</Link></li>
              <li>Names</li>
              <li>Descriptions</li>
              <li>...</li>
            </ul>
          </li>
          <li>Encounter</li>
          <li>Kingdom</li>
          <Dice/>
        </ul>
      </div>
      <div className='settings'></div>
      <audio id='roll'>
        <source src='/assets/sound/roll.mp3' type='audio/wav'/>
      </audio>
    </div>
  )
}

TopNav.propTypes = {
  example: PropTypes.string.isRequired
}

TopNav.defaultProps = {
  example: ''
}

export default TopNav
