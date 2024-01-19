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
    } else if(indexLocation === (numArray.length - 1)) {
        if(numArray[indexLocation - 1] < numArray[indexLocation]) {
            lowestNum = numArray[indexLocation -1];
            nextIndex = indexLocation - 1;
        } else {
            lowestNum = numArray[indexLocation];
            nextIndex = indexLocation;
        }
    }
    return [lowestNum, nextIndex];
}