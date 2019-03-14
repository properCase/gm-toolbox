import React from 'react'

const SaveIndicator = ({ status }) => {
  let image

  switch (status) {
    case 'dirty':
      image = <img src='/assets/animation/dirty.svg' alt='saving' style={{ width: '24px' }} />
      break
    case 'saving':
      image = <img src='/assets/animation/saving2.svg' alt='saving' style={{ width: '24px' }} />
      break
    case 'error':
      image = <img src='/assets/animation/error2.svg' alt='saving' style={{ width: '24px' }} />
      break
    case 'clean':
    default:
      image = <img src='/assets/animation/saved.svg' alt='saving' style={{ width: '24px' }} />
  }
  return (
    <div className='save-indicator'>
      { image }
    </div>
  )
}

export default SaveIndicator
