// Function to print
// all the even numbers
// from L to R
function Even(L, R) {
  // Base case
  if (R < L) {
    return;
  }

  // Recurrence relation
  if (R % 2 == 0) {
    Even(L, R - 2);
  } else {
    Even(L, R - 1);
  }

  // Check if R is even
  if (R % 2 == 0) {
    console.log(R + " ");
  }
}
let L = 10;
let R = 25;
console.log("Even numbers:");

Even(L, R);
