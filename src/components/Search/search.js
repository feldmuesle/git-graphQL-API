import React, {useState, useEffect } from 'react';
import { Form } from '../Form/'
import { UserInfo } from '../UserInfo/'
import { RepositoryList } from '../RepositoryList/'
import { ErrorMessage } from '../ErrorMessage/'
import { queries } from './queries/'
import { useLazyQuery } from '@apollo/react-hooks'

import './search.css';


function Search() {

  const intitialValues = {
    login: ''
  }

  const [values, setValues] = useState(intitialValues)
  const [submit, { loading, data, error }] = useLazyQuery(queries.GET_USER, { errorPolicy: 'all' })

  /*useEffect(() => {
    if (!called) {
      submit({variables: values})
    }
  }, []);*/



  function handleChange(event, name) {
    const value = event.target.value
    setValues((prevVals) => Object.assign(
      {},
      prevVals,
      {[name]: value}
    ))
  }

  function handleSubmit(event) {
    event.preventDefault()
    submit({variables: values})
  }

  function displayResult() {
    if (loading) {
      return (
        <div className="search__loading">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      )
    }

    if (error) {
      return <ErrorMessage error={error} className="error--submit" />
    } else if (data) {
      return (
        <div className="search__result">
          <UserInfo {...data.user} />
          <RepositoryList {...data.user.repositories} />
        </div>
      )
    }
  }

  return (
    <div className="search">
      <div className="search__header">
        <Form
          className="search__form"
          values={values}
          onChange={handleChange}
          onSubmit={handleSubmit} />
      </div>
      {displayResult()}
    </div>
  );
}

export default Search;
