function solution(X, Y) {
  let answer = "";
  const countY = {};

  for (const num of Y) {
    countY[num] = (countY[num] || 0) + 1;
  }

  for (const num of X) {
    if (countY[num]) {
      answer += num;
      countY[num]--;
    }
  }

  if (answer === "") return "-1";
  if (+answer === 0) return "0";
  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
