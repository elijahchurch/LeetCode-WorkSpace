export const minFallingPathSum = (matrix: number[][]): number => {
    const firstElement: number[][] = matrix.splice(0,1);
    let sum: number;
    let indexLocation: number;
    firstElement[0].forEach((element, index) => {
        if(index === 0){
            sum = element;
            indexLocation = index;
        } else if(element < sum) {
                sum = element;
                indexLocation = index;
        }
    });
    return 0;
} 

export const lowestNumAndIndex = (numArray: number[], indexLocation : number) => {
    let lowestNum: number;
    let nextIndex: number;
    if(indexLocation === 0) {
        if(numArray[0] < numArray[1]) {
            lowestNum = numArray[0];
            nextIndex = 0;
        } else {
            lowestNum = numArray[1];
            nextIndex = 1;
        }   
    }
    return [lowestNum, nextIndex];
}