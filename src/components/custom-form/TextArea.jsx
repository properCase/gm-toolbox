import React from 'react'
import AutosizeTextArea from 'react-textarea-autosize'

const RandomTextArea = ({ label, generateValue, value, onChange, style, showRandom = false }) => {
  const htmlName = label.replace(new RegExp(' ', 'g'), '-')

  return (
    <div className='random-text-area'>
      <div className='label'>
        <label htmlFor={htmlName}>{label}:</label>
        { showRandom && <div className='regen' onClick={() => generateValue()}></div>}
      </div>
      <AutosizeTextArea onChange={ e => onChange(e) } value={value} style={style} />
    </div>
  )
}

export default RandomTextArea
