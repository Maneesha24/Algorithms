function pivot(array, start = 0, end = arr.length - 1) {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }

  swap(array, start, swapIdx);
  return swapIdx;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);

    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

module.exports = quickSort;
