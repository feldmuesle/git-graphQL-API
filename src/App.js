import React, {useState} from 'react';
import logo from './logo.svg';
import { Form } from './components/Form/'
import './App.css';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';

const GET_USER = gql`
  {
  user(login: "feldmuesle") {
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
`;

function App() {

  const { loading, error, data } = useQuery(GET_USER)

  console.log('response:', loading, error, data)

  const intitialValues = {
    login: ''
  }

  const [values, setValues] = useState(intitialValues)

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
    console.log('handle submit', values)
  }

  const errors = {}

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
