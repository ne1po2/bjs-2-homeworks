"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let dis = b ** 2 - 4 * a * c;
    if (dis < 0) {
        return arr;
    } else if (dis == 0) {
        arr.push(-b / (2 * a));
    } else {
        arr.push((-b + Math.sqrt(dis)) / (2 * a));
        arr.push((-b - Math.sqrt(dis)) / (2 * a));
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = percent / 100 / 12;
    let s = amount - contribution;
    let total = (s * (p + (p / (((1 + p) ** countMonths) - 1)))) * countMonths;
    return total.toFixed(2);
}

// console.log(calculateTotalMortgage(10, 0, 50000, 12));
// console.log(calculateTotalMortgage(10, 1000, 50000, 12));
// console.log(calculateTotalMortgage(10, 20000, 20000, 48));
// console.log(calculateTotalMortgage(10, 0, 10000, 36));
// console.log(calculateTotalMortgage(15, 0, 10000, 36));
// expect(calculateTotalMortgage(10, 0, 50000, 12)).toEqual(52749.53);
//     });

//     it('верно считать кредит: кейс #2', () => {
//       expect(calculateTotalMortgage(10, 1000, 50000, 12)).toEqual(51694.54);
//     });

//     it('верно считать кредит: кейс #3', () => {
//       expect(calculateTotalMortgage(10, 20000, 20000, 48)).toEqual(0);
//     });

//     it('верно считать кредит: кейс #4', () => {
//       expect(calculateTotalMortgage(10, 0, 10000, 36)).toEqual(11616.19);
//     });

//     it('верно считать кредит: кейс #5', () => {
//       expect(calculateTotalMortgage(15, 0, 10000, 36)).toEqual(12479.52);