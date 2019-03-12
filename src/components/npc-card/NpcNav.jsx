import React from 'react'

import { Link } from 'react-router-dom'
import './NpcNav.css'

const NpcNav = () => {
  return (
    <div className='npc-nav'>
      <h1><Link to='/npc'>NPCs</Link>
        <Link to='/npc/create'><div className='new'></div></Link>
        <Link to='/npc/create'><div className='random'></div></Link>
      </h1>
    </div>
  )
}

export default NpcNav
