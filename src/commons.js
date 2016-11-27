import { connectScreenSize } from 'react-screen-size';
import _ from 'lodash';


/**
 * Joins all parameters with a `-`
 * @returns {string}
 */
const snakeCase = (...args) => args.join('-');

export const propToClass = (prefix, prop, screen = {}) => {
  if (prop === undefined) return [];

  if (Array.isArray(prop)) {
    return [].concat(
      ...prop.map(item => propToClass(prefix, item, screen))
    );
  }

  return [snakeCase(prefix, prop)];
};

/**
 * It joins the perpendicular and parallel align of the given query or class
 * into a single string separated by `-`
 * @param {object|string} align
 * @returns {object|string}
 */
export const parseAlign = (align) => {
  if (typeof align === 'object') return _.mapValues(align, parseAlign);
  const [parallel, perpendicular] = align.split(' ');
  return [
    `parallel-${parallel}`,
    `perpendicular-${perpendicular}`
  ];
};

const normalizeProp = (prop, screen) => {
  return _.isPlainObject(prop)
    ? _.find(prop, (value, key) => screen[key])
    : prop;
};

const mapScreenToProps = (screen, ownProps) => {
  const keys = ['align', 'direction', 'size', 'order'].filter(key => key in ownProps);
  const values = keys.map(key => normalizeProp(ownProps[key], screen));
  return _.zipObject(keys, values);
};

export const connect = connectScreenSize(mapScreenToProps);
