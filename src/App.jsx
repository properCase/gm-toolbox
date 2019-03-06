import React, { Component } from 'react'
import useReactRouter from 'use-react-router'
import TopNav from './components/TopNav'
import Page from './components/Page'
import NPC from './components/NPCCard'
import NewNpc from './components/NewNpc'

const App = () => {
  const { history, location, match } = useReactRouter()

  return (
    <div className='content'>
      <TopNav/>
      <div className='not-header'>
        <div className='grimoire'>
          <div className='section'>
            <h3>Campaigns
              <add></add>
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
        <h3>{location.pathname}</h3>
        <ul>
          <NewNpc/>
          <NPC/>
        </ul>
        <Page>
          <h2>Fugare Draconis</h2>
          The beginning of the flight...
        </Page>
      </div>
    </div>
  )
}

export default App
