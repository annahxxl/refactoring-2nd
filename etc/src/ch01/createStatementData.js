const TragedyCalculator = require("./calculator/TragedyCalculator");
const ComedyCalculator = require("./calculator/ComedyCalculator");

function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance); // 얕은 복사 수행
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function createPerformanceCalculator(aPerformance, aPlay) {
    switch (aPlay.type) {
      case "tragedy":
        return new TragedyCalculator(aPerformance, aPlay);
      case "comedy":
        return new ComedyCalculator(aPerformance, aPlay);
    }
  }
}

module.exports = createStatementData;
