// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(item => Boolean(item) === true);
}

console.log(bouncer([7, "ate", "", false, 9]));

// advance
function bouncer(arr) {
  return arr.filter(Boolean);
}
