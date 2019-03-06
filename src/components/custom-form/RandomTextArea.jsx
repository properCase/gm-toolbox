import React from 'react'
import './RandomTextArea.css'

const RandomTextArea = ({ generateValue, value, onChange, style }) => {
  return (
    <div className='random-text-area'>
      <div className='regen' onClick={ () => generateValue() }></div>
      <textarea onChange={ e => onChange(e) } value={value} style={style} />
    </div>
  )
}

export default RandomTextArea
