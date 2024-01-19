
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

function uniqueOccurrences(arr: number[]): boolean {
    const numbers = {};
    arr.forEach(element => {
        if(numbers[element]) {
            numbers[element] = numbers[element] + 1;
        } else {
            numbers[element] = 1;
        }
    });
    const amount : number[] = Object.values(numbers);
    amount.sort((a,b) => a - b);
    let result = true;
    amount.forEach(element => {
        if(amount.indexOf(element) !== amount.lastIndexOf(element)){
            result = false;
        }
    })
    return result;
};