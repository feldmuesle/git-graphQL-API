import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../Input/'
import { Button } from '../Button/'

import './form.css'

function Form({
  onSubmit,
  onChange,
  values,
  submitErrors
}) {

  return (
    <form onSubmit={onSubmit}>
      {(submitErrors && submitErrors.length > 0)
        && <ul>
          {submitErrors.map((err, index) => {
            return <li key={index}>{err}</li>
            }
          )}
        </ul>
      }
      <Input
        label="Github user"
        name="login"
        handleChange={(e) => {onChange(e, 'login')}}
        value={values.login}
        placeholder="please enter a valid Github user"
        isRequired={true}
       />
      <Button label="submit" />
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  submitErrors: PropTypes.arrayOf(PropTypes.string)
}

export default Form
