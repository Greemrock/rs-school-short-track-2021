/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  let max = 0;
  const str = String(n);

  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    if (max < +newStr) {
      max = +newStr;
    }
  }

  return max;
}

module.exports = deleteDigit;
