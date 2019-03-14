import React from 'react'
import './RandomInput.css'

const InputText = ({ label = '', generateValue, value, onChange, isInline = false, style }) => {
  const htmlName = label.replace(new RegExp(' ', 'g'), '-')
  let inlineStyle = { display: 'inline-block' }

  if (!isInline) inlineStyle.display = 'block'

  return (
    <div className='random-input' style={inlineStyle}>
      <div className='label'>
        { label && <label htmlFor={htmlName}>{label}:</label> }
        { typeof generateValue === 'function' && <div className='regen' onClick={() => generateValue()}></div> }
      </div>
      <input type='text' name={htmlName} value={ value } onChange={ e => onChange(e) } style={style} />
    </div>
  )
}

export default InputText
