import React from 'react'
import './RandomTextArea.css'

const RandomTextArea = ({ label, generateValue, value, onChange, style }) => {
  const htmlName = label.replace(new RegExp('\s', 'g'), '-')

  return (
    <div className='random-text-area'>
      <div className='label'>
        <label htmlFor={htmlName}>{label}:</label>
        <div className='regen' onClick={() => generateValue()}></div>
      </div>
      <textarea onChange={ e => onChange(e) } value={value} style={style} />
    </div>
  )
}

export default RandomTextArea
