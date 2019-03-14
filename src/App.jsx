import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import NPC from './components/npc/NpcBrowser'
import NewNpc from './components/NewNpc'
import LifePath from './components/LifePath'
import MarkdownViewer from './components/MarkdownViewer'
import MarkdownEditor from './components/MarkdownEditor'

const App = () => {
  const debugStyle = {
    border: '1px dotted #000'
  }

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
                <li><Link to='/test/md'>MD Viewer</Link></li>
                <li><Link to='/test/md-edit/1000/veil/frank-cartright'>MD Editor</Link></li>
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
            <Route path='/test/md' exact component={MarkdownViewer}/>
            <Route path='/test/md-edit' component={props => MarkdownEditor({ props })}/>
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
