import React from 'react'
import PropTypes from 'prop-types'

import './input.css'

function Input({
  label,
  name,
  handleChange,
  value,
  placeholder,
  error

}) {

  return (
    <div className="form__group">
      {(label && label.length)
        && <label className="form__label" htmlFor={name}>
          {label}
        </label>}
      <input
        type="text"
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      {error && <span className="form__error">{error}</span>}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string
}

export default Input
