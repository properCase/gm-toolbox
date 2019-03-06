import React from 'react'
import './RandomInput.css'

const RandomInputText = ({ generateValue, value, onChange, style }) => {
  return (
    <div className='random-input'>
      <div className='regen' onClick={ () => generateValue() }></div>
      <input type='text' value={ value } onChange={ e => onChange(e) } style={style} />
    </div>
  )
}

export default RandomInputText
