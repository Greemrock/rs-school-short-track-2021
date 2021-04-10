/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  let count = 0;

  const getCollection = (str) => {
    const res = {};

    str.split('').forEach((item) => {
      if (res[item]) {
        res[item] += 1;
      } else {
        res[item] = 1;
      }
    });

    return res;
  };

  const collectionS1 = getCollection(s1);
  const collectionS2 = getCollection(s2);

  Object.keys(collectionS1).forEach((key) => {
    if (collectionS2[key]) {
      count += Math.min(collectionS1[key], collectionS2[key]);
    }
  });

  return count;
}

module.exports = getCommonCharacterCount;
