export const minFallingPathSum = (matrix: number[][]): number => {
    const firstElement: number[][] = matrix.splice(0,1);
    let sum: number;
    let startingIndex: number;
    firstElement[0].forEach((element, index) => {
        if(index === 0){
            sum = element;
            startingIndex = index;
        } else{
            if(element < sum) {
                sum = element;
                startingIndex = index;
            }
        }
    })
    console.log(sum, startingIndex);
    return 0;
} 