function solution(answers) {
  let answer = [];
  let examineeNumber = 0;
  let previousAnswer = 0;

  function correctAnswers(MathArr) {
    let correctCount = 0;

    MathArr =
      MathArr.length >= answers.length
        ? MathArr
        : [].concat(
            ...Array(Math.ceil(answers.length / MathArr.length)).fill(MathArr)
          );

    for (let i = 0; i < answers.length; i++) {
      MathArr[i] === answers[i] && correctCount++;
    }

    examineeNumber++;

    if (examineeNumber !== 1) {
      if (previousAnswer < correctCount) {
        previousAnswer = correctCount;
        return (answer = [examineeNumber]);
      } else if (previousAnswer === correctCount)
        return answer.push(examineeNumber);
      else {
        return;
      }
    } else {
      previousAnswer = correctCount;
      return answer.push(examineeNumber);
    }
  }

  correctAnswers([1, 2, 3, 4, 5]);
  correctAnswers([2, 1, 2, 3, 2, 4, 2, 5]);
  correctAnswers([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  return answer;
}
