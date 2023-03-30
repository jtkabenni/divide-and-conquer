function countZeroes(arr) {
  // return # of 0s based on firstIndex of zero
  if (getFirstZeroIndex() === -1) return 0;

  zeroIdx = getFirstZeroIndex();
  return arr.length - zeroIdx;

  // get the index of the first 0. return -1 if 0s don't exist
  function getFirstZeroIndex() {
    if (arr[arr.length - 1] === 1) {
      return -1;
    }
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
      let midIdx = Math.floor((endIdx + startIdx) / 2);

      if (arr[midIdx] === 0 && (arr[midIdx - 1] === 1 || midIdx === 0)) {
        return midIdx;
      }
      if (arr[midIdx] === 1) {
        startIdx = midIdx + 1;
      } else if (arr[midIdx] === 0) {
        endIdx = midIdx - 1;
      }
    }

    return -1;
  }
}

module.exports = countZeroes;
