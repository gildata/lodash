import baseSlice from '../internal/baseSlice';
import createWrapper from '../internal/createWrapper';
import replaceHolders from '../internal/replaceHolders';

/** Used to compose bitmasks for wrapper metadata. */
var PARTIAL_RIGHT_FLAG = 64;

/**
 * This method is like `_.partial` except that partially applied arguments
 * are appended to those provided to the new function.
 *
 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method does not set the `length` property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [args] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * var greet = function(greeting, name) {
 *   return greeting + ' ' + name;
 * };
 *
 * var greetFred = _.partialRight(greet, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 *
 * // using placeholders
 * var sayHelloTo = _.partialRight(greet, 'hello', _);
 * sayHelloTo('fred');
 * // => 'hello fred'
 */
function partialRight(func) {
  var partials = baseSlice(arguments, 1),
      holders = replaceHolders(partials, partialRight.placeholder);

  return createWrapper(func, PARTIAL_RIGHT_FLAG, null, partials, holders);
}

// Assign default placeholders.
partialRight.placeholder = {};

export default partialRight;
