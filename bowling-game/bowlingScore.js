const bowling = (rolls) => {


}

const frameScore = (rolls, rollIndex, frameCase) => {  //calculates the total score for each frame
    let frameScoreArray = [];
    switch (frameCase) {
        case 'spare':
        case 'strike':
            frameScoreArray = [];
            frameScoreArray.push(rolls[rollIndex], rolls[rollIndex + 1], rolls[rollIndex + 2]);
            break;
        case 'openFrame':
            frameScoreArray = [];
            frameScoreArray.push(rolls[rollIndex], rolls[rollIndex + 1]);
            break;

    }
    return frameScoreArray.reduce((scoreSum, score) => {
        return scoreSum + score;
    }, 0);

}



module.exports = { frameScore, bowling };