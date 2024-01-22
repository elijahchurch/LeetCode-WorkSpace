// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

function findErrorNums(nums: number[]): number[] {
    let repeatNum : number = 0;
    let missingNum : number = 0;
    for(let i = 1; i <= nums.length; i++){
        if(nums.indexOf(i) === -1){
            missingNum = i;
        }
        if(nums.indexOf(i) !== nums.lastIndexOf(i)){
            repeatNum = i;
        }
    }
    return [repeatNum, missingNum]; 
};