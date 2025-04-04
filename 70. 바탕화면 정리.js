function solution(wallpaper) {
  let answer = [-1, null, -1, null];
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      if (answer[0] === -1) {
        answer[0] = i;
      }

      const answerTwoIndex = wallpaper[i].indexOf("#");
      if (answer[1] === null || answerTwoIndex < answer[1]) {
        answer[1] = answerTwoIndex;
      }

      const answerFourIndex = wallpaper[i].lastIndexOf("#");
      if (answer[3] === null || answerFourIndex > answer[3]) {
        answer[3] = answerFourIndex;
      }
      answer[2] = i;
    }
  }

  answer[2] += 1;
  answer[3] += 1;

  return answer;
}
