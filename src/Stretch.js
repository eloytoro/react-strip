import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { propToClass, connect } from 'commons';


/**
 * The <Stretch /> element serves as both a column and a row, depending on its
 * <Strip /> direction.
 * Both the size and order parameters can take the form of a number or an object
 * if a media query needs to be specified.
 * The supported queries are:
 * - mobile
 * - small
 * - medium
 * - large
 * - the `>` operator, which means greater than (`> small`)
 *
 * Examples
 *
 * ```
 * // first on mobile, second on small and third on greater than small resolutions
 * <Stretch order={{
 *   'mobile': 0,
 *   'small': 1,
 *   '> small': 2
 * }} />
 * // first on greater than small, second on mobile and third on small resolutions
 * <Stretch order={{
 *   'mobile': 1,
 *   'small': 2,
 *   '> small': 0
 * }} />
 * // first on small, second on greater than small and third on mobile resolutions
 * <Stretch order={{
 *   'mobile': 2,
 *   'small': 0,
 *   '> small': 1
 * }} />
 * ```
 *
 * ```
 * <Stretch size={{
 *   'mobile': 50,
 *   'small': 30,
 *   '> small': 20
 * }} />
 * <Stretch size="100">
 * ```
 * @param {number:object} size - the percent size of the element
 * @param {number:object} order - the order placing
 * @returns {Element}
*/
export const Stretch = ({
  children,
  className = '',
  order,
  component = 'div',
  size = 'initial',
  screenSize,
  ...props
}) => (
  React.createElement(
    component,
    {
      ...props,
      className: classnames(
        'react-strip-stretch',
        ...propToClass('react-strip-stretch', size, screenSize),
        ...propToClass('react-strip-order', order, screenSize),
        className
      )
    },
    children
  )
);

Stretch.propTypes = {
  children: PropTypes.node,
  screenSize: PropTypes.object,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  className: PropTypes.string,
  order: PropTypes.number,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default connect(Stretch);
