import React, { useState } from 'react'
import InputText from './custom-form/RandomInputText'
import TextArea from './custom-form/TextArea'
import FormField from './custom-form/FormField'
import Page from './Page'
import StatEditor from './npc-card/StatsEdit'
import ActionsEditor from './npc-card/ActionsEditor'
import Button from './custom-form/Button'
import NpcNav from './npc-card/NpcNav'
import { randomTextFieldProps, statsFieldProps } from '../lib/form-tools'

const generateRandomNPC = () => {
}

const NewNpc = () => {
  const [name, setName] = useState('initialName')
  const [looks, setLooks] = useState('plain')
  const [race, setRace] = useState('Human')
  const [voice, setVoice] = useState('')
  const [motives, setMotives] = useState('')
  const [profession, setProfession] = useState('')
  const [knowledge, setKnowledge] = useState('')
  const [stats, setStats] = useState({ str: 10, dex: 10, con: 10, 'int': 10, wis: 10, cha: 10 })
  const [actions, setActions] = useState([{
    name: 'Shortsword',
    toHit: 99,
    rangeShort: 5,
    rangeLong: null,
    target: '1 target',
    damageDice: '1d6+3',
    damageType: 'slashing',
    description: null
  }, {
    name: 'Teleport',
    toHit: null,
    rangeShort: 80,
    rangeLong: null,
    target: 'self',
    damageDice: null,
    damageType: null,
    description: 'As a bonus action he can teleport to any space within range he can see.'
  }])

  let nameObject = randomTextFieldProps(name, setName, () => 'generated!'),
    looksObject = randomTextFieldProps(looks, setLooks, () => 'generated looks!'),
    raceObject = randomTextFieldProps(race, setRace, () => 'generated race!'),
    motivesObject = randomTextFieldProps(motives, setMotives),
    voiceObject = randomTextFieldProps(voice, setVoice),
    professionObject = randomTextFieldProps(profession, setProfession),
    knowledgeObject = randomTextFieldProps(knowledge, setKnowledge),
    statsObject = statsFieldProps(stats, setStats)

  const textAreaStyle = { minHeight: '100px' }

  return [
    <NpcNav/>,
    <Page>
      <h1>Create <div className='regen' style={{ 'float': 'right', width: '1.5em', height: '1.5em' }}
                          onClick={() => generateRandomNPC()}></div></h1>
      <div className='new-npc'>
        <h3><InputText label='Name' {...nameObject} style={{ fontWeight: 700 }}/></h3>

        <FormField label='Race'>
          <select {...raceObject}>
            <option value={race}>{race}</option>
          </select>
        </FormField>

        <TextArea label='Physical Description' {...looksObject} style={textAreaStyle}/>
        <TextArea label='Voice' {...voiceObject} style={textAreaStyle}/>
        <TextArea label='Motives' {...motivesObject} style={textAreaStyle}/>
        <TextArea label='Profession' {...professionObject} style={textAreaStyle}/>
        <TextArea label='Knowledge' {...knowledgeObject} style={textAreaStyle}/>

        <Button text='Cancel' alignLeft={true} extraClassName='inverse'/>
        <Button text='Save' alignRight={true}/>
        {/*<StatEditor stats={statsObject.value} updater={statsObject.onChange} raceStats={{ str: 2, con: 1 }}/>*/}
        {/*<ActionsEditor actions={actions} setActions={setActions}/>*/}

      </div>
    </Page>
  ]
}

export default NewNpc
