import React from 'react';
import PropTypes from 'prop-types';
import { Row as RowM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Row
* @uxpindescription TODO
*/


const Row = (props) => {
  return <RowM {...props} />;
};

Row.propTypes = {
  children: PropTypes.node,
/** @default 'row' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** The number of columns that will fit next to each other on extra small devices (<576px).Use `auto` to give columns their natural widths. */
  xs: PropTypes.string,
  /** The number of columns that will fit next to each other on small devices (≥576px).Use `auto` to give columns their natural widths. */
  sm: PropTypes.string,
  /** The number of columns that will fit next to each other on medium devices (≥768px).Use `auto` to give columns their natural widths. */
  md: PropTypes.string,
  /** The number of columns that will fit next to each other on large devices (≥992px).Use `auto` to give columns their natural widths. */
  lg: PropTypes.string,
  /** The number of columns that will fit next to each other on extra large devices (≥1200px).Use `auto` to give columns their natural widths. */
  xl: PropTypes.string,
  /** The number of columns that will fit next to each other on extra extra large devices (≥1400px).Use `auto` to give columns their natural widths. */
  xxl: PropTypes.string,
};

export default Row;