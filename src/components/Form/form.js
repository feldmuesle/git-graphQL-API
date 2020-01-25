import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../Input/'
import { Button } from '../Button/'

import './form.css'

function Form({
  onSubmit,
  onChange,
  values,
  errors
}) {

  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Github user"
        name="login"
        handleChange={(e) => {onChange(e, 'login')}}
        value={values.login}
        placeholder="please enter a valid Github user"
        error={errors.login}
       />
      <Button label="submit" />
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object
}

export default Form
