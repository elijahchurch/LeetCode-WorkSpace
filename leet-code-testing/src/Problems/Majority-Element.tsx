// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums: number[]): number {
    let numberCount : Record<number, number> = {};

    // Loop through nums array and make an Object/Record where the key is the individual number and the value is how many times it appears in the array
    nums.forEach((element) => {
        if(numberCount[element]) {
            numberCount[element] += 1;
        } else {
            numberCount[element] = 1;
        }
    });
    let currentCount: number = 0;
    let majority: number = 0;

    // create entries variable which is an array of key value arrays from the object. When looping through entries, entry[0] is the key and entry[1] is the value/ how many times the key appeared in the original nums array. 
    const entries = Object.entries(numberCount)
    entries.forEach((entry) => {
        if(entry[1] > currentCount) {
            currentCount = entry[1];
            majority = parseInt(entry[0])
        }
    });
    return majority;
};