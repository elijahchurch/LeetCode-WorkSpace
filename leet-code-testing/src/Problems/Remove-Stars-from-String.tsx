// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.


// This function works but runs too slow when submitted
function removeStars(s: string): string {
    let sArray: string[] = s.split("");
    let answer: string = "";
    function removeStarAndLetter(array: string[]): void {
        if(array.indexOf("*") === -1) {
            answer = array.join("");
            return;
        } else {
            const starIndex: number = array.indexOf("*");
            array.splice(starIndex -1, 2);
            return removeStarAndLetter(array);
        }
    };
    removeStarAndLetter(sArray);
    return answer;
};