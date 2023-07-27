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
    total = parseFloat(total.toFixed(2));
    if (isNaN(total)) {
      return false;
    } else {
      return total;
    }
}