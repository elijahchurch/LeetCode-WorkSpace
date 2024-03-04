// Given an integer x return true if x is a palindrome and false otherwise.

function isPalindrome(x: number): boolean {
    if (Math.sign(x) === -1) {
        return false;
    }
    const charaArray: string[] = x.toString().split("");
    const secondArray: string[] = charaArray.slice().reverse();
     // Calling .slice() with no argument creates a clone of the first array that way we can call reverse() on that clone without mutating the first array (*reverse mutates an array)

    for (let i = 0; i < charaArray.length; i++) {
        if (charaArray[i] !== secondArray[i]) {
            return false;
        }
    }
    return true;
}