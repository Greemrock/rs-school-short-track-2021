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
    str.split('').map((i) => res[i] = 0);

    for (const key in res) {
      str.split('').map((item) => (key === item ? res[item] += 1 : res));
    }

    return res;
  };

  const collectionS1 = getCollection(s1);
  const collectionS2 = getCollection(s2);

  for (const keyS1 in collectionS1) {
    for (const keyS2 in collectionS2) {
      if (keyS1 === keyS2) {
        count += Math.min(collectionS1[keyS1], collectionS2[keyS2]);
      }
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
