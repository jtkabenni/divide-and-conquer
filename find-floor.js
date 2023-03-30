function findFloor(arr, val) {
  let startIdx = 0;
  let endIdx = arr.length - 1;

  while (startIdx <= endIdx) {
    let midIdx = Math.floor((endIdx + startIdx) / 2);
    if (val < arr[startIdx]) {
      return -1;
    } else if (val >= arr[endIdx]) {
      return arr[endIdx];
    }

    if (val >= arr[midIdx] && val < arr[midIdx + 1]) {
      return arr[midIdx];
    } else if (val > arr[midIdx]) {
      startIdx = midIdx - 1;
    } else if (val < arr[midIdx]) {
      endIdx = midIdx + 1;
    }
  }
  return -1;
}

module.exports = findFloor;
