function findWinners(matches: number[][]): number[][] {
    let winners : number[] = [];
    let losers : number[] = [];
    let lossesByPlayer: Record<number, number> = {};
    matches.forEach(element => {
        winners.push(element[0]);
        losers.push(element[1]);
        if(lossesByPlayer[element[1]]) {
            lossesByPlayer[element[1]] = lossesByPlayer[element[1]] + 1;
        } else {
            lossesByPlayer[element[1]] = 1;
        }
    })
    const undefeated : number[] = [... new Set(winners)].filter((e, index) => lossesByPlayer[e] === undefined);
    const oneLoss: number[] = losers.filter(e => lossesByPlayer[e] === 1);
    return [(undefeated.sort((a,b) => a - b)), (oneLoss.sort((a, b) => a - b))];
};