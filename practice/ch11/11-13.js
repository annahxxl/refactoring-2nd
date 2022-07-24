const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0; // JS에선 배열의 인덱스를 벗어난다고 해서 에러가 발생하지 않아 가능
  /*
  if (periodNumber < 0 || periodNumber >= values.length) {
    return 0;
  }
  return values[periodNumber];
  */
}

getValueForPeriod(-10);
