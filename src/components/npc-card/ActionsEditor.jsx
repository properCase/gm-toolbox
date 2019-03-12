import React from 'react'
import { range, stringTheBonus, stringTheDice } from '../../lib/helper'
import InputText from '../custom-form/InputText'
import TextArea from '../custom-form/TextArea'

const ActionsEditor = ({ actions, setActions }) => {

  return (
    <div className='actions'>
      {actions.map((action, idx) => (
        <div className='action' key={`action-${idx}`}>
          <hr/>
          <div className='left'>
            <InputText label='Action' value={action.name}/>
            <InputText label='To Hit' value={action.toHit}/>
          </div>
          <div className='right'>
            <InputText label='Range / Short Range' value={action.rangeShort}/>
            <InputText label='Long Range' value={action.rangeLong}/>
          </div>
          <div style={{ clear: 'both' }}></div>

          <InputText label='Target' value={action.target}/>
          <div className='right'><InputText label='Damage Type' value={action.damageType}/></div>
          <InputText label='Damage Dice' value={action.damageDice}/>
          <TextArea label='Description' value={action.description}/>
        </div>
      ))}
      {actions.map((action, idx) =>
        <div key={`action-${idx}`}>
          <strong>{action.name}:</strong>
          <to-hit>{action.toHit && `${stringTheBonus(action.toHit)}, `}</to-hit>
          {range(action.rangeShort, action.rangeLong)}
          , {action.target}
          {action.damageDice && [
            <img src='/assets/ico/npc/drop-red.svg'
                 alt='damage'
                 style={{ height: '1.5em', width: '1.5em', verticalAlign: 'text-bottom' }}></img>,
            <dice>
              <ul>
                {action.damageDice && stringTheDice(action.damageDice).map((part, idx) =>
                  <li key={`gameDice-${idx}`}>{part}</li>
                )}
              </ul>
            </dice>,
            <span> {action.damageType}</span>
          ]}
          <p>{ action.description }</p>
        </div>
      )}
      <div className='new-action'>
        [ADD ACTION]
      </div>
    </div>
  )
}

export default ActionsEditor
