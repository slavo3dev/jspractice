/* 
Loading Kata: Training JS #32: methods of Math---round() ceil() and floor()

Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.


*/

function roundIt(n){

  const [integer, decimals] = String(n).split('.')

  if (decimals.length > integer.length)

        {   return Math.ceil(n)
        
        } else if (decimals.length < integer.length) {
              
            return Math.floor(n)
            
        } else if  (decimals.length === integer.length) {
                   
            return Math.round(n)

        } else {
            return 
        }
  }


console.log(roundIt(3.45));
console.log(roundIt(34.5));
console.log(roundIt(34.56));
console.log(roundIt(34.45));


