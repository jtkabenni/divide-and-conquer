function findRotationCount(arr) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  while (startIdx <= endIdx) {
    if (arr[startIdx] <= arr[endIdx]) {
      return startIdx;
    }
    let midIdx = Math.floor((endIdx + startIdx) / 2);
    if (arr[midIdx] < arr[midIdx - 1]) {
      return midIdx;
    }
    if (arr[midIdx] < arr[endIdx]) {
      endIdx = midIdx - 1;
    } else if (arr[midIdx] > arr[endIdx]) {
      startIdx = midIdx + 1;
    }
  }
  return -1;
}

module.exports = findRotationCount;
