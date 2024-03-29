import { lowestNumAndIndex, minFallingPathSum } from "../Problems/Minimum-Falling-Path-Sum";

describe("minFallingPathSum and helper functions", () => {

    test("minFallingPathSum instantiates returns a number", () => {
        const number = minFallingPathSum([[2, 1, 5, -4], [0,20]]);
        const result = typeof number;
        expect(result).toEqual("number");
    });

    test("splice should correctly pull out the first index and leave a mutated array without the first index element", () => {
        const testArray = [[1], [2]];
        const firstElement = testArray.splice(0, 1);
        expect(firstElement).toEqual([[1]]);
        expect(testArray).toEqual([[2]]);
    });

    test("lowestNumAndIndex should correctly return the lowestNum and Index when initalIndex input is 0", () => {
        const testArray = [4,2,6,7,0];
        const result = lowestNumAndIndex(testArray, 0);
        expect(result).toEqual([2,1]);
    })

    test("lowestNumAndIndex should correctly return the lowestNum and Index when initalIndex input matches the last index position of numArray input", () => {
        const testArray = [4,2,6,7,0];
        const result = lowestNumAndIndex(testArray, 4);
        expect(result).toEqual([0,4]);
    })

    test("lowestNumAndIndex should correctly return the lowestNum and Index when initalIndex input is between numArray input", () => {
        const testArray = [4,2,6,7,0];
        const result = lowestNumAndIndex(testArray, 2);
        expect(result).toEqual([2,1]);
    })

    test("minFallingPathSum should successfully loop through entire matrix and return lowest sum", () => {
        const testArray = [[0,1,-1,4], [0,1,2,3], [40, -38, -48, 36]];
        const result = minFallingPathSum(testArray);
        expect(result).toEqual(-48);
    })


});