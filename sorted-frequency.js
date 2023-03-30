function sortedFrequency(arr, val) {
  const start = getStartPoint();
  const end = getEndPoint();

  //return # of instances of var, return 0 if var not in array
  if (start === -1 || end === -1) {
    return 0;
  }
  return end + 1 - start;

  // get index of first instance of var, return -1 if var not found
  function getStartPoint() {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
      let midIdx = Math.floor((endIdx + startIdx) / 2);

      if (arr[midIdx] === val && (arr[midIdx - 1] < val || midIdx === 0)) {
        return midIdx;
      } else if (arr[midIdx] === val || arr[midIdx] > val) {
        endIdx = midIdx - 1;
      } else if (arr[midIdx] < val) {
        startIdx = midIdx + 1;
      }
    }
    return -1;
  }
  //get index of last instance of var, return -1 if var not found
  function getEndPoint() {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
      let midIdx = Math.floor((endIdx + startIdx) / 2);
      if (
        arr[midIdx] === val &&
        (arr[midIdx + 1] > val || midIdx === arr.length - 1)
      ) {
        return midIdx;
      } else if (arr[midIdx] === val || arr[midIdx] < val) {
        startIdx = midIdx + 1;
      } else if (arr[midIdx] > val) {
        endIdx = midIdx - 1;
      }
    }
    return -1;
  }
}

module.exports = sortedFrequency;
