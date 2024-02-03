import React from 'react';
import PropTypes from 'prop-types';
import { Badge as BadgeM } from 'react-bootstrap';

const Badge = (props) => {
  return <BadgeM {...props} />;
};

Badge.propTypes = {
  children: PropTypes.node,
/** The visual style of the badge */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /** Add the `pill` modifier to make badges more rounded withsome additional horizontal padding */
  pill: PropTypes.bool,
  /** @default span */
  as: PropTypes.string,
  /** @default 'badge' */
  bsPrefix: PropTypes.string,
  /** Sets badge text color */
  text: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
};

export default Badge;