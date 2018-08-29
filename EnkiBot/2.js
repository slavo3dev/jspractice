// This lesson we learn a very useful method of array: filter(). The filter() method creates a new array with all elements that pass the test implemented by the provided function. For more information, please refer to: Array.prototype.filter()

// Here are some examples to help us understand the use of filter():

// filter() always accept a function as parameter, the function always return boolean value true or false. filter() returns a new array that contains only the elements that meet the conditions(The elements as a parameters of the function, return true value).


/* 

Grading rules:
```
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)

*/

function countGrade(scores){
    //coding here...

    let gradeResult = {
        S: scores.filter(x=> x === 100).length,
        A: scores.filter(x=> x < 100 && x >= 90).length,
        B: scores.filter(x=> x < 90 && x >= 80).length, 
        C: scores.filter(x=> x < 80 && x >= 60).length,
        D: scores.filter(x=> x<60 && x >= 0).length,
        X: scores.filter(x=>  x === -1).length
    }
      
    return gradeResult
  }


// Some example:

console.log(countGrade([50,60,70,80,90,100]))
// should return {S:1, A:1, B:1, C:2, D:1, X:0}
console.log(countGrade([65,75,85,85,95,100,100]))
// should return {S:2, A:1, B:2, C:2, D:0, X:0}
console.log(countGrade([-1,-1,-1,-1,-1,-1]))
// should return {S:0, A:0, B:0, C:0, D:0, X:6}


// solution 2

function countGrade(scores){
    //coding here...
    let grade = ["S", "A", "B", "C", "D", "X"];
    let gradeObj = {}

    for (let i = 0; i < grade.length; i++){
        
    }
    let gradeResult = {
        S: scores.filter(x=> x === 100).length,
        A: scores.filter(x=> x < 100 && x >= 90).length,
        B: scores.filter(x=> x < 90 && x >= 80).length, 
        C: scores.filter(x=> x < 80 && x >= 60).length,
        D: scores.filter(x=> x<60 && x >= 0).length,
        X: scores.filter(x=>  x === -1).length
    }
      
    return gradeResult
  }