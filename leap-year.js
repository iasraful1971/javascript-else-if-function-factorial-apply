function leapYear (year){
    if(year % 4 ==0){
        return  'Leapyear';
    }
    else{
        return 'no leap year';
    }
}
// get output 

const yearOne = leapYear(2021);
console.log('the year is: ' ,yearOne);
const yearTwo = leapYear(2124);
console.log('the year is: ',yearTwo);


