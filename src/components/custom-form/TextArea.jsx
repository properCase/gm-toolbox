import React from 'react'
import AutosizeTextArea from 'react-textarea-autosize'

const RandomTextArea = ({ label, generateValue, value, onChange, style }) => {
  const htmlName = label.replace(new RegExp(' ', 'g'), '-')

  return (
    <div className='random-text-area'>
      <div className='label'>
        <label htmlFor={htmlName}>{label}:</label>
        { typeof generateValue === 'function' && <div className='regen' onClick={() => generateValue()}></div>}
      </div>
      <AutosizeTextArea onChange={ e => onChange(e) } value={value} style={style} />
    </div>
  )
}

export default RandomTextArea
