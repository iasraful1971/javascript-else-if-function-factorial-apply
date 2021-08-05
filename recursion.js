// recursion basic 

let myFunc = function (){
    myFunc();
}

// } for loop 
/*
let total = 0;
let n = 10;
for(let i = 1; i <= n; i++){
    total +=i;
}
console.log(total); */

// recursive way 
function sum (n){
    if(n === 0){
        return 0;
    } else {

        return sum(n - 1) + n;
    }
}
console.log(sum(10));