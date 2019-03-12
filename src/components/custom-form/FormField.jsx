import React from 'react'
import './RandomTextArea.css'

const FormField = ({ label, value, onChange, style, children }) => {
  const htmlName = label.replace(new RegExp(' ', 'g'), '-')

  return (
    <div className='form-field'>
      <div className='label'>
        <label htmlFor={htmlName}>{label}:</label>
      </div>
      { children }
    </div>
  )
}

export default FormField
