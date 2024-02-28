import { duplicateRemover } from "../Problems/Remove-Duplicates-from-Sorted-Array";

describe("duplicateRemover", () => {

    test("duplicateRemover instantiates and returns a number", () => {
        const number = duplicateRemover([1,23,4]);
        const result = typeof number;
        expect(result).toEqual("number");
    });
    
})