import React, { useState } from 'react'
import InputText from '../custom-form/InputText'
import NpcNav from '../npc-card/NpcNav'
import Button from '../custom-form/Button'

import './NpcBrowser.css'

const NpcBrowser = () => {
  const [search, setSearch] = useState('')

  let records = [
    { img: 'https://secure.gravatar.com/avatar/1fbe88b6ff5e61ee075befc916a3a163?d=https://media-waterdeep.cursecdn.com/attachments/0/14/avatar_2.png&s=64', name: 'Henry Mason' },
    { img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/809/64/64/636278893241328380.jpeg', name: 'James Earl Jones' },
    { img: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/216/173/64/64/636571135230697759.png', name: 'Thomas McHenry' },
    { img: '', name: 'Tumblebum' }
  ]

  return [
    <NpcNav key='npcNav' />,
    <div key='npc-browser' className='npc-browser' >
      <div className='npc-search'>
        <InputText value={search} onChange={e => setSearch(e.target.value)} isInline={true} style={{ fontSize: '1.5em', padding: '0 .3em', marginRight: '.5em', verticalAlign: 'top' }} />
        <Button text='Search' extraClassName='search'/>
      </div>
      { records
        .filter(result => result.name.toLowerCase().includes(search.toLowerCase()))
        .map((match, idx) => {
          const img = match.img || ''
console.info(img)
          return (
            <div key={`match-${idx}`} className='search-result'>
              { img && <img alt='npc' src={ img } /> }<span>{ match.name }</span>
            </div>
          )
        }) }
    </div>
  ]
}

export default NpcBrowser
