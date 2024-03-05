// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s: string, t: string): boolean {
    if (s === t) {
        return true;
    }
    const sArray: string[] = s.split("");
    let lastPosition: number = -1;
    for (let i = 0; i < sArray.length; i++) {
        // search for index of next chara in the array in the target string starting from the last position of the previous character (or start at 0 if this is the first time in the loop)
        let charaPosition: number = t.indexOf(sArray[i], lastPosition + 1);
        // if chara was not found (charaPosition = -1), that means it can't be a subsequence
        if (charaPosition === -1) {
            return false;
        }
        // set new last position if the chara was found behind the previous last postion and continue the loop
        if (charaPosition > lastPosition) {
            lastPosition = charaPosition;
        } 
    };
    // if loop finishes that means all charas were found in sequence after eachother in the loop, therefore is a subsequence
    return true;
};