import React, {useState} from 'react';
import logo from './logo.svg';
import { Form } from './components/Form/'
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks'

import './App.css';


const GET_USER = gql`
  query submit($login: String!) {
    user(login: $login) {
      name
      bio
      url
      company
      resourcePath
      repositories(first: 10) {
        edges {
          node {
            id
            name
            isPrivate
            updatedAt
            url
          }
        }
        totalCount
      }
      websiteUrl
      viewerCanCreateProjects
    }
  }
`

function App() {

  const intitialValues = {
    login: ''
  }

  const [values, setValues] = useState(intitialValues)
  const [submit, {loading, data, error}] = useLazyQuery(
    GET_USER,
    {variables: {login: values.login}}
  )

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
    submit()
    console.log('handle submit', data)
  }


  return (
    <div className="App">
      <Form
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors} />
    </div>
  );
}

export default App;
