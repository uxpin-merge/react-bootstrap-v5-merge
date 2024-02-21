import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup as FormGroupM } from 'react-bootstrap'

const FormGroup = (props) => {
  return <FormGroupM {...props} />
}

FormGroup.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
  /** Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`. */
  controlId: PropTypes.string,
  /** The FormGroup `ref` will be forwarded to the underlying element.Unless the FormGroup is rendered `as` a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
}

export default FormGroup
