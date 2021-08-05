
// inches to feet convert 
var inches = 1058;
var total = inches / 12;
console.log('the foot :', total);

// inches to feet with function 
var myInches = 1204;

function inchesToFeet (inches){
    let feet = inches / 12;
     return feet;
}
const firstInches = inchesToFeet(myInches);
console.log('total foot is', firstInches);