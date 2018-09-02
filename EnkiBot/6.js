/* 
Default + Rest + Spread
Default + Rest + Spread, this kata is mainly aimed at the new JS ES6 Update introducing class extends
Task
Your task is to Refactor these functions to pass the tests and to follow the new JS ES2015 examples below!
Default
In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is where default parameters can help.
In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are undefined. If in the following example, no value is provided for b in the call, its value would be undefined when evaluating a*b and the call to multiple would have returned NaN. However, this is caught with the second line in this example: 

*/

function defaultExample(x, y=7) {
    return x + y;
  }
  
  function restExample(x, ...y) {
    return x * y.length;
  }
  
  function spreadExample(...x) {
    return x[0] + x[1] + x[2];
  }