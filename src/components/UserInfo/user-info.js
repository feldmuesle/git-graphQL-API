import React from 'react'
import PropTypes from 'prop-types'

import './user-info.css'

function UserInfo({
    bio,
    avatarUrl,
    email,
    createdAt,
    isHireable,
    login,
    name,
    location,
    websiteUrl,
    url
  }) {

  return (
    <div className="user__info">
      <img className="user__avatar" src={avatarUrl} alt="user"/>
      <h3 className="user__name">{name}</h3>
      {<p className="user__meta">
        <a href={url} target="_blank">
          <i className="icon fab fa-github" />
          {url}
        </a>
      </p>}
      {bio && <p className="user__meta">{bio}</p>}
      {isHireable && <p className="user__meta">Looking for new opportunities!!!</p>}
      {email && <p className="user__meta">{email}</p>}
      {location && <p className="user__meta">{location}</p>}
      {websiteUrl && <p className="user__meta">
        website: <a href={websiteUrl} target="_blank">{websiteUrl}</a>
      </p>}
    </div>
  )
}

UserInfo.propTypes = {
  bio: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  email: PropTypes.string,
  createdAt: PropTypes.string,
  isHireable: PropTypes.bool,
  login: PropTypes.string.isRequired,
  name: PropTypes.string,
  location: PropTypes.string,
  websiteUrl: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default UserInfo
