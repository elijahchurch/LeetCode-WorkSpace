// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s: string): number {
    const trimmed : string = s.trim();
    const lastIndex : number = trimmed.lastIndexOf(" ");
    const lastWord : string = trimmed.substring(lastIndex + 1);
    return lastWord.length;
};