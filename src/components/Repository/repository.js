import React from 'react'
import PropTypes from 'prop-types'

import './repository.css'

function Repository({
  name,
  createdAt,
  url,
  id,
  description,
  primaryLanguage
}) {

  const date = new Date(createdAt)
  const createdAtFormatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  const border = primaryLanguage ? `4px solid ${primaryLanguage.color}` : 'none'

  return (
    <div className="repository">
      <h3 className="repository__name" style={{borderBottom: border }}>
        <a className="repository__url" href={url} target="_blank">{name}</a>
      </h3>
      {description && <p className="repository__description">{description}</p>}
      <div className="repository__footer">
        {primaryLanguage && <span className="repository__language">
          <i className="icon fas fa-crown" />{primaryLanguage.name}
        </span>}
        <span className="repository__created-at">{`created: ${createdAtFormatted}`}</span>
      </div>
    </div>
  )
}

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryLanguage: PropTypes.objectOf(PropTypes.string)
}

export default Repository
