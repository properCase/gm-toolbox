import React, { useState } from 'react'
import Page from './Page'
import Button from './custom-form/Button'
import NpcNav from './npc-card/NpcNav'
import MarkdownEditor from './MarkdownEditor'
import Error404 from './errors/404'
import { pathParser } from '../lib/helper'

const generateRandomNPC = () => {
  return 'New Content!'
}

const NewNpc = () => {
  const textAreaStyle = { minHeight: '100px' }

  // const [ clientId, campaign, docKey ] = pathParser('/test/md-edit/', props.location.pathname)
  //
  // if (!clientId || !campaign || !docKey)
  //   return Error404()

  return (
    <Page>
      <NpcNav title='Create NPCs' />
      <div className='new-npc'>
        <MarkdownEditor
          template={'## Looks\n\n## Personality\n\n'}
          randomizeFunction={() => generateRandomNPC }
          randomizeDocName={() => 'random name!'}
          showReset={true}
        />
      </div>
    </Page>
  )
}

export default NewNpc
