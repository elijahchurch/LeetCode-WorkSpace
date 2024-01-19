import { minFallingPathSum } from "../Problems/Minimum-Falling-Path-Sum";

describe("minFallingPathSum and helper functions", () => {

    test("minFallingPathSum instantiates returns a number", () => {
        const number = minFallingPathSum([[0,20]]);
        const result = typeof number;
        expect(result).toEqual("number");
    });

});