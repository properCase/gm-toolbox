import React from 'react'

const Button = ({ text, alignRight, alignLeft, extraClassName, onPress }) => {
  let style = {},
      className = 'button'

  if (extraClassName) className += ` ${extraClassName}`
  if (alignLeft) style.float = 'left'
  if (alignRight) style.float = 'right'

  return (
    <div className={className} style={style} onClick={() => onPress()}>
      {text}
    </div>
  )
}

export default Button
