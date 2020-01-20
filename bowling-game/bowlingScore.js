let rollArray = [];
const bowling = () => {
    let bowlingScore = 0;

    let rollIndex = 0;
    for (let frame = 0; frame < 10; frame++) {

        if (rollArray[rollIndex] < 10) //no strike case
        {
            if ((rollArray[rollIndex] + rollArray[rollIndex + 1]) == 10) //spare case
            {

                bowlingScore += frameScore(rollArray, rollIndex, 'spare');
                rollIndex += 2;
            }
            else {  //open frame case

                bowlingScore += frameScore(rollArray, rollIndex, 'openFrame');
                rollIndex += 2;
            }
        }
        else {
            //handling strike case
            bowlingScore += frameScore(rollArray, rollIndex, 'strike');
            rollIndex += 1;
        }



    }
    rollArray = [];
    return bowlingScore;

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

const rolls = (pin) => { //the function called for each throw
    rollArray.push(pin);//adds the score for the roll array

}

module.exports = { frameScore, bowling, rolls, rollArray };