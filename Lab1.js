
//b2
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const calculateBMI = (weight, height) => {
    return weight / (height ** 2);
}
const markBMI = calculateBMI(markMass, markHeight);
const johnBMI = calculateBMI(johnMass, johnHeight);
if (markBMI > johnBMI) {
    console.log(' Marks BMI ' + markBMI.toFixed(1) +
        ' is higher than Johns ' + johnBMI.toFixed(1))
} else if (johnBMI > markBMI) {
    console.log(' Johns BMI ' + johnBMI.toFixed(1) +
        ' is higher than Marks BMI' + markBMI.toFixed(1))
} else {
    console.log(' Johns BMI ' + johnBMI.toFixed(1) +
        ' is equal Marks BMI' + markBMI.toFixed(1))
}
//b3
const dolphinScores = [96, 108, 89];
const koalasScores = [88, 91, 110];
const CalculateAverage = scores => scores.reduce((acc, val) => acc + val, 0) / scores.length;
const dolphinAverage = CalculateAverage(dolphinScores);
const koalasAverage = CalculateAverage(koalasScores);
const checkMinimumScore = (score) => score >= 100
if (dolphinAverage > koalasAverage && checkMinimumScore(dolphinAverage)) {
    console.log('Dolphins win with ' + dolphinAverage + ' score')
} else if (koalasAverage > dolphinAverage && checkMinimumScore(koalasAverage)) {
    console.log('Koalas win  with ' + koalasAverage + ' score')
} else if (dolphinAverage === koalasAverage && checkMinimumScore(dolphinAverage) && checkMinimumScore(koalasAverage)) {
    console.log('draw')
} else {
    console.log('No team win')
}
const dolphinScoreBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];
const dolphinAverageBonus1 = CalculateAverage(dolphinScoreBonus1);
const koalasAverageBonus1 = CalculateAverage(koalasScoresBonus1);
if (dolphinAverageBonus1 > koalasAverageBonus1 && checkMinimumScore(dolphinAverageBonus1)) {
    console.log('Dolphins win with ' + dolphinAverageBonus1 + ' score')
} else if (koalasAverageBonus1 > dolphinAverageBonus1 && checkMinimumScore(koalasAverageBonus1)) {
    console.log('Koalas win  with ' + koalasAverage + ' score')
} else if (dolphinAverageBonus1 === koalasAverageBonus1 && checkMinimumScore(dolphinAverageBonus1) && checkMinimumScore(koalasAverageBonus1)) {
    console.log('draw')
} else {
    console.log('No team win')
}
const dolphinScoreBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];
const dolphinAverageBonus2 = CalculateAverage(dolphinScoreBonus2);
const koalasAverageBonus2 = CalculateAverage(koalasScoresBonus2);
if (dolphinAverageBonus2 > koalasAverageBonus2 && checkMinimumScore(dolphinAverageBonus2)) {
    console.log('Dolphins win with ' + dolphinAverageBonus2 + ' score')
} else if (koalasAverageBonus2 > dolphinAverageBonus2 && checkMinimumScore(koalasAverageBonus2)) {
    console.log('Koalas win  with ' + koalasAverage + ' score')
} else if (dolphinAverageBonus2 === koalasAverageBonus2 && checkMinimumScore(dolphinAverageBonus2) && checkMinimumScore(koalasAverageBonus2)) {
    console.log('draw')
} else {
    console.log('No team win')
}
//b4
const billValue = [275, 40, 430]
billValue.forEach(bill => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
    const total = bill + tip;
    console.log('The bill was ' + bill + ',the tip was ' + tip + ', and the total value ' +
        total)
})