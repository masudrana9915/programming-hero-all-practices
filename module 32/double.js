const numbers = [2, 4, 6, 8, 10];
function getDouble (numbers){
    const output =[];

    for (const number of numbers){
        const double = number * 2;
        output.push(double);
    }
    return output;
}
const result = getDouble(numbers);
console.log(result);