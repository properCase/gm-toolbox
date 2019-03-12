import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import NPC from './components/npc/NpcBrowser'
import NewNpc from './components/NewNpc'
import LifePath from './components/LifePath'

const App = () => {
  return (
    <Router>
      <div className='content'>
        <TopNav/>
        <div className='not-header'>
          <div className='grimoire'>
            <div className='section'>
              <h3>Campaigns
                <div className='add'></div>
              </h3>
              <ul>
                <li>Fugare Draconis</li>
                <li>Phandelver</li>
                <li>Unnamed Campaign</li>
              </ul>
            </div>
            <div className='section'>
              <h3>Librarian</h3>
              <ul>
                <li>NPCs</li>
                <li>Locations</li>
                <li>Taverns</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className='body-content'>
            <Route path='/npc/create' exact component={NewNpc}/>
            <Route path='/npc' exact component={NPC}/>
            <Route path='/lifepath' exact component={LifePath}/>
            {/*<Page>*/}
            {/*<h2>Fugare Draconis</h2>*/}
            {/*The beginning of the flight...*/}
            {/*</Page>*/}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
