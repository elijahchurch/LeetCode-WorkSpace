import { minFallingPathSum } from "../Problems/Minimum-Falling-Path-Sum";

describe("minFallingPathSum and helper functions", () => {

    test("minFallingPathSum instantiates returns a number", () => {
        const number = minFallingPathSum([[0,20]]);
        const result = typeof number;
        expect(result).toEqual("number");
    });

    test("splice should correctly pull out the first index and leave a mutated array without the first index element", () => {
        const testArray = [[1], [2]];
        const firstElement = testArray.splice(0, 1);
        expect(firstElement).toEqual([[1]]);
        expect(testArray).toEqual([[2]]);
    });

    
});