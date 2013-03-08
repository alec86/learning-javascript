/*
 * exercise 02
 * write a script exercise02.js containing a function fibonacci(i)
 * that returns the i-th element of the Fibonacci's serie (apply memoization pattern) 
 */


function fibonacci (n) {
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci[n];
}

fibonacci[0] = 0;
fibonacci[1] = 1;