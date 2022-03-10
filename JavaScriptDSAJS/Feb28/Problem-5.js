function printClosest(arr, n, x) {
  // To store indexes of result pair
  let res_l = 0,
    res_r = 0;

  // Initialize left and right indexes
  // and difference between
  // pair sum and x
  let l = 0,
    r = n - 1,
    diff = Number.MAX_VALUE;

  // While there are elements
  // between l and r
  while (r > l) {
    // Check if this pair is closer
    // than the closest pair so far
    if (Math.abs(arr[l] + arr[r] - x) < diff) {
      res_l = l;
      res_r = r;
      diff = Math.abs(arr[l] + arr[r] - x);
    }

    // If this pair has more sum,
    // move to smaller values.
    if (arr[l] + arr[r] > x) r--;
    // Move to larger values
    else l++;
  }

  console.log(" The closest pair is " + arr[res_l] + " and " + arr[res_r]);
}

let arr = [10, 22, 28, 29, 30, 40],
  x = 32;
let n = arr.length;
printClosest(arr, n, x);
