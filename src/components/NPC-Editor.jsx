import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { toolbar } from '../config/toolbar-npc'
import { stateToHTML } from 'draft-js-export-html'
import { stateToMarkdown } from 'draft-js-export-markdown'

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NpcEditor = ({ onOutput }) => {
  const [editorState, setEditorState] = useState(new EditorState.createEmpty())
  const [html, setHtml] = useState('')
  const [markdown, setMarkdown] = useState('')

  const onEditorStateChange = eState => {
    setEditorState(eState)

    setHtml(stateToHTML(convertToRaw(eState))) // ,
    // markdown = stateToMarkdown(this.editorState)
    // this.markdown = markdown
  }

  const handleOutput = () => {
    onOutput(html, markdown)
  }

  return [
    <div className='regen'></div>,
    <Editor
      editorState={editorState}
      toolbar={toolbar}
      toolbarClassName='toolbarClassName'
      wrapperClassName='wrapperClassName'
      editorClassName='editorClassName'
      onEditorStateChange={onEditorStateChange}
    />,
    <div>{html}</div>
  ]
}

NpcEditor.propTypes = {
  npcId: PropTypes.object,
  onOutput: PropTypes.func.isRequired,
  onRegenerate: PropTypes.func,
  showRegen: PropTypes.bool,
  isEditing: PropTypes.bool
}

NpcEditor.defaultProps = {
  showRegen: false,
  isEditing: true
}

export default NpcEditor
