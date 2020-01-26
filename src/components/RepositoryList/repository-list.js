import React from 'react'
import PropTypes from 'prop-types'
import { Repository } from '../Repository/'
import { Button } from '../Button/'

import './repository-list.css'

const updateQuery = (previousResult, { fetchMoreResult }) => {

  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    user: {
      ...previousResult.user,
      repositories: {
        ...previousResult.user.repositories,
        ...fetchMoreResult.user.repositories,
        nodes: [
          ...previousResult.user.repositories.nodes,
          ...fetchMoreResult.user.repositories.nodes,
        ],
      },
    },
  }
}

function RepositoryList({
    nodes,
    totalCount,
    pageInfo,
    fetchMore
  }) {


  const { endCursor, hasNextPage} = pageInfo

  return (
    <div className="repository__wrapper">
      <h2>{(totalCount > 0) ? `${totalCount} repositories` : 'Sorry - no repositories'}</h2>
      <div className="repository__list">
        {nodes.length > 0 && nodes.map((node) => {
          return <Repository {...node} key={node.id} />
        })}
      </div>
      {hasNextPage && <Button label="more" handleClick={() => fetchMore({
          variables: {cursor: endCursor},
          updateQuery
        }
      )} />}
    </div>
  )
}

RepositoryList.propTypes = {
  nodes: PropTypes.array,
  totalCount: PropTypes.number,
  pageInfo: PropTypes.shape({
    endCursor: PropTypes.string,
    hasNextPage: PropTypes.bool
  }),
  fetchMore: PropTypes.func
}

export default RepositoryList
