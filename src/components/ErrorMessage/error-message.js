import React from 'react'
import PropTypes from 'prop-types'

import './error-message.css'

function ErrorMessage({
  className,
  error
}) {

  const errors = error.networkError
    ? [...error.graphQLErrors, error.networkError]
    : error.graphQLErrors

  if (errors.length) {
    return (
      <ul className="error__list">
        {errors.map((err) => {
          return (
            <li key={err.type} className={className ? `error ${className}`: 'error'}>
              <i className="icon fas fa-fire" />
              {err.message}
            </li>
          )
        })}
      </ul>
    )
  }
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  error: PropTypes.object.isRequired
}

export default ErrorMessage
