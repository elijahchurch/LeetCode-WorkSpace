// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums: number[]): void {
    nums.sort((a, b) => {
        // keep numbers in place if neither number is 0
        if(a !== 0 && b !== 0 ) {
            return 0;
        // if a is a 0 return 1, meaning put it behind b
        } else if( a === 0) {
            return 1;
        //  The else here is stating b is a 0, therefor return -1, meaning put a in front of b
        } else {
            return -1;
        }
    })
};