import React, { useState } from 'react'
import classNames from 'classnames'

import { stringTheDice, range, stringTheBonus } from '../lib/helper'
import Stats from './npc-card/Stats'

const npcArray = require('../mock-data/npc.json')

const NPC = () => {
  const npc = npcArray[0]
  const [selectedTab, setSelectedTab] = useState('looks')

  const { name, race, description, voice, motives, profession, stats } = npc
  const { actions } = stats
  // const { selectedTab, descriptionEditorState, voiceEditorState } = this

  return (
    <ul>
      <li className='card'>
        <div className='regen'></div>
        <h3>{name}<span className='star selected'></span><span>({race})</span></h3>
        <ul className='tab-content'>
          <li className={classNames({ show: selectedTab === 'looks' })}>
            <p>{description}</p>
          </li>
          <li className={classNames({ show: selectedTab === 'voice' })}>
            <p>{voice}</p>
          </li>
          <li className={classNames({ show: selectedTab === 'motives' })}>
            <div className='regen'></div>
            <p>{motives}</p>
          </li>
          <li className={classNames({ show: selectedTab === 'prof' })}>
            <div className='regen'></div>
            <p>{profession}</p>
          </li>
          <li className={classNames({ show: selectedTab === 'stats' })}>
            <Stats {...stats} />
          </li>
          <li className={classNames({ show: selectedTab === 'actions' })}>
            {actions.map((action, idx) =>
              <div key={`action-${idx}`}><strong>{action.name}:</strong>
                <to-hit>{stringTheBonus(action.toHit)}</to-hit>
                , {range(action.rangeShort, action.rangeLong)}
                , {action.target},
                <img alt='damage' src='/assets/ico/npc/drop-red.svg' style={{ height: '1.5em', width: '1.5em' }}></img>
                <dice>
                  <ul>
                    {action.damageDice && stringTheDice(action.damageDice).map((part, idx) =>
                      <li key={`gameDice-${idx}`}>{part}</li>
                    )}
                  </ul>
                </dice>
                <span> {action.damageType}</span>
              </div>
            )}
          </li>
        </ul>

        <ul className='tabs'>
          <li
            className={classNames({ selected: selectedTab === 'looks' })}
            onClick={() => setSelectedTab('looks')}
          >
            Looks
          </li>
          <li
            className={classNames({ selected: selectedTab === 'voice' })}
            onClick={() => setSelectedTab('voice')}
          >
            Voice
          </li>
          <li
            className={classNames({ selected: selectedTab === 'motives' })}
            onClick={() => setSelectedTab('motives')}
          >
            Motives
          </li>
          <li
            className={classNames({ selected: selectedTab === 'prof' })}
            onClick={() => setSelectedTab('prof')}
          >
            Prof
          </li>
          <li
            className={classNames({ selected: selectedTab === 'stats' })}
            onClick={() => setSelectedTab('stats')}
          >
            Stats
          </li>
          <li
            className={classNames({ selected: selectedTab === 'actions' })}
            onClick={() => setSelectedTab('actions')}
          >
            Actions
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default NPC
