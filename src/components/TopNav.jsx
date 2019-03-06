import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Dice from './Dice'

const TopNav = () => {
  return (
    <div className='header'>
      <div className='tools'>
        <span className='logo'>GM Toolkit</span>
        <ul>
          <li>Lifepath</li>
          <li>NPC
            <ul className='secondary'>
              <li>New NPC</li>
              <li>Full NPC</li>
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
