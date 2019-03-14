import React from 'react'
import Markdown from 'react-markdown'

const MarkdownViewer = () => {
  return (
    <div className='md-viewer'>
      <Markdown source={'# Testing\n\n## Another\n\n**Bold text _with italics_**'}  />
    </div>
  )
}

export default MarkdownViewer
