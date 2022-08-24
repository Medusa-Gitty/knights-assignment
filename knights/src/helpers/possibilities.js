const possibilities = (index) => {
  let [i, j] = index.split("").map(Number);
  let n = 1;
  let count = {};
  function recursion(i, j, n) {
    if (i < 0 || j < 0 || i > 7 || j > 7) {
      return;
    }
    if (n === 0) {
      count[`${i},${j}`] = 1;
      return;
    }
    recursion(i + 2, j - 1, n - 1);
    recursion(i + 2, j + 1, n - 1);
    recursion(i - 2, j - 1, n - 1);
    recursion(i - 2, j + 1, n - 1);
    recursion(i - 1, j - 2, n - 1);
    recursion(i + 1, j - 2, n - 1);
    recursion(i - 1, j + 2, n - 1);
    recursion(i + 1, j + 2, n - 1);
  }
  recursion(i, j, n);
  return count;
};

export default possibilities;
