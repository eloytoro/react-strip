import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { parseAlign, propToClass, connect } from 'commons';

/**
 * The <Strip /> element works as the container of many child components.
 * Its direction determines whether the children display forming rows or columns
 * across its length.
 * The align parameter is a string that determines where are the children placed
 * and aligned. Its composed in two parts; parallel and perpendicular.
 * Parallel:
 * - start (default)
 * - center
 * - end
 * - space around
 * - space between
 * Perpendicular:
 * - start
 * - center
 * - end
 * - stretch (default)
 * Note: the <Strip /> component can also act as a <Stretch /> component when the
 * size parameter is passed
 *
 * Examples
 *
 * ```html
 * <Strip>
 *   <Stretch /><Stretch /><Stretch />
 * </Strip>
 * ```
 *
 * Defaults to a row strip with 'start stretch' alignment
 *
 * ```
 * |[   ][   ][   ]|
 * |[ 1 ][ 2 ][ 3 ]|
 * |[   ][   ][   ]|
 * ```
 *
 * ---
 *
 * ```html
 * <Strip direction="vertical">
 *   <Stretch /><Stretch /><Stretch />
 * </Strip>
 * ```
 *
 * ```
 * |[   1   ]|
 * |[   2   ]|
 * |[   3   ]|
 * ```
 *
 * ---
 *
 * ```html
 * <Strip align="center center">
 *   <Stretch /><Stretch /><Stretch />
 * </Strip>
 * ```
 *
 * ```
 * |               |
 * |   [1][2][3]   |
 * |               |
 * ```
 *
 * ---
 *
 * ```html
 * <Strip align="space-between center">
 *   <Stretch /><Stretch /><Stretch />
 * </Strip>
 * ```
 *
 * ```
 * |               |
 * | [1]  [2]  [3] |
 * |               |
 * ```
 *
 * @param {string} direction - either 'horizontal' or 'vertical'
 * @param {number:object} size - the percent size of the element
 * @param {number:object} order - the order placing
 * @param {string} align - children alignment ('parallel perpendicular')
 * @param {boolean} wrap - wether to allow the children to wrap around parent
 * @param {boolean} nowrap - same as wrap={false}
 * @param {boolean} fill - the strip will try to fill its parent element entirely
 * @param {boolean} reverse - reverse the order components inside are displayed
 * @returns {Element}
*/
export const Strip = ({
  children,
  component = 'div',
  className = '',
  direction = 'horizontal',
  size,
  order,
  fill = false,
  align = 'start stretch',
  wrap = false,
  screenSize,
  ...props
}) => (
  React.createElement(
    component,
    {
      ...props,
      className: classnames(
        className,
        'react-strip',
        ...propToClass('react-strip', direction, screenSize),
        ...propToClass('react-strip-align', parseAlign(align), screenSize),
        ...propToClass('react-strip-stretch', size, screenSize),
        ...propToClass('react-strip-order', order, screenSize),
        { 'react-strip-wrap': wrap,
          'react-strip-fill': fill }
      )
    },
    children
  )
);

Strip.propTypes = {
  children: PropTypes.node,
  screenSize: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  order: PropTypes.number,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  direction: PropTypes.string,
  fill: PropTypes.bool,
  align: PropTypes.string,
  wrap: PropTypes.bool
};

export default connect(Strip);
