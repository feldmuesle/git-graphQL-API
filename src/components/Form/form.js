import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../Input/'
import { Button } from '../Button/'

import './form.css'

function Form({
  className,
  onSubmit,
  onChange,
  values
}) {

  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      <Input
        name="login"
        handleChange={(e) => {onChange(e, 'login')}}
        value={values.login}
        placeholder="Github username"
        isRequired={true}
       />
      <Button className="form__button form__button--submit" label="gitify">
        <i className="icon fab fa-github" />
      </Button>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired
}

export default Form
