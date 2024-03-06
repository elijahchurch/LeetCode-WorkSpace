// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

export function mergeAlternately(word1: string, word2: string): string {
    let array1 : string[] = word1.split("");
    let array2 : string[] = word2.split("");
    let combined : string[] = [];
    if(array1.length > array2.length) {
        let appended: string[] = array1.splice(array2.length, array1.length - array2.length);
        for( let i = 0; i < array2.length ; i++) {
            combined.push(array1[i]);
            combined.push(array2[i]);
        }
        combined.push(...appended);
    } else if ( array1.length < array2.length) {
        let appended: string[] = array2.splice(array1.length, array2.length - array1.length);
        for( let i = 0; i < array1.length ; i++) {
            combined.push(array1[i]);
            combined.push(array2[i]);
        }
        combined.push(...appended);
    } else {
        for( let i = 0; i < array1.length ; i++) {
            combined.push(array1[i]);
            combined.push(array2[i]);
        }
    }
    return combined.join("");
};