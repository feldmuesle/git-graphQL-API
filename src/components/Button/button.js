import React from 'react'
import PropTypes from 'prop-types'

import './button.css'

function Button({
  type = 'button',
  handleClick,
  label
}) {

  return (
    <button
      type="submit"
      onClick={handleClick}
    >
    {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  label: PropTypes.string.isRequired
}

export default Button
