import { duplicateRemover } from "../Problems/Remove-Duplicates-from-Sorted-Array";

describe("duplicateRemover", () => {

    test("duplicateRemover instantiates and returns a number", () => {
        const number = duplicateRemover([1, 23, 4]);
        const result = typeof number;
        expect(result).toEqual("number");
    });

    test("duplicateRemover should loop through num array and remove duplicates", () => {
        const testArray = [0, 1, 1, 1, 2, 2, 3, 4, 4];
        const result = duplicateRemover(testArray);
        expect(result).toEqual(5);
    })

    test("testArray should only have unique element after duplicatRemover mutates it", () => {
        const testArray = [0, 1, 1, 1, 2, 2, 3, 4, 4];
        duplicateRemover(testArray);
        expect(testArray).toEqual([0, 1, 2, 3, 4]);
    });
})