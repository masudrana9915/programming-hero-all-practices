const country = "Bangladesh";
const isIndependent = true;
const age = 52;
const student = {id:23, class:10, name:'sagor'};
const friends = (10,11,12,13,34,44,45);
function add (num1,num2){
    return num1+num2;
}

console.log (typeof country);
console .log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);

console.log(Array.isArray(friends));
console.log(friends.includes(12));