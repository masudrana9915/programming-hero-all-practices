function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log("This year is a leap year", year);
    }
    else{
        console.log("This is not a leap year", year);
    }
}
isLeapYear(1984);
isLeapYear(2005);
