function findWinners(matches: number[][]): number[][] {
    let winners = [];
    let losers = [];
    matches.forEach(element => {
        winners.push(element[0]);
        losers.push(element[1]);
    })
    const undefeated : number[] = winners.filter((e, index) => !losers.includes(e) && winners.indexOf(e) === index);
    const oneLoss: number[] = losers.filter(e => losers.indexOf(e) === losers.lastIndexOf(e));
    return [(undefeated.sort((a,b) => a - b)), (oneLoss.sort((a, b) => a -b))];
};