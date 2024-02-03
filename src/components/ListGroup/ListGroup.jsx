import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup as ListGroupM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ListGroup
* @uxpindescription TODO
*/


const ListGroup = (props) => {
  return <ListGroupM {...props} />;
};

ListGroup.propTypes = {
  children: PropTypes.node,
/** @default 'list-group' */
  bsPrefix: PropTypes.string,
  /** Adds a variant to the list-group */
  variant: PropTypes.string,
  /** Changes the flow of the list group items from vertical to horizontal.A value of `null` (the default) sets it to vertical for all breakpoints;Just including the prop sets it for all breakpoints, while `{sm|md|lg|xl|xxl}`makes the list group horizontal starting at that breakpoint’s `min-width`. */
  horizontal: PropTypes.string,
  /** Generate numbered list items. */
  numbered: PropTypes.bool,
  /** You can use a custom element type for this component. */
  as: PropTypes.string,
};

export default ListGroup;