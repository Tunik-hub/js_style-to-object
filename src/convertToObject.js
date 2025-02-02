'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';').map(pair =>
    pair.trim()).filter(Boolean);
  const cssObject = pairs.reduce((acc, pair) => {
    const [key, value] = pair.split(':').map(part =>
      part.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
