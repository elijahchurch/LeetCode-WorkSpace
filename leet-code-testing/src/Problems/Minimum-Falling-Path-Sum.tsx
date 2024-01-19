export const minFallingPathSum = (matrix: number[][]): number => {
    const firstElement: number[][] = matrix.splice(0,1);
    let sum: number = 0;
    let indexLocation: number = 0;
    firstElement[0].forEach((element, index) => {
        if(index === 0){
            sum = element;
            indexLocation = index;
        } else if(element < sum) {
                sum = element;
                indexLocation = index;
        }
    });
    matrix.forEach((element) => {
        const lowestData = lowestNumAndIndex(element, indexLocation);
        sum += lowestData[0];
        indexLocation = lowestData[1];
    })
    return sum;
} 

export const lowestNumAndIndex = (numArray: number[], indexLocation : number) => {
    let lowestNum: number = 0;
    let nextIndex: number = 0;
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
    } else {
        for(let i = indexLocation -1; i <= indexLocation + 1; i++) {
            if(i === indexLocation -1) {
                lowestNum = numArray[i];
                nextIndex = i;
            } else if(numArray[i] < lowestNum) {
                lowestNum = numArray[i];
                nextIndex = i;
            }
        }
    }
    return [lowestNum, nextIndex];
}