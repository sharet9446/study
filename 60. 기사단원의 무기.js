function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    let attackPower = 1;
    for (let j = 1; j <= i / 2; j++) {
      i % j === 0 && attackPower++;
    }
    result += attackPower > limit ? power : attackPower;
  }
  return result;
}
