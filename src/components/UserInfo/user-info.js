import React from 'react'
import PropTypes from 'prop-types'


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

  console.log('avatarUrl', avatarUrl)

  return (
    <div className="user__info">

      <img className="user__avatar" url={avatarUrl} />
      <h3 className="user__name">{name}</h3>
      {url && <a href={url} target="_blank">{url}</a>}
      {isHireable && <p>Looking for new opportunities</p>}
      <p>{email}</p>
      {location && <p>{location}</p>}
      {websiteUrl && <a href={websiteUrl} target="_blank">{websiteUrl}</a>}
    </div>
  )
}

UserInfo.propTypes = {

}

export default UserInfo
