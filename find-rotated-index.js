function findRotatedIndex(arr, val) {
  let startIdx = 0;

  let endIdx = arr.length - 1;

  while (startIdx <= endIdx) {
    let midIdx = Math.floor((endIdx + startIdx) / 2);
    if (val === arr[0]) {
      return 0;
    }
    if (val === arr[midIdx]) {
      return midIdx;
    } else if (val >= arr[startIdx] && val <= arr[midIdx]) {
      endIdx = midIdx - 1;
    } else if (val >= arr[midIdx + 1] && val <= arr[endIdx]) {
      startIdx = midIdx + 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
