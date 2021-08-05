// var  num = 50;
// function checkNum(number) {
// if(number % 2 == 1){
//     return 'odd';
// }
// return 'even';
// }
// var result  = checkNum(num);
// console.log(result);

var num =8;
 if(num % 2==0){
     console.log('even');
 }else{
     console.log('odd');
 }
//  another 

var num = 2;
if(num > 0){
    console.log('positive');
}else if( num < 0){
    console.log('negative');
}else{
    console.log('constent');
}
//  function 
function getValue(num) {
    if(num > 0){
        return ' positive'
    }
    else if(num < 0){
        return 'negative'
    }
    else{
        return 'constent'
    }
}
    var check =getValue(-2);
    console.log(check);

    
    // letter grade 
   
    
 var marks = 79;
 if(marks >=80)
 console.log('A+');
 else if(marks >=70)
 console.log("A");
 else if(marks >= 60)
 console.log("A-");
 else if(marks >=50)
 console.log("B");
 else if(marks >=40)
 console.log("C");
 else if(marks >=33)
 console.log("D");
 else{
     console.log('fail');
 }