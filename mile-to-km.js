function milesToKilometer (miles){
    let kilometer  = miles * 1.609344;
   return kilometer;
}
const merathon = milesToKilometer(10);
console.log('the miles: ', merathon);

// agin practice 

function milesToKilometer2 (miles){
    let km = miles * 1.609344;
    return km;
}
const getMiles = milesToKilometer2(58);
console.log('the miles is: ' ,getMiles);
