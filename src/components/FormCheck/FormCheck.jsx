import React from 'react';
import PropTypes from 'prop-types';
import { FormCheck as FormCheckM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/FormCheck
* @uxpindescription TODO
*/


const FormCheck = (props) => {
  return <FormCheckM {...props} />;
};

FormCheck.propTypes = {
  children: PropTypes.node,
/** Groups controls horizontally with other `FormCheck`s. */
  inline: PropTypes.bool,
  /** Put your checkboxes, radios, and switches on the opposite side. */
  reverse: PropTypes.bool,
  /** Disables the control. */
  disabled: PropTypes.bool,
  /** Manually style the input as valid */
  isValid: PropTypes.bool,
  /** Manually style the input as invalid */
  isInvalid: PropTypes.bool,
  /** Display feedback as a tooltip. */
  feedbackTooltip: PropTypes.bool,
  /** `title` attribute for the underlying `FormCheckLabel`. */
  title: PropTypes.string,
  /** The type of checkable. */
  type: PropTypes.string,
  /** The underlying HTML element to use when rendering the FormCheck. */
  as: PropTypes.string,
  /** @default 'form-check' */
  bsPrefix: PropTypes.string,
  /** bsPrefix override for the base switch class.@default 'form-switch' */
  bsSwitchPrefix: PropTypes.string,
  /** The FormCheck `ref` will be forwarded to the underlying input element,which means it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** A HTML id attribute, necessary for proper form accessibility.An id is recommended for allowing label clicks to toggle the check control.This is **required** when `type="switch"` due to how they are rendered. */
  id: PropTypes.string,
  /** Label for the control. */
  label: PropTypes.node,
  /** A message to display when the input is in a validation state */
  feedback: PropTypes.node,
  /** Specify whether the feedback is for valid or invalid fields */
  feedbackType: PropTypes.string,
};

export default FormCheck;