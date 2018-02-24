// Write a function not
// that takes a function and returns the negation of its result

function not(func) {
  return function(...args) {
    return !func(...args);
  };
}
