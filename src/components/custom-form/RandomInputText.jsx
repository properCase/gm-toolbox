import React from 'react'
import './RandomInput.css'

const RandomInputText = ({ label = '', generateValue, value, onChange, style }) => {
  const htmlName = label.replace(new RegExp(' ', 'g'), '-')

  return (
    <div className='random-input'>
      <div className='label'>
        <label htmlFor={htmlName}>{label}:</label>
        <div className='regen' onClick={() => generateValue()}></div>
      </div>
      <input type='text' name={htmlName} value={ value } onChange={ e => onChange(e) } style={style} />
    </div>
  )
}

export default RandomInputText
