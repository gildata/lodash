import baseForOwnRight from './baseForOwnRight';
import isLength from './isLength';
import toObject from './toObject';

/**
 * The base implementation of `_.forEachRight` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
function baseEachRight(collection, iteratee) {
  var length = collection ? collection.length : 0;
  if (!isLength(length)) {
    return baseForOwnRight(collection, iteratee);
  }
  var iterable = toObject(collection);
  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return collection;
}

export default baseEachRight;
