import React, { useState } from 'react'
import classNames from 'classnames'
import NpcEditor from './NPCCard'
import { range, stringTheBonus, stringTheDice } from '../lib/helper'
import RandomInputText from './custom-form/RandomInputText'
import RandomTextArea from './custom-form/RandomTextArea'

const randomTextField = (value, setValue, generateAction) => {
  return {
    value,
    generateValue: () => {
      setValue(generateAction())
    },
    onChange: e => {
      setValue(e.target.value)
    }
  }
}
const randomTextAreaField = (value, setValue, generateAction) => {
  return {
    value,
    generateValue: () => {
      setValue(generateAction())
    },
    onChange: e => {
      setValue(e.target.value)
    }
  }
}

const NewNpc = () => {
  const [name, setName] = useState('initialName')
  const [looks, setLooks] = useState('plain')
  const [selectedTab, setSelectedTab] = useState('looks')
  const [race, setRace] = useState('Human')

  let nameObject = randomTextField(name, setName, () => 'generated!')
  let looksObject = randomTextField(looks, setLooks, () => 'generated looks!')

  return (
    <li className='card new-npc'>
      <h3><RandomInputText {...nameObject} style={{ fontWeight: 700 }}/>
        <span
          className='star selected'></span>
        <span><select>
          <option value={race}>{race}</option>
        </select></span>
      </h3>
      <ul className='tab-content'>
        <li className={classNames({ show: selectedTab === 'looks' })}>
          <RandomTextArea {...looksObject} style={{ height: '90%' }}/>
        </li>
      </ul>
      {/*<li className={ classNames({ show: selectedTab === 'voice' }) }>*/}
      {/*<NpcEditor />*/}

      {/*<p>{ voice }</p>*/}
      {/*</li>*/}
      {/*<li className={ classNames({ show: selectedTab === 'motives' }) }>*/}
      {/*<div className='regen'></div>*/}
      {/*<p>{ motives }</p>*/}
      {/*</li>*/}
      {/*<li className={ classNames({ show: selectedTab === 'prof' }) }>*/}
      {/*<div className='regen'></div>*/}
      {/*<p>{ profession }</p>*/}
      {/*</li>*/}
      {/*<li className={ classNames({ show: selectedTab === 'stats' }) }>*/}
      {/*<Stats { ...stats } />*/}
      {/*</li>*/}
      {/*<li className={ classNames({ show: selectedTab === 'actions' }) }>*/}
      {/*{ actions.map((action, idx) =>*/}
      {/*<div key={`action-${idx}`}><strong>{ action.name }:</strong>*/}
      {/*<to-hit>{ stringTheBonus(action.toHit) }</to-hit>*/}
      {/*, {range(action.rangeShort, action.rangeLong)}*/}
      {/*, {action.target},*/}
      {/*<img src='/assets/ico/npc/drop-red.svg' style={{ height: '1.5em', width: '1.5em'}}></img>*/}
      {/*<dice>*/}
      {/*<ul>*/}
      {/*{ stringTheDice(action.damageDice).map((part, idx) =>*/}
      {/*<li key={ `gameDice-${idx}` }>{ part }</li>*/}
      {/*) }*/}
      {/*</ul>*/}
      {/*</dice>*/}
      {/*<span> { action.damageType }</span>*/}
      {/*</div>*/}
      {/*) }*/}
      {/*</li>*/}
      {/*</ul>*/}

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

  )
}

export default NewNpc
