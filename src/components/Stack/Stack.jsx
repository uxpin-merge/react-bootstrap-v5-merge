import React from 'react'
import PropTypes from 'prop-types'
import { Stack as StackM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/layout/stack
 * @uxpindescription Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.
 */
const Stack = (props) => {
  return <StackM {...props} />
}

Stack.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,
  /** Direction of the layout. */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  as: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix.**This is an escape hatch** for working with heavily customized bootstrap css.Defaults to `hstack` if direction is `horizontal` or `vstack` if directionis `vertical`.@default 'hstack | vstack' */
  bsPrefix: PropTypes.string,
  /** Sets the spacing between each item. Valid values are `0-5`. */
  gap: PropTypes.oneOf([1, 2, 3, 4, 5]),
}

export default Stack
