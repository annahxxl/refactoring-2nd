function disabilityAmount(employee) {
  if (isNotEligibleFordisability(employee)) {
    return 0;
  }
  return 1;
}

function isNotEligibleFordisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
