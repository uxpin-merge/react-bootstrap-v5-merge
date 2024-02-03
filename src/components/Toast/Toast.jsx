import React from 'react';
import PropTypes from 'prop-types';
import { Toast as ToastM } from 'react-bootstrap';

const Toast = (props) => {
  return <ToastM {...props} />;
};

Toast.propTypes = {
  children: PropTypes.node,
/** A `react-transition-group` Transition component used to animate the Toast on dismissal. */
  transition: PropTypes.string,
  /** When `true` The toast will show itself. */
  show: PropTypes.bool,
  /** Apply a CSS fade transition to the toast */
  animation: PropTypes.bool,
  /** Delay hiding the toast (ms) */
  delay: PropTypes.number,
  /** Auto hide the toast */
  autohide: PropTypes.bool,
  /** @default 'toast' */
  bsPrefix: PropTypes.string,
  /** A Callback fired when the close button is clicked. */
  onClose: PropTypes.func,
  /** Callback fired before the toast transitions in */
  onEnter: PropTypes.func,
  /** Callback fired as the toast begins to transition in */
  onEntering: PropTypes.func,
  /** Callback fired after the toast finishes transitioning in */
  onEntered: PropTypes.func,
  /** Transition onExit callback when animation is not `false` */
  onExit: PropTypes.func,
  /** Transition onExiting callback when animation is not `false` */
  onExiting: PropTypes.func,
  /** Transition onExited callback when animation is not `false` */
  onExited: PropTypes.func,
  /** Sets Toast background */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
};

export default Toast;