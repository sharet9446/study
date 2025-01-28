function solution(k, m, score) {
  let answer = 0;
  let highScoreArray = score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) {
    answer += highScoreArray[i] * m;
  }
  return answer;
}
