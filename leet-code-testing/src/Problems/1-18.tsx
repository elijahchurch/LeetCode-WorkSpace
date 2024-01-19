// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }

    let a: number = 1;
    let b: number = 1;
    let nth: number = 2;
    for (let i = 2; i <= n; i++){
        nth = a + b;
        a = b;
        b = nth;
    }
    return nth;
};


// Note: This problem creates the Fibonacci sequence but one step ahead. The Fibonacci sequence properly aligned looks like this:

function findFibonacci(n: number): number {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }

    let a: number = 0;
    let b: number = 1;
    let nth: number;
    for (let i = 2; i <= n; i++){
        nth = a + b;
        a = b;
        b = nth;
    }
    return nth;
};
