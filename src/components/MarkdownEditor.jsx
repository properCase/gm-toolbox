import React, { useState, useEffect } from 'react'
import AutosizeTextArea from 'react-textarea-autosize'
import { pathParser } from '../lib/helper'
import Error404 from './errors/404'
import './MarkdownEditor.css'
import SaveIndicator from './SaveIndicator'
import Button from './custom-form/Button'
import { markdown } from '../lib/api/rest-services'
import InputText from './custom-form/InputText'
import { randomTextFieldProps } from '../lib/form-tools'

let saveTimer
const waitToSaveTimeout = 3000
let debugTimer

const MarkdownEditor = ({ template, docName, value, showReset, randomizeFunction, randomizeDocName }) => {
  const [saveIndicator, setSaveIndicator] = useState('clean')
  const [mdContent, setMdContent] = useState(value || template)
  const [lastMdContent, setLastMdContent] = useState(value || template)
  const [documentName, setDocumentName] = useState(docName)

  const nameFieldProps = randomTextFieldProps(documentName, setDocumentName, () => 'RANDOM NAME')

  useEffect(() => {
    console.info(saveIndicator)

    if (mdContent !== lastMdContent) {
      // only set to dirty if it isn't in the middle of a save... because that instantly clears the saving state.
      if (saveIndicator !== 'saving')
        setSaveIndicator('dirty')
      clearTimeout(saveTimer)
      saveTimer = setTimeout(() => {
        setSaveIndicator('saving')
        clearTimeout(debugTimer)
        debugTimer = setTimeout(() => {
          setLastMdContent(mdContent)
          console.info(`${new Date()} Save confirmation: ${mdContent}`)
        }, 3000)
        console.info(`${new Date()} Update Pending... ${mdContent}`)
      }, waitToSaveTimeout)
    } else {
      setSaveIndicator('saved')
      clearTimeout(saveTimer)
    }
  })


  return (
    <div className='md-editor'>
      <div className='md-editor-nav'>
        { showReset && <Button text='Reset' onPress={ () => { setMdContent(template) }}/> }
        &nbsp;
        { randomizeFunction && <Button text='Randomize' onPress={ () => { setMdContent(randomizeFunction()) }}/> }

        {/*// [load template if box is clear]*/}
        {/*[randomize content]*/}
      </div>
      <div className='md-editor'>
        <SaveIndicator status={saveIndicator}/>
        <InputText label='NPC Name' value={documentName} onChange={e => setDocumentName(e.target.value)} generateValue={() => randomizeDocName()} />
        <AutosizeTextArea minRows={10} value={mdContent} onChange={e => setMdContent(e.target.value)}/>
      </div>
      <div className='md-editor-actions'>
        <Button text='Save' alignRight={true}/>
        <Button text='Cancel' extraClassName='inverse'/>
      </div>
    </div>
  )
}

export default MarkdownEditor
