function solution(keymap, targets) {
  let answer = Array.from(targets).fill(-1);

  for (let i = 0; i < targets.length; i++) {
    let totalPresses = 0;

    for (let j = 0; j < targets[i].length; j++) {
      let minPress = Infinity;

      for (const keydown of keymap) {
        let index = keydown.indexOf(targets[i][j]);
        if (index !== -1) {
          minPress = Math.min(minPress, index + 1);
        }
      }

      if (minPress === Infinity) {
        totalPresses = -1;
        break;
      } else {
        totalPresses += minPress;
      }
    }

    answer[i] = totalPresses;
  }

  return answer;
}
