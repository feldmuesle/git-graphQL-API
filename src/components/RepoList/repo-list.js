import React from 'react'
import PropTypes from 'prop-types'


function RepoList({
    nodes
  }) {

  return (
    <div className="repo__list">
      {nodes.length > 0 && nodes.map((node) => {
        const { name, createdAt, url, id } = node
        return (
          <div className="repo__list-item" key={id}>
            <h5>{name}</h5>
            <p>{createdAt}</p>
            {url && <a href={url} target="_blank">{url}</a>}
          </div>
        )
      })}
    </div>
  )
}

RepoList.propTypes = {

}

export default RepoList
