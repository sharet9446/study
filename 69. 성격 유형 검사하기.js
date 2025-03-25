function solution(survey, choices) {
  let mbti = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    let score = Math.abs(choices[i] - 4);
    if (choices[i] > 4) {
      mbti[survey[i][1]] += score;
    } else if (choices[i] < 4) {
      mbti[survey[i][0]] += score;
    }
  }

  let result = "";
  result += mbti.R >= mbti.T ? "R" : "T";
  result += mbti.C >= mbti.F ? "C" : "F";
  result += mbti.J >= mbti.M ? "J" : "M";
  result += mbti.A >= mbti.N ? "A" : "N";

  return result;
}
