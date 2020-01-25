import React, {useState, useEffect } from 'react';
import { Form } from '../Form/'
import { UserInfo } from '../UserInfo/'
import { RepoList } from '../RepoList/'
import { queries } from './queries/'
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks'

import './search.css';


function Search() {

  const intitialValues = {
    login: 'feldmuesle'
  }

  const [values, setValues] = useState(intitialValues)
  const [submit, {loading, called, data, error}] = useLazyQuery(queries.GET_USER, { errorPolicy: 'all' })
  const [submitErrors, setSubmitErrors] = useState([])


  useEffect(() => {
    if (error) {
      const graphQLErrors = error.graphQLErrors.map((error) => error.message)
      const netWorkError = error.networkError.message
      setSubmitErrors([...graphQLErrors, netWorkError])
    } else {
      setSubmitErrors([])
    }
  }, [data, values]);

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

  return (
    <div className="search">
      <Form
        className="search__form"
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitErrors={submitErrors} />
      {data && <div className="search__result">
        <UserInfo {...data.user} />
        <RepoList {...data.user.repositories} />
      </div>}
    </div>
  );
}

export default Search;
