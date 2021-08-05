//  check even number 

let num = 20;
function checkEven(number){
    if(number % 2 == 0){
        return 'even'
    }
    else{
        return 'not even'
    }
}
// output
const numberOne = checkEven(num);
console.log('the number is: ', numberOne);

// check odd number 

function checkOddNumber(number2){
    if(number2 % 2 != 0){
         return 'odd';
    }
    return 'not odd';
}
//  output 
const myNumber = checkOddNumber(7);
console.log('the number is: ' ,myNumber);