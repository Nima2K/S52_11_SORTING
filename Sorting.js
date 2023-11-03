// Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Merge
  function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  // Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  // Insertion Sort
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
  
  // Selection Sort
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (i !== min) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
    return arr;
  }
  
  // Pivot
  function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
      }
    }
  
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
  }
  
  // Quick Sort
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  // Radix Sort
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let num of arr) {
      maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
  }
  
  function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
  
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
  
      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k);
        digitBuckets[digit].push(arr[i]);
      }
  
      arr = [].concat(...digitBuckets);
    }
  
    return arr;
  }
  