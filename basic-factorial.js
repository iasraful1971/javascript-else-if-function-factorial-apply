// basic factorial 

var factorial = 1;
for(var i = 1; i <= 7; i++){
    factorial = factorial * i;
}
console.log(factorial);

// use while loop with basic factorial

var factor = 1;
var i = 1;
while( i <= 7){
    factor = factor * i;
    i++;
}
console.log(factor);

// faoopctorial with function & for loop

function getFactorial(number){
    let factorial = 1;
    for(var i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
// output 
const myFirstNumber = getFactorial(7);
console.log('result is: ', myFirstNumber);

//faoopctorial with function & for loop

var value = 7; 
function getFactorial2 (number){
    var fact = 1;
    var i = 1;
    while(i <= number){
        fact = fact * i;
        i= i + 1
    }
    return fact;
}
// output
const myValue = getFactorial2(value);
console.log('the second result is: ', myValue);

// agin for practice 
function getFactorial3 (num){
    var factor = 1;
    var i = 1;
    while( i <= num){
        factor = factor * i;
        i++;
    }
    return factor;
}
var myvalueOne = getFactorial3(7);
console.log('the result is' , myvalueOne);

// Decrease
function getFactorialReduc (num){
    let factorial = 1;
    let i = num;
    while(i >= 1){
        factorial = factorial * i;
        i --;
    }
    return factorial;
}
const result = getFactorialReduc(7);
console.log(' result is: ' , result);

// for loop reverse 

function getFactorialReduc2 (num2){
    let factorial = 1;
   for(var i = num2 ; i >= 1; i--){
       factorial = factorial * i;

   }
   return factorial;
}
 var addValue = getFactorialReduc2(7);
 console.log('result is: ', addValue);