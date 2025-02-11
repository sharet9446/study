function solution(lottos, win_nums) {
  let high = 7;
  let low = 7;
  lottos.forEach((number) => {
    if (number === 0) {
      return --high;
    }
    if (win_nums.includes(number)) {
      high--;
      low--;
    }
  });
  return [high === 7 ? 6 : high, low === 7 ? 6 : low];
}
