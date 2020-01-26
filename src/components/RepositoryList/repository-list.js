import React from 'react'
import PropTypes from 'prop-types'
import { Repository } from '../Repository/'

import './repository-list.css'

function RepositoryList({
    nodes,
    totalCount
  }) {

  return (
    <div className="repository__wrapper">
      <h2>{(totalCount > 0) ? `${totalCount} repositories` : 'Sorry - no repositories'}</h2>
      <div className="repository__list">
        {nodes.length > 0 && nodes.map((node) => {
          return <Repository {...node} key={node.id} />
        })}
      </div>
    </div>
  )
}

RepositoryList.propTypes = {
  nodes: PropTypes.array,
  totalCount: PropTypes.number
}

export default RepositoryList
