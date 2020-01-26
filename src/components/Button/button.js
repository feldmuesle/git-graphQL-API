import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

function Button({
  className,
  type = 'button',
  handleClick,
  label,
  children
}) {

  return (
    <button
      className={className ? `button ${className}` : 'button'}
      type="submit"
      onClick={handleClick}
    >
    {children}
    {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Button
