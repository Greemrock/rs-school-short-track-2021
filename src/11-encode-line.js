/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  if (str.length === 1) {
    return str;
  }

  const res = [];
  let count = 1;
  let prev = str[0];

  for (let idx = 1; idx < str.length + 1; idx++) {
    const cur = str[idx];

    if (cur === prev) {
      count += 1;
    } else {
      res.push(count === 1 ? prev : `${count}${prev}`);
      prev = cur;
      count = 1;
    }
  }

  return res.join('');
}

module.exports = encodeLine;
